




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

            $('quiz-button').removeClass('d-flex');

            $('#html-svg').addClass("d-none");
            $('#css-svg').addClass("d-none");
            $('#js-svg').addClass("d-none");
            $('#accessibility-svg').addClass("d-none");

            optA = $('<span></span>').text('A').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optB = $('<span></span>').text('B').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optC = $('<span></span>').text('C').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optD = $('<span></span>').text('D').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");

            $('#html-quiz').prepend(optA);
            $('#css-quiz').prepend(optB);
            $('#js-quiz').prepend(optC);
            $('#accessibility-quiz').prepend(optD);

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


            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('./data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S grey-navy pt-4"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-S blue-900 gap-600"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


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


            $('#html-svg').addClass("d-none");
            $('#css-svg').addClass("d-none");
            $('#js-svg').addClass("d-none");
            $('#accessibility-svg').addClass("d-none");

            optA = $('<span></span>').text('A').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optB = $('<span></span>').text('B').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optC = $('<span></span>').text('C').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optD = $('<span></span>').text('D').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");

            $('#html-quiz').prepend(optA);
            $('#css-quiz').prepend(optB);
            $('#js-quiz').prepend(optC);
            $('#accessibility-quiz').prepend(optD);

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


            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('./data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-S blue-900 gap-700"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


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



// JavaScript QUIZ INITIATOR
$(document).ready(function() {
    $(document).on('click', '#js-quiz', function() {
        $('.quiz-button').fadeOut(600, function() {
            $('.question-header').fadeOut(600);


            $('#html-svg').addClass("d-none");
            $('#css-svg').addClass("d-none");
            $('#js-svg').addClass("d-none");
            $('#accessibility-svg').addClass("d-none");

            optA = $('<span></span>').text('A').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optB = $('<span></span>').text('B').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optC = $('<span></span>').text('C').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optD = $('<span></span>').text('D').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");

            $('#html-quiz').prepend(optA);
            $('#css-quiz').prepend(optB);
            $('#js-quiz').prepend(optC);
            $('#accessibility-quiz').prepend(optD);

            masterVariable = 2;
            console.log("The master variable is now " + masterVariable + " and will initiate the JS quiz.");
            questionNumber = 0;

            // set up current subject tag. 
            $('#current-sub').removeClass('invisible');

            var $img = $('#current-sub').find('img');
            var $p = $('#current-sub').find('p');

            
            $img.attr('src', './images/icon-js.svg');
            $img.removeClass().addClass('p-2 rounded-3 bg-blueish me-4');
            $p.text('JavaScript'); 

            // removing main menu id's and replacing with quiz id's
            $('#html-quiz').attr("id", "option-one");
            $('#css-quiz').attr("id", "option-two");
            $('#js-quiz').attr("id", "option-three");
            $('#accessibility-quiz').attr("id", "option-four");


            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('./data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-S blue-900 gap-700"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


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

            

        console.log("The JS quiz button has been clicked.");


    });
});
});




// Accessibility QUIZ INITIATOR
$(document).ready(function() {
    $(document).on('click', '#accessibility-quiz', function() {
        $('.quiz-button').fadeOut(600, function() {
            $('.question-header').fadeOut(600);


            $('#html-svg').addClass("d-none");
            $('#css-svg').addClass("d-none");
            $('#js-svg').addClass("d-none");
            $('#accessibility-svg').addClass("d-none");

            optA = $('<span></span>').text('A').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optB = $('<span></span>').text('B').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optC = $('<span></span>').text('C').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");
            optD = $('<span></span>').text('D').addClass("svg p-3 px-4 rounded-3 bg-light-grey blue-900 me-4 alpha-icon");

            $('#html-quiz').prepend(optA);
            $('#css-quiz').prepend(optB);
            $('#js-quiz').prepend(optC);
            $('#accessibility-quiz').prepend(optD);

            masterVariable = 3;
            console.log("The master variable is now " + masterVariable + " and will initiate the Accessibility quiz.");
            questionNumber = 0;

            // set up current subject tag. 
            $('#current-sub').removeClass('invisible');

            var $img = $('#current-sub').find('img');
            var $p = $('#current-sub').find('p');

            
            $img.attr('src', './images/icon-accessibility.svg');
            $img.removeClass().addClass('p-2 rounded-3 bg-purple me-4');
            $p.text('Accessibility'); 

            // removing main menu id's and replacing with quiz id's
            $('#html-quiz').attr("id", "option-one");
            $('#css-quiz').attr("id", "option-two");
            $('#js-quiz').attr("id", "option-three");
            $('#accessibility-quiz').attr("id", "option-four");

            $('.quiz-button').removeClass('activated');



            //fetching json data
            $.getJSON('./data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-S blue-900 gap-700"); 

                // Shuffle the indices and reassign them to the variables thus shuffling the options. 
                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                
                // Assigning options to each button
                $('#option-one .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);


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

            

        console.log("The Accessibilty quiz button has been clicked.");


    });
});
});



// ANSWER CHECKER

$(document).ready(function() {
    var $this;
   

    $(document).on('click', '.quiz-button', function() {
        console.log("The quiz button has been clicked.");
    
        $('.error-container-quiz').remove();

        // Store the $(this) reference
        $this = $(this);
        
        $('.quiz-button').removeClass('activated');
        $this.addClass("activated");
    });

    $(document).on('click', '#submit', function() {

        if (!$('.quiz-button').hasClass('activated')) {
            // No .quiz-button has the active class
            console.log("No answer has been selected.");

            $('.error-container-quiz').remove();
            
            var errorContainer = $('<div></div>').addClass('error-container-quiz d-flex align-items-center justify-content-center');
            var errorIcon = $('<img src="./images/icon-error.svg"/>').addClass('px-2');
            var errorMessage = $("<p></p>").text("Please select an answer").addClass("error-message-quiz").css('color', 'red');

            $('#quiz-btn-container').append(errorContainer);
            errorContainer.append(errorIcon, errorMessage);
            
            
        } else {


            subAnswer = $this.find('.button-text').text();

            $.getJSON('./data.json', function(data) {
                if (subAnswer === data.quizzes[masterVariable].questions[questionNumber].answer) {
                    console.log("Yes, the answer is " + data.quizzes[masterVariable].questions[questionNumber].answer);
                    correctAnswers++;
                    console.log("The number of correct answers is " + correctAnswers);

                    $this.append('<img src="./images/icon-correct.svg" class="svg-icon correction-marker" />');

                    $('#submit').text("Next Question");
                    $('#submit').attr("id", "next-question");
                    $this.addClass('correct');

                } else {
                    console.log("The answer is incorrect.");
                    $this.addClass('incorrect');
                    $this.append('<img src="./images/icon-incorrect.svg" class="svg-icon correction-marker"/>');
                    $('#submit').text("Next Question");
                    $('#submit').attr("id", "next-question");

                    var $correctButton = $('.quiz-button:contains(' + currentAnswer + ')');

                    $correctButton.append('<img src="./images/icon-correct.svg" class="svg-icon correction-marker" />');
                }

        });
    }
    });
});




// NEXT QUESTION HANDLER

$(document).ready(function() {
    $(document).on('click', '#next-question', function() {
        console.log("The next question button has been clicked.");
        console.log(masterVariable);
        $('.correction-marker').remove();

        if (questionNumber < 9) {
            questionNumber++;
            console.log("The question number is now " + questionNumber);

            $.getJSON('./data.json', function(data) {
                var p1 = $("<p></p>").text("Question " + (questionNumber + 1) + " of 10").addClass("body-S blue-900"); 
                var p2 = $("<p></p>").text(data.quizzes[masterVariable].questions[questionNumber].question).addClass("heading-S blue-900 gap-700"); 

                indices = shuffleArray(indices);
                indexOne = indices[0];
                indexTwo = indices[1];
                indexThree = indices[2];
                indexFour = indices[3];
                console.log("The shuffled indices are: " + indexOne + ", " + indexTwo + ", " + indexThree + ", " + indexFour);

                $('#option-one .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexOne]);
                $('#option-two .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexTwo]);
                $('#option-three .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexThree]);
                $('#option-four .button-text').text(data.quizzes[masterVariable].questions[questionNumber].options[indexFour]);

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

            $('.quiz-status__bar').css('width', ((questionNumber) * 10) + '%');

        } else { // If the question number is 9, then the quiz is over.
            h1r = $("<h1></h1>").text("Quiz completed").addClass("heading-L-regular blue-900 gap-700");
            h1b = $("<h1></h1>").text("You scored...").addClass("heading-L-bold blue-900 gap-600");

            $('.question-header').empty().append(h1r, h1b);
            
            $('.quiz-button').addClass('d-none');

            $('.status-bar').addClass('d-none');


            $('#next-question').text('Play Again');
            $('#next-question').attr("id", "play-again");

            if (masterVariable === 0){
               $('#score-card__img').attr('src', './images/icon-html.svg');
               $('#score-card__name').text('HTML');
            }
            else if (masterVariable === 1){
                $('#score-card__img').attr('src', './images/icon-css.svg').removeClass().addClass('p-2 rounded-3 bg-green');
                $('#score-card__name').text('CSS');
            } else if (masterVariable === 2){
                $('#score-card__img').attr('src', './images/icon-js.svg').removeClass().addClass('p-2 rounded-3 bg-blueish');
                $('#score-card__name').text('JavaScript');
            } else if (masterVariable === 3){
                $('#score-card__img').attr('src', './images/icon-accessibility.svg').removeClass().addClass('p-2 rounded-3 bg-purple');
                $('#score-card__name').text('Accessibility');
            } else {
                console.log('An error has occurred with the score card... but im sure you did pretty well.');
            }


            $('.score-card').removeClass('d-none');
            $('.score-card').addClass('d-flex');
            
            $('#score-card__score').text(correctAnswers);

        }
    }
    );
}
);



// PLAY AGAIN HANDLER

$(document).ready(function() {
    $(document).on('click', '#play-again', function() {
        console.log("The play again button has been clicked.");

        // $('.quiz-button').fadeOut(600);
        // $('.question-header').fadeOut(600);
        // $('.status-bar').fadeOut(600);

        $('#current-sub').addClass('invisible');

        $('#option-one').text("");
        $('#option-two').text("");
        $('#option-three').text("");
        $('#option-four').text("");

        $('.quiz-button').removeClass('activated');
            $('#option-one').removeClass('correct');
            $('#option-two').removeClass('correct');
            $('#option-three').removeClass('correct');
            $('#option-four').removeClass('correct');

            $('#option-one').removeClass('incorrect');
            $('#option-two').removeClass('incorrect');
            $('#option-three').removeClass('incorrect');
            $('#option-four').removeClass('incorrect');

        $('.alpha-icon').remove();

        $('#option-one').attr("id", "html-quiz");
        $('#option-two').attr("id", "css-quiz");
        $('#option-three').attr("id", "js-quiz");
        $('#option-four').attr("id", "accessibility-quiz");

        htmlImg = $('<img src="./images/icon-html.svg" class="p-2 rounded-3 bg-orange me-4" id="html-svg" />');
        hspan = $('<span></span>').text('HTML').addClass('button-text');

        cssImg = $('<img src="./images/icon-css.svg" class="p-2 rounded-3 bg-green me-4" id="css-svg"/>');
        cspan = $('<span></span>').text('CSS').addClass('button-text');

        jsImg = $('<img src="./images/icon-js.svg" class="p-2 rounded-3 bg-blueish me-4" id="js-svg"/>');
        jspan = $('<span></span>').text('JavaScript').addClass('button-text');

        accessibilityImg = $('<img src="./images/icon-accessibility.svg" class="p-2 rounded-3 bg-purple me-4" id="accessibility-svg"/>');
        aspan = $('<span></span>').text('Accessibility').addClass('button-text');

        $('#html-quiz').append(htmlImg, hspan);
        $('#css-quiz').append(cssImg, cspan);
        $('#js-quiz').append(jsImg, jspan);
        $('#accessibility-quiz').append(accessibilityImg, aspan);

        $('#play-again').text("Submit");
        $('#play-again').attr("id", "submit");

        $('#submit').addClass("d-none");
        $('#submit').removeClass("d-flex");

        $('.score-card').addClass('d-none');
        $('.score-card').removeClass('d-flex');

        $('.quiz-button').removeClass('activated');
        $('.quiz-button').removeClass('d-none');
    

        $('.quiz-status__bar').css('width', '10%');

        correctAnswers = 0;
        questionNumber = 0;
        masterVariable = 0;

        var hlr = $("<h1></h1>").text("Welcome to the").addClass("heading-L-regular blue-900");
        var hlb = $("<h1></h1>").text("Frontend Quiz!").addClass("heading-L-bold blue-900");
        var p = $("<p></p>").text("Pick a subject to get started").addClass("body-S blue-700 pt-3 pt-lg-5 pb-4");

        $('.question-header').empty().append(hlr, hlb, p);

        // $('.quiz-button').fadeIn(600);
        // $('.question-header').fadeIn(600);
        // $('.status-bar').fadeIn(600);
    });
});


// END OF QUIZ FUNCTIONS



