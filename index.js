




$(document).ready(function() {
    console.log("The document has finished loading.");
});

//Master Variables

var masterVariable = 0;
var questionNumber = 0; //must start at zero, also used for finding the current question in the JSON file

var correctAnswers = 0;
const totalCorrectPossible = 10; 

var indices = [0, 1, 2, 3];

function shuffleArray(array) {
    // Shuffle the array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the indices and reassign them to the variables
indices = shuffleArray(indices);
var indexOne = indices[0];
var indexTwo = indices[1];
var indexThree = indices[2];
var indexFour = indices[3];

console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

var currentAnswer = " ";



// HTML QUIZ INITIATOR
$(document).ready(function() {
    $(document).on('click', '#html-quiz', function() {
        $('.quiz-button').fadeOut(600, function() {
            $('.question-header').fadeOut(600);

            masterVariable = 0;
            console.log("The master variable is now " + masterVariable + " and will initiate the HTML quiz.");
            questionNumber = 0;

            // set up current subject tag. 
            $('#current-sub').removeClass('invisible');

            var $img = $('#current-sub').find('img');
            var $p = $('#current-sub').find('p');

            
            $img.attr('src', './images/icon-html.svg');
            $img.removeClass().addClass('p-2 rounded-3 bg-orange me-4');
            $p.text('HTML'); 

            // removing main menu id's and replacing with quiz id's
            $('#html-quiz').attr("id", "option-one");
            $('#css-quiz').attr("id", "option-two");
            $('#js-quiz').attr("id", "option-three");
            $('#accessibility-quiz').attr("id", "option-four");

            $('#option-one').text("A");
            $('#option-two').text("B");
            $('#option-three').text("C");
            $('#option-four').text("D");

            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('/data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-L-bold blue-900 gap-700"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


                currentAnswer = data.quizzes[masterVariable].questions[questionNumber].answer;
                console.log("The current answer is " + currentAnswer);

            
                // Append the paragraph elements to the question header
                $('.question-header').empty().append(p1, p2);
            }).fail(function() {
                console.log('An error has occurred.');
            });

            // innitiate fade in.
            setTimeout(function() {
                $('.question-header').fadeIn(800);
                $('.status-bar').fadeIn(800);
                $('.status-bar').removeClass("d-none");
            }, 2000);

            setTimeout(function() {
                $('#option-one').fadeIn(800);
            }, 3000);

            setTimeout(function() {
                $('#option-two').fadeIn(800);
            }, 4000);
            
            setTimeout(function() {
                $('#option-three').fadeIn(800);
            }, 5000);

            setTimeout(function() {
                $('#option-four').fadeIn(800);
            }, 6000);

            setTimeout(function() {
                $('#submit').removeClass("d-none");
                $('#submit').addClass("d-flex");
                $('#submit').fadeIn(800);
            }, 7000);

            

        console.log("The HTML quiz button has been clicked.");


    });
});
});

// CSS QUIZ INITIATOR
$(document).ready(function() {
    $(document).on('click', '#css-quiz', function() {
        $('.quiz-button').fadeOut(600, function() {
            $('.question-header').fadeOut(600);

            masterVariable = 1;
            console.log("The master variable is now " + masterVariable + " and will initiate the CSS quiz.");
            questionNumber = 0;

            // set up current subject tag. 
            $('#current-sub').removeClass('invisible');

            var $img = $('#current-sub').find('img');
            var $p = $('#current-sub').find('p');

            
            $img.attr('src', './images/icon-css.svg');
            $img.removeClass().addClass('p-2 rounded-3 bg-green me-4');
            $p.text('CSS'); 

            // removing main menu id's and replacing with quiz id's
            $('#html-quiz').attr("id", "option-one");
            $('#css-quiz').attr("id", "option-two");
            $('#js-quiz').attr("id", "option-three");
            $('#accessibility-quiz').attr("id", "option-four");

            $('#option-one').text("A");
            $('#option-two').text("B");
            $('#option-three').text("C");
            $('#option-four').text("D");

            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('/data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-L-bold blue-900 gap-700"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


                currentAnswer = data.quizzes[masterVariable].questions[questionNumber].answer;
                console.log("The current answer is " + currentAnswer);

            
                // Append the paragraph elements to the question header
                $('.question-header').empty().append(p1, p2);
            }).fail(function() {
                console.log('An error has occurred.');
            });

            // innitiate fade in.
            setTimeout(function() {
                $('.question-header').fadeIn(800);
                $('.status-bar').fadeIn(800);
                $('.status-bar').removeClass("d-none");
            }, 2000);

            setTimeout(function() {
                $('#option-one').fadeIn(800);
            }, 3000);

            setTimeout(function() {
                $('#option-two').fadeIn(800);
            }, 4000);
            
            setTimeout(function() {
                $('#option-three').fadeIn(800);
            }, 5000);

            setTimeout(function() {
                $('#option-four').fadeIn(800);
            }, 6000);

            setTimeout(function() {
                $('#submit').removeClass("d-none");
                $('#submit').addClass("d-flex");
                $('#submit').fadeIn(800);
            }, 7000);

            

        console.log("The CSS quiz button has been clicked.");


    });
});
});




