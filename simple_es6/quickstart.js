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
song.isPlaying === false;

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

//------------ ARROW FUNCTION (and fighting with this) ------------
class Contact {
    constructor(name, email, button){
        this.name = name;
        this.email = email;

        button.onclick = function(event){
            sendMail(this.email);
        }
    }
}
class Contact_2 {
    constructor(name, email, button){
        this.name = name;
        this.email = email;
        var that = this;
        button.onclick = function(event){
            sendEmail(that.email);
        }
    }
}
class Contact_3 {
    constructor(name, email, button){
        this.name = name;
        this.email = email;
        button.onclick = (event) => {
            sendEmail(this.email)
        }
    }
}

// ------------ ARROW FUNCTION ALSO! ------------
var oneToFive = [1,2,3,4,5];
console.log(oneToFive);
var twoToTen = oneToFive.map( (n) => n * 2 );
console.log(twoToTen);

// ------------ LET and CONST ------------
// let - declares a local variable in the block scope
// now if statement with let - have scope!
for(let i = 0; i < 5; i++){
    console.log(i); // 0, 1, 2 ...
}
if(typeof i != 'undefined'){
    console.log(i); // i is not defined
} else {
    console.log('i is undefined');
}
//const or a constant declaration is where once, the variable you can't change. It's read-only
const admin = "Andrew";
//admin = 'Kenneth'; // will give error while transpiling
console.log(admin);
//but if it object - you can change it
const admin_obj = { name: "Admin" };
admin_obj.name = 'Kenneth';
console.log(admin_obj.name, ', but not Admin!');


// ------------ TEMPLATE STRINGS ------------
class Email{
    constructor(){
        this.email = 'some mail';
    }



}







