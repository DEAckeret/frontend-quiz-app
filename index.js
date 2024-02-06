console.log("The JS file is connected properly.");


$(document).ready(function() {
    console.log("The document has finished loading.");
});

//Correct Answer Counter

var correctAnswers = 0;
const totalCorrectPossible = 10; 



// HTML QUIZ
$(document).ready(function() {
    $('#html-quiz').click(function() {
        $('.quiz-button').fadeOut(600, function() {
            $('.question-header').fadeOut(600);


            // removing main menu id's and replacing with quiz id's
            $('#html-quiz').attr("id", "option-one");
            $('#css-quiz').attr("id", "option-two");
            $('#js-quiz').attr("id", "option-three");
            $('#accessibility-quiz').attr("id", "option-four");

            


            //fetching json data
            $.getJSON('/data.json', function(data) {
                // Create the first paragraph element with its class
                var p1 = $("<p></p>").text("Question 1 of 10").addClass("body-S blue-900"); 
            
                // Create the second paragraph element with its class
                var p2 = $("<p></p>").text(data.quizzes[0].questions[0].question).addClass("heading-L-bold blue-900 gap-700"); 
            
                // Append the paragraph elements to the question header
                $('.question-header').empty().append(p1, p2);
            }).fail(function() {
                console.log('An error has occurred.');
            });



            // START CODING HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //fetching json data for options
            $.getJSON('/data.json', function(data) {
                
                $('#option-one').empty().append(image, button);
            }).fail(function() {
                console.log('An error has occurred at option one.');
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

            

        console.log("The HTML quiz button has been clicked.");


    });
});
});