// ANSWER CHECKER

$(document).ready(function() {
    var $this;

    $(document).on('click', '.quiz-button', function() {
        console.log("The quiz button has been clicked.");

        // Store the $(this) reference
        $this = $(this);
        
        $('.quiz-button').removeClass('activated');
        $this.addClass("activated");
        console.log("The active button is " + $this.text());
    });

    $(document).on('click', '#submit', function() {
        console.log("The submit button has been clicked.");

        $.getJSON('/data.json', function(data) {
            if ($this.text() === data.quizzes[masterVariable].questions[questionNumber].answer) {
                console.log("Yes, the answer is " + data.quizzes[masterVariable].questions[questionNumber].answer);
                correctAnswers++;
                console.log("The number of correct answers is " + correctAnswers);

                $this.append('<img src="./images/icon-correct.svg" class="svg-icon" />');

                $('#submit').text("Next Question");
                $('#submit').attr("id", "next-question");
                $this.addClass('correct');

            } else {
                console.log("The answer is incorrect.");
                $this.addClass('incorrect');
                $this.append('<img src="./images/icon-incorrect.svg" class="svg-icon" />');
                $('#submit').text("Next Question");
                $('#submit').attr("id", "next-question");

                var $correctButton = $('.quiz-button:contains(' + currentAnswer + ')');

                $correctButton.append('<img src="./images/icon-correct.svg" class="svg-icon" />');
            }
        });
    });
});



// NEXT QUESTION HANDLER

$(document).ready(function() {
    $(document).on('click', '#next-question', function() {
        console.log("The next question button has been clicked.");
        console.log(masterVariable);

        if (questionNumber < 9) {
            questionNumber++;
            console.log("The question number is now " + questionNumber);

            $.getJSON('/data.json', function(data) {
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-L-bold blue-900 gap-700"); 

                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                $('#option-one').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);

                currentAnswer = data.quizzes[masterVariable].questions[questionNumber].answer;
                console.log("The current answer is " + currentAnswer);

                $('.question-header').empty().append(p1, p2);
            }).fail(function() {
                console.log('An error has occurred.');
            });

            $('.quiz-button').removeClass('activated');
            $('#option-one').removeClass('correct');
            $('#option-two').removeClass('correct');
            $('#option-three').removeClass('correct');
            $('#option-four').removeClass('correct');

            $('#option-one').removeClass('incorrect');
            $('#option-two').removeClass('incorrect');
            $('#option-three').removeClass('incorrect');
            $('#option-four').removeClass('incorrect');

            
            $('#next-question').attr("id", "submit");
            $('#submit').text("Submit");

        } else { // If the question number is 9, then the quiz is over.
            h1r = $("<h1></h1>").text("Quiz completed").addClass("heading-L-regular blue-900 gap-700");
            h1b = $("<h1></h1>").text("You scored...").addClass("heading-L-bold blue-900 gap-600");

            $('.question-header').empty().append(h1r, h1b);


            $('#submit').text('Play Again');
            $('#submit').attr("id", "play-again");

            if (masterVariable === 0){
               //insert html icon src and score card name
            }
            else if (masterVariable === 1){
                //insert css icon src and score card name
            } else if (masterVariable === 2){
                //insert js icon src and score card name
            } else if (masterVariable === 3){
                //insert accessibility icon src and score card name
            } else {
                console.log('An error has occurred with the score card.');
            }


            //add d-flex to score card
            //insert text correctAnswers to score card score

            $('#quiz-btn-container').empty().append(scoreCard);


            scoreCard.append(cardTitle);
            cardTitle.append(quizEndIcon, quizEndName);

        }
    }
    );
}
);



// PLAY AGAIN HANDLER

$(document).ready(function() {
    $(document).on('click', '#play-again', function() {
        console.log("The play again button has been clicked.");

        $('.quiz-button').fadeIn(600);
        $('.question-header').fadeIn(600);
        $('.status-bar').fadeIn(600);

        $('#current-sub').addClass('invisible');

        $('#option-one').text("HTML");
        $('#option-two').text("CSS");
        $('#option-three').text("JavaScript");
        $('#option-four').text("Accessibility");

        $('#option-one').attr("id", "html-quiz");
        $('#option-two').attr("id", "css-quiz");
        $('#option-three').attr("id", "js-quiz");
        $('#option-four').attr("id", "accessibility-quiz");

        $('#submit').text("Submit");
        $('#submit').attr("id", "submit");

        $('#quiz-btn-container').empty().append('<button id="html-quiz" class="quiz-button">HTML</button><button id="css-quiz" class="quiz-button">CSS</button><button id="js-quiz" class="quiz-button">JavaScript</button><button id="accessibility-quiz" class="quiz-button">Accessibility</button>');

        $('#submit').addClass("d-none");
        $('#submit').removeClass("d-flex");

        correctAnswers = 0;
        questionNumber = 0;
        masterVariable = 0;
    });
});

