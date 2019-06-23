// VARIABLES =======================================================================

var win = 0;
var lose = 0;
var remain = 10;
var usedletters = [];
var compplay;

// HTML REFERENCES =======================================================================

var wint = document.getElementById('win');
var losst = document.getElementById('loss');
var remaint = document.getElementById('remain');
var guesst = document.getElementById('guess');
var presst = document.getElementById('press');

// USER PRESSING KEY =======================================================================

var direction = confirm("Guess which letter I am thinking of! Press the letter key to guess, and you only have 10 guesses! Good luck.");

// generate this function for computer anwer
function companswer() {
    var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return compplay = computer[Math.floor(Math.random() * computer.length)];
    
}

// restricting to letter
companswer()
document.onkeypress = function (play) {
    var guess = play.key;
    var press = play.key;

    // parseInt detects number and converts it into a number // LIMITING TO ONLY PRESSING LETTERS
    if (parseInt(guess) || guess === "0") {
        return;
    }

    // Reset Guesses

    var guessreset = function () {
        remain = 10;
        document.getElementById('guess').innerHTML = "";
        usedletters = [];
    }

    // Guess history

    if (usedletters.indexOf(guess) >= 0) {
        return;
        // this makes that repeating number not affect current changes
    } else {
        //this pushes the players incorrect guess to the usedArray and writes it to the HTML
        usedletters.push(guess);
        document.getElementById('guess').innerHTML = usedletters;
    }

    // guesses and wins or miss

    if (guess === compplay) {
        win++;
        alert("You Win! One point added for you! :)");
        guessreset();
        companswer();
    }  else if (remain == 0) {
        lose++;
        guessreset();
        alert("Sorry, try again next time!")
        companswer();

    } else {
        remain--;
    }

   

    //show upper case
    press = press.toUpperCase();

    //show on screen
    remaint.textContent = remain;
    presst.textContent = press;
    losst.textContent = lose;
    wint.textContent = win;

}

