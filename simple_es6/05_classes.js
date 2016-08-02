// ------------ Object literals ------------
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

// ------------ Creating class ------------
class Song{
    constructor(title, artist, duration){
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isPlaying = false;
    }
    start(){
        this.isPlaying = true;
    }
    stop(){
        this.isPlaying = false;
    }
}

//------------ default value ------------
class Hat{
    constructor(brand, isEmpty = true){
        this.brand = brand;
        this.isEmpty = isEmpty;
    }
    wearHat(){
        this.isEmpty = false;
    }
}

// ------------ Creating instance of class ------------
var song = new Song('Wonderwall','Oasis','3:45');
song.isPlaying = false;

var myhat = new Hat('Nike',true);
myhat.wearHat();

// ------------ INHERITANCE ------------
// in js5 ->  Song.prototype = Object.create(SuperClass.prototype);
class Music {
    constructor(isPlaying = false){
        this.isPlaying = isPlaying;
    }
    start(){
        this.isPlaying = true;
    }
}
class MySong extends Music{
    constructor(title, isPlaying = false){
        super(isPlaying);
        this.title = title;
    }
}


// ------------ TEMPLATE STRINGS ------------
class Email{
    constructor(){
        this.email = 'some mail';
    }
}







