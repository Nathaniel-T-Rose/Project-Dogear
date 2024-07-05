import requests
from bs4 import BeautifulSoup
import random

random.seed(435211)

def processFile():
    with open('goodreads_data.tsv',encoding='utf8') as f:
        with open('goodreads_data_updated.tsv','w',encoding='utf8') as outfile:
            titleData=""
            meta=f.readline().strip('\n')
            meta+='\t' + '\t'.join(['Image','Price','Stock'])
            outfile.write(meta+'\n')
            for line in f:
                if line[0].isnumeric():
                    if titleData!='':
                        titleData=processLine(titleData)
                        if titleData!=-1:
                            outfile.write(titleData+'\n')
                        #clear and add current 
                        titleData=''
                titleData+=line
def processLine(line):
    lineData=line.split('\t')
    url=lineData[-1]
    #get
    try:
        page = requests.get(url) 
        soup = BeautifulSoup(page.text, 'html.parser')
        book_img=soup.find('div',attrs={'class':'BookCover__image'}).find('img')
        price=str(random.randint(10,23))+'.'+str(random.randint(0,99))
        stock=str(random.randint(10,50))
        return line.strip('\n')+'\t'.join([book_img["src"],price,stock])
    except:
        return -1     
if __name__=='__main__':
    processFile()