class Media{
    constructor(Name,countery,author,numberOfVisits) {
        this.Name = Name;
        this.countery=countery;
        this.author = author;
        this.numberOfVisits =numberOfVisits
    }
}
class Book extends Media {  
    constructor(Name,countery,author) {
        super(Name,countery,author)
        console.log(`{name:${Name},countery:${countery},author:${author}}`)
    }   
    
}
class Film extends Media{
    constructor(Name,countery,numberOfVisits) {
        super(Name,countery,numberOfVisits)
        console.log(`{name:${Name},countery:${countery},numberOfVisits:${numberOfVisits}}`)
    }
}
const book = new Book()
const film = new Film()

/* روش2
class Media {
    constructor(name, country, author) {
      this.name = name;
      this.country = country;
      this.author = author;
    }
  }
  
  class Book extends Media {
    constructor(name, country, author,translater) {
      super(name, country, author);
      this.translater=translater;
    }
  }
  const book = new Book();
  console.log(book);
  
  class Film extends Media {
    constructor(name, country, author,translater,) {
      super(name, country, author);
      this.translater=translater;
    }
  }
  const film = new Film();
  console.log(film);*/