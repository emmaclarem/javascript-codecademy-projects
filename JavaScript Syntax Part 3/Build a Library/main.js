class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get title() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut; 
    }
    getAverageRating() {
      let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating);
      return ratingSum / this._ratings.length;
    }
    addRating(value) {
      this._ratings.push(value);
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const shrekSoundtrack = new CD('Various', 'Shrek Soundtrack', ["I'm a Believer", "Bad Reupation", "All Star", "Hallelujah"]);
  shrekSoundtrack.toggleCheckOutStatus();
  console.log(shrekSoundtrack.isCheckedOut);
  shrekSoundtrack.addRating(5);
  shrekSoundtrack.addRating(4);
  shrekSoundtrack.addRating(5);
  console.log(shrekSoundtrack.getAverageRating());
  