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
        // console.log($(this).attr('data-nr'));
        loadStage(nr);
    });

    $("#button-check").on('click', function() { 
        $("#button-check").toggleClass('bounceIn');
    });


    function loadStage(stageNumber) {
        $("body").addClass("modal-open");
        //RENDERING KEYBOARD
        var source = document.getElementById("keyboard-button-template").innerHTML;
        var template = Handlebars.compile(source);

        var extraLetters = levelData["level" + currentLevel][stageNumber].extraLetters.split('');
        var answerLetters = levelData["level" + currentLevel][stageNumber].answer.split('');
        var letters = extraLetters.concat(answerLetters).map(function (x) {
            return x.toUpperCase();
        });
        $("#btn-space").css('width', '100%');

        shuffle(letters);

        var html = template(letters);
        $("#keyboard-container").html(html);
        //RENDERING KEYBOARD



        $("#btn-clear").on('click', function(){
            $("#keyboard-container .btn-keyboard").css('visibility', 'visible');
            $("#keyboard-container .btn-keyboard").removeClass('clicked');
            $("#answer-input").val("");

        });    
        var scaled = false;

        $(".modal-img").on('click', function() {
            if (scaled == true) {
                $(".modal-img").css('transform', 'scale(1)');
                $(".input-check").css('z-index', '0');
                scaled = false;
            } else {
                $(".modal-img").css('transform', 'scale(1.4)');
                $(".input-check").css('z-index', '-1');
                scaled = true;
            }
        });


        $("#btn-remove").on('click', function() {
            var str = $("#answer-input").val();
            var lastChar = str.substr(str.length - 1);
            for (var i = 0; i < $("button:contains('" + lastChar + "')").length; i++) {
                if ($("button:contains('" + lastChar + "')")[i].style.visibility == "hidden") {
                    $($("button:contains('" + lastChar + "')")[i]).removeClass('clicked');
                    $("button:contains('" + lastChar + "')")[i].style.visibility = "visible";
                    break;
                }
            }
           str =  str.slice(0, -1);
           $("#answer-input").val(str);
           $("#btn-remove").css('background-image', 'none');
           $("#btn-remove").css('background-color', 'none');
        });

        $("#btn-space").on('click', function() { 
            var space = " ";
            $("#answer-input").val($("#answer-input").val() + space);
        });
        $(".btn-keyboard:contains(' ')").attr('style', 'display: none');

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
                    //   $("#answer-input").prop('disabled', true);
                      $("#answer-input").css('border', '2px solid #46A413');
                      $(".fa-check-circle").css('display', 'block');
                        var buttons = document.querySelectorAll('.btn-keyboard');
                        for (var i = 0; i < buttons.length; i++) {
                            buttons[i].style.display = "none";
                        }
                      $("#button-check").hide();
                      $("#btn-remove").hide();
                      $("#btn-clear").hide();
                      $("#btn-space").hide();
                  } else {
                      $(".fa-check-circle").css('display', 'none');
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
        sweetAlert('Nice one!', '', 'success');
        $(".swal2-success-circular-line-left").css('background-color', 'transparent');
        $(".swal2-success-circular-line-right").css('background-color', 'transparent');
        $(".swal2-popup").css('background-color', 'black');
        $(".swal2-success-fix").css('background-color','transparent');
        $("#swal2-title").css('color', 'white');
        $("#myModal").hide(1000);
        $(".swal2-styled").css('background-image', 'linear-gradient(#c92525 50%, #b32222 50%)');
        $(".swal2-styled").css('border', 'none');
    });


    $("#keyboard-container").on('click', '.btn-keyboard:not(.clicked)', function () {
        var letter = $(this).text();
        $(this).addClass('clicked');
        $(this).css('visibility', 'hidden');
        $("#answer-input").val($("#answer-input").val() + letter);
    });


    $(".answer-button").on('click', function () {
        var givenAnswer = $(".answer-input").val();
        if (givenAnswer.toUpperCase() == currentAnswer.toUpperCase()) {
             $("body").removeClass('modal-open');
            localStorage.setItem("level" + currentLevel + "_stage" + currentStage, 1);
            $('.answer-input').val(currentAnswer);
            $(".stage[data-nr=" + currentStage + "]").find(".order-item").append('<img src="img/overlay.png" style="position:absolute;border-radius:10px; top:0; left:0">');
            sweetAlert('Nice one!', '', 'success');
            console.log(this);
            $(".swal2-success-circular-line-left").css('background-color', 'transparent');
            $(".swal2-success-circular-line-right").css('background-color', 'transparent');
            $(".swal2-popup").css('background-color', 'black');
            $(".swal2-success-fix").css('background-color','transparent');
            $("#swal2-title").css('color', 'white');
            $("#myModal").hide(1000);
            $(".swal2-styled").css('background-color', 'transparent !important');
            $(".swal2-styled").css('background-image', 'linear-gradient(#c92525 50%, #b32222 50%)');
            //ADD SENE
        // } else if (givenAnswer.levenstein(currentAnswer) <= 2) {
        //     input.style.border = "2px solid #EEC93D";
        } else {
            function highlight(obj){
                var orig = obj.style.backgroundColor;
                obj.style.backgroundColor = '#3c3c3c';
                setTimeout(function(){
                     obj.style.backgroundColor = orig;
                }, 1000);
             }   
             highlight(input);       
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
        $("body").removeClass('modal-open');
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

// Disclosure for FAQs


document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active-acc');
            setClass(acc, 'active-acc', 'remove');
            setClass(panel, 'show', 'remove');
            $("div.panel").css('background-color', 'transparent');
            $("div.panel").css('color', 'white');


    
            if (setClasses) {
                this.classList.toggle("active-acc");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
    
    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
    
    });
    setTimeout(function(){
        var focusedElement = jQuery(':focus'); // ideally specify tag, class or ID here before the ':focus' to avoid jQuery scanning all elements on the page.
    
        $('#answer-input').appendTo($('form'));
        $('#answer-input').appendTo($('form'));
    
        if (focusedElement && focusedElement.length) { //fixed var name here
            focusedElement.focus();
        }
    }, 3000);

    $('#answer-input').prop('readonly', true);

    
