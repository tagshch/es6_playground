
// ------------ ARROW FUNCTION ALSO! ------------

var oneToFive = [1,2,3,4,5];
console.log(oneToFive);
var twoToTen = oneToFive.map( (n) => n * 2 );
console.log(twoToTen);

setTimeout(() => console.log('Gingo!'), 500);



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