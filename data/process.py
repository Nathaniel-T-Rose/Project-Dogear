def formatArrays():
    with open('goodreads_data_updated.tsv',encoding='utf8') as f:
        with open('books_postgres_input.tsv',encoding='utf8',mode='w') as outfile:
            meta=f.readline()
            cols=meta.split('\t')
            genreCol=cols.index("Genres")
            URLCol=cols.index("URLImage")
            cols[URLCol]="URLCol"
            cols.insert(URLCol+1,"Image")
            outfile.write('\t'.join(cols))
            print(genreCol,URLCol)
            for line in f:
                    try:
                        lineData=line.split('\t')
                        
                        genreString=lineData[genreCol]
                        genreString='{'+(genreString[1:-1] if genreString[1:-1] else "'Fiction'")+'}'
                        lineData[genreCol]=genreString

                        urls=['https'+data for data in lineData[URLCol].split('https')]
                        urls=urls[1:]
                        #print(urls)
                        lineData[URLCol]=urls[0]
                        lineData.insert(URLCol+1,urls[1])

                        outfile.write('\t'.join(lineData))
                    except:
                         print(lineData[0])


if __name__=='__main__':
    formatArrays()