

var log = console.log;

var app = new App(); 
app.bingo();

function App(){
    return {
        bingo: function () {
            log('bingo');
        }
    }
}