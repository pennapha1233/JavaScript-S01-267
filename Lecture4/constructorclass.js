class Song {
    constructor(title, artist) {
        this.title = title;
        title.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.title);