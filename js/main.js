// NAV BAR



$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".main-nav-phone").toggle("slide");
        $(".support-nav").hide(500);
        $(".container").show(500);
    });

    $(".fa-cog").click(function () {
        $(".fa-cog").toggleClass("clicked");
        $(".support-nav").toggle("slide");
        if ($(".fa-cog").is("clicked")) {
            $(".main-nav-phone").hide(500);
        }
    });


    $(".stage").on('click', function () {
        var nr = $(this).attr('data-nr');
        loadStage(nr);
    });


    function loadStage(stageNumber) {

        //RENDERING KEYBOARD
        var source = document.getElementById("keyboard-button-template").innerHTML;
        var template = Handlebars.compile(source);

        var extraLetters = levelData["level" + currentLevel][stageNumber].extraLetters.split('');
        var answerLetters = levelData["level" + currentLevel][stageNumber].answer.split('');
        var letters = [...extraLetters, ...answerLetters].map(function (x) {
            return x.toUpperCase();
        });

        shuffle(letters);

        var html = template(letters);
        $("#keyboard-container").html(html);
        //RENDERING KEYBOARD

        $("#btn-clear").on('click', function(){
            $("#keyboard-container .btn-keyboard").css('visibility', 'visible');
            $("#answer-input").val("");
        });

        var stage = levelData["level" + currentLevel][stageNumber];
        window.currentStage = stageNumber;
        
        currentAnswer = stage.answer;
        $(".modal-img").attr('src', "img/" + stage["image"]);
        // Finally, show the stage
        modal.style.display = "block";

        var isSolved = localStorage.getItem("level" + currentLevel + "_stage" + currentStage);
                  if (isSolved) {

                      $("#answer-input").val(currentAnswer.toUpperCase());
                      $("#answer-input").css('width', '100%');
                      $("#answer-input").prop('disabled', true);
                      $("#answer-input").css('border', '2px solid green');

                      var buttons = document.querySelectorAll('.btn-keyboard');
                      for (var i = 0; i < buttons.length; i++) {
                          buttons[i].style.display = "none";
                      }
                      $("#button-check").hide();
                      $("#btn-clear").hide();
                  } else {
                      $("#answer-input").val("");
                      $("#answer-input").css('border', 'none');
                      $("#button-check").show();
                      $("#answer-input").css('width', '65%');
                  }
}    

    // ENTER CLICK

    // Get the input field
    var input = document.getElementById("answer-input");

    // Execute a function when the user releases a key on the keyboard
    window.addEventListener("keyup", function (event) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.getElementById("button-check").click();
        }
    });
  
    $("#btn-bomb").on('click', function(){

    });


    $("#keyboard-container").on('click', '.btn-keyboard', function () {
        var letter = $(this).text();
        $(this).css('visibility', 'hidden');
        $("#answer-input").val($("#answer-input").val() + letter);
    });


    $(".answer-button").on('click', function () {
        var givenAnswer = $(".answer-input").val();
        if (givenAnswer.toUpperCase() == currentAnswer.toUpperCase()) {
            localStorage.setItem("level" + currentLevel + "_stage" + currentStage, 1);
            $('.answer-input').val(currentAnswer);
            sweetAlert('Correct!', 'Your answer is correct!', 'success');
            $("#myModal").hide(1000);
            //ADD SENE
        } else if (givenAnswer.levenstein(currentAnswer) <= 2) {
            input.style.border = "2px solid #EEC93D";
        } else {
            input.style.border = "none";            
        }
        // PER ANSWER
    })
});




// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("stage-icon");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


String.prototype.levenstein = function (string) {
    var a = this,
        b = string + "",
        m = [],
        i, j, min = Math.min;

    if (!(a && b)) return (b || a).length;

    for (i = 0; i <= b.length; m[i] = [i++]);
    for (j = 0; j <= a.length; m[0][j] = j++);

    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            m[i][j] = b.charAt(i - 1) == a.charAt(j - 1) ?
                m[i - 1][j - 1] :
                m[i][j] = min(
                    m[i - 1][j - 1] + 1,
                    min(m[i][j - 1] + 1, m[i - 1][j]))
        }
    }

    return m[b.length][a.length];
}



/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}