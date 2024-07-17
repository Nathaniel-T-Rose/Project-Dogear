import json,requests,os
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from fake_useragent import UserAgent
from dotenv import load_dotenv


ua = UserAgent()
load_dotenv()
gpt_key = os.getenv('OPEN_AI_KEY')
print(gpt_key)
google_books_key = os.getenv('GOOGLE_API_KEY')
print(google_books_key)
headers = {
        "User-Agent": ua.firefox,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "DNT": "1",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-User": "?1",
    }

def getGoogleBooksInfo(book):
    url='https://www.googleapis.com/books/v1/volumes?q=intitle:{title}+inauthor:{author}&key={key}'.format(title=book['title'],author=book['author'],key=google_books_key)
    results=requests.get(url,headers=headers)
    if results.json()['items']:
        return results.json()['items'][0]
    else:
        print('could not locate title')
    return results

def getBookDetails(bookDicts):
    bookDetails=[]
    for b in bookDicts:
        bookDetails.append(getGoogleBooksInfo(b))
    return bookDetails

def buildMessage(books,template):
    message = template 

    for book in books:
        title = book['volumeInfo']['title']
        authors = book['volumeInfo']['authors']
        blurb = book['volumeInfo']['description']
        message +='''
        Title: {title}
        Authors: {authors}
        Description: {blurb}
        '''.format(title=title,authors=authors,blurb=blurb)
    return message

#expects input of k,v pairs for title and author for any number of books
def getRecommendations(bookDict):
    #gpt setup
    model = "gpt-3.5-turbo"
    temp = 0.5
    system_message = "You're a book recommendation bot, suggesting new books to read based on the given titles, genres, and descriptions."
    message_template = '''Your task is to analyze {book titles with their descriptions} provided by the user.
    Based on the title, summary, and genre of each book, you should suggest similar titles that aren't as well known.
    Your recommendations should come from multiple authors, should not include the same author as given books, and should emphasize titles that are as well reviewed as the provided books.
    For each recommended book, provide a synopsis (2-3 lines) and the reasoning for the choice.
    Provide 3 book suggestions as a valid JSON output, the data schema should be as follows: "{'recommendations' : {'title': "Clifford",'author': "Author",'synopsis': "Synopsis",'reason': "Reason"}, {'title': "Clifford",'author': "Author",'synopsis': "Synopsis",'reason': "Reason"},{'title': "Clifford",'author': "Author",'synopsis': "Synopsis",'reason': "Reason"}}'''
    #get title, author, description, genres, etc. from
    # Google Books API for GPT Template
    books=getBookDetails(bookDict)
    # Process, add to template for human message
    human_message=buildMessage(books,message_template)
    openAI = ChatOpenAI(
        openai_api_key=gpt_key,
        model_name=model,
        temperature=temp,
    )

    try:
        output = openAI([SystemMessage(content=system_message),HumanMessage(content=human_message)])
        #fully generated
        if output.response_metadata['finish_reason']=='stop' :
            results_json=json.loads(output.content)
            return getRecsData(results_json)
        else:
            raise Exception('Failed to fully generate recommendation data')
    except Exception as e:
        print('Failed to generate recommendations - Error: %s',e)
        return {}
    
def getRecsData(recs):
    books=recs['recommendations']
    for book in recs['recommendations']:
        url='https://www.googleapis.com/books/v1/volumes?q=intitle:{title}+inauthor:{author}&key={key}'.format(title=book['title'],author=book['author'],key=google_books_key)
        results=requests.get(url,headers=headers)
        if results.json()['items']:
            data=results.json()['items'][0]
            desc = data['volumeInfo']['description']
            images=data['volumeInfo']['imageLinks']
            book['synopsis']=desc
            book['image']=images['thumbnail']
        else:
            print('could not locate title')
    return recs

def main():
    books=[{'title':'Gideon the Ninth','author':'Tamsyn Muir'},
           {'title':'The Ninth House','author':'Leigh'}]
    recs=getRecommendations(books)
    print(recs)

if __name__=='__main__':
    main()