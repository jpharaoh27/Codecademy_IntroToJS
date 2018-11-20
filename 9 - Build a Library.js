//Parent class - Media
class Media {
  constructor(title) {
    this._title = title,
    this._isCheckedOut = false,
    this._ratings = []
  }
  
    get title() {
      return this._title;
    };
    get isCheckedOut() {
    return this._isCheckedOut;
    };
    get ratings() {
    return this._ratings;
    };
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  };
  
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum / lengthOfArray;
  };
  
  addRating(rating) {
    this.ratings.push(rating);
  };
  
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  };
  
};

//Child class - Book
class Book extends Media {
  constructor(title, author, pages) {
    super(title),
    this._author = author,
    this._pages = pages
  }

    get author() {
      return this._author;
    };
    get pages() {
      return this.pages;
    };
};

//Child class - Movie
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title),
    this._director = director,
    this._runTime = runTime
  }

    get director() {
      return this._director;
    };
    get runTime() {
      return this._runTime;
    };
};

//Child Class - CD
class CD extends Media {
  constructor(title, artist) {
    super(title),
    this._artist = artist,
    this._songs = []
  }

    get artist() {
      return this._artist;
    };
    get songs() {
      return this._songs;
    };
  
    addSong(song) {
      this.songs.push(song);
    };
};

//Book creation
const historyOfEverything = new Book("A short history of Nearly Everything", "Bill Bryson", 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

//Movie creation
const speed = new Movie ("Speed", "Jan de Bont", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log (speed.getAverageRating());

//CD creation
const kamikaze = new CD ("Kamikaze", "Eminem");

kamikaze.toggleCheckOutStatus();
console.log(kamikaze.isCheckedOut);

kamikaze.addSong("Lucky You");
kamikaze.addSong("Kamikaze");
kamikaze.addSong("The Ringer");

console.log(kamikaze.songs.join(", "));