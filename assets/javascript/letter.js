    // VARIABLES

    var win = 0;
    var lose = 0;
    var remain = 10;
    var usedletters = [];
    var compplay = compplay

    // HTML REFERENCES

    var wint = document.getElementById('win');
    var losst = document.getElementById('loss');
    var remaint = document.getElementById('remain');
    var guesst = document.getElementById('guess');
    var presst = document.getElementById('press');

    // USER PRESSING KEY

  var direction = confirm("Guess which letter I am thinking of! Press the letter key to guess, and you only have 10 guesses! Good luck.");

    document.onkeypress = function (play) {
        var guess = play.key;
        var press = play.key;
        var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        compplay = computer[Math.floor(Math.random() * computer.length)];
        console.log(compplay);

        // ASK!! HOW TO DO RESTRICT THE SAME ANSWER UNTIL ALL ATTEMPTS ARE UP? HOW DO I RESTRICT LETTERS BEING USED?



        // Reset Guesses

        var guessreset = function () {
            remain = 10;
            document.getElementById('guess').innerHTML = "";
            usedletters = [];
        }

        // Guess history

        if (usedletters.indexOf(guess) >= 0) {

        } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedletters.push(guess);
            document.getElementById('guess').innerHTML = usedletters;
        }

        // guesses and wins or miss

        if (guess === compplay) {
            win++;
            alert("You Win! One point added for you! :)");
            remain = 10;
            guessreset();
            console.log(win);
        } else {
            remain--;
        }
        console.log(remain);

        // if out of guesses

        if (remain == 0) {
            lose++;
            guessreset();
            alert("Sorry, try again next time!")

        }

        //show upper case
        press = press.toUpperCase();

        //show on screen
        remaint.textContent = remain;
        presst.textContent = press;
        losst.textContent = lose;
        wint.textContent = win;

    }
