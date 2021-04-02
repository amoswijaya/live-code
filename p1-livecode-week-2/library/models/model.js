const {Book, Fiction, NonFiction} = require('./book')
const Author = require('./author')
const fs = require('fs')


class Model{

    static save(data){
       fs.writeFileSync('./seeds/buku.json', JSON.stringify(data, null, 2), 'utf-8')
    }
    static list(){
        let result = []
       let  tempdata = JSON.parse(fs.readFileSync('./seeds/buku.json', 'utf-8'))
       for (let i = 0; i < tempdata.length; i++) {
           let book = null
           if(tempdata[i].type === 'NonFiction'){
            book = new NonFiction(tempdata[i].id, tempdata[i].title, tempdata[i].location, undefined, tempdata[i].classification, tempdata[i].publisher)
           }else{
            book = new Fiction(tempdata[i].id, tempdata[i].title, tempdata[i].location, undefined,tempdata[i].genre, tempdata[i].volume)
           }
           for (let j = 0; j < tempdata[i].author.length; j++) {
               book.author.push(new Author(tempdata[i].author[j].name, tempdata[i].author[j].name))
           }

           result.push(book)
       }
        return result
    }

    static addBook(id, title, type, location, genclas, volpub){
        let tempData = this.list()
        if(type === 'Fiction'){
            tempData.push(new Fiction(+id, title, location, undefined, genclas, +volpub))
        }else{
            tempData.push(new NonFiction(+id, title, location, undefined, genclas, volpub))
        }

        this.save(tempData)
    }

    static del(id){
        let tempData = this.list()
        let newData = []
        let delData = []
        for (let i = 0; i < tempData.length; i++) {
            if(tempData[i].id == id){
                delData.push(tempData[i])
            }else{
                newData.push(tempData[i])
            }
        }
        this.save(newData)
        return delData
    }

    static edit(id,arrData){
        let temp = []
        for (let i = 0; i < arrData.length; i++) {
            let sub = []
            for (let j = i; j < 2 + i; j++) {
                sub.push(arrData[j])
            }
            i += (2-1)
            temp.push(sub)
        }
        let tempData = this.list()
        let newAuthor = []
        for (let i = 0; i < temp.length; i++) {
            newAuthor.push(new Author(temp[i][0], temp[i][1]))  
        }
        let result = []
        let ketemu = false
        for (let i = 0; i < tempData.length; i++) {
            if(tempData[i].id == id[0]){
                tempData[i].author = newAuthor
                result.push(tempData[i])
                ketemu = true
            }
        }
        if(!ketemu){
            result.push('error')
        }
        this.save(tempData)
        return result        
    }

    static table(){
        let data = this.list()
        let fiction = []
        let NonFiction = []
        for (let i = 0; i < data.length; i++) {
            if(data[i].type === 'Fiction'){
                fiction.push(
                    {
                        title : data[i].title,
                        genre : data[i].genre,
                        volume: data[i].volume
                    }
                )
            }else{
                NonFiction.push(
                    {
                        title : data[i].title,
                        classification: data[i].classification,
                        publisher: data[i].publisher
                    }
                )
            }
        }

        return [fiction, NonFiction]
    }
}

module.exports = Model