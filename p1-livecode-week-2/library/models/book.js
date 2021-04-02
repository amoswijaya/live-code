class Book{
    constructor(id,title, type, location, author){
        this.id = id
        this.title = title
        this.type = type
        this.location = location
        this.author = author ||[]
    }
}


class Fiction extends Book{
    constructor(id, title,location, author, genre, volume){
       super(id, title, 'Fiction', location, author)
       this.genre = genre
       this.volume = volume
    }
}

class NonFiction extends Book{
    constructor(id, title,location, author, classification, publisher){
       super(id, title,'NonFiction' , location, author)
       this.classification = classification
       this.publisher = publisher
    }
}

module.exports = {
    Book,
    Fiction,
    NonFiction
}