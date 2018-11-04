
// NAV BAR
$(document).ready(function(){
    
    $(".fa-bars").click(function(){
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


    $(".stage").on('click', function(){
        var nr = $(this).attr('data-nr');
        loadStage(nr);
    });

    var input;
   $(".btn-keyboard").on('click', function () {
        console.log(this);
        $(this).hide(500);
        input += $(this).innerHTML;
   })



function loadStage(stageNumber) {
    var stage = levelData["level" + currentLevel][stageNumber];
    window.currentStage = stageNumber;  
    currentAnswer = stage.answer;
    $(".modal-img").attr('src', "img/" + stage["image"]);
    // Finally, show the stage
    modal.style.display = "block";

    var isSolved = localStorage.getItem("level" + currentLevel + "_stage" + currentStage);

    if (isSolved) {
        // alert("hi");
    } else {
        // alert("not hi");
    }
}



    $(".answer-button").on('click', function(){
        var givenAnswer = $(".answer-input").val();
        if (givenAnswer == currentAnswer) {
            localStorage.setItem("level" + currentLevel + "_stage" + currentStage, true);

            $('.answer-input').val(currentAnswer);
            sweetAlert('Correct!', 'Your answer is correct!', 'success');
            $("#myModal").hide(1000);
            stageCorrectAnswer();
            //ADD SENE
        } else if (givenAnswer.levenstein(currentAnswer) <= 2) {
            alert(" CLOSE!");
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
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
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

// MODAL INDEX.HTML SHOW/HIDE
$(window).on('load',function(){
    $('#myModal-language').show();
});
$(".close").on('click', function(){
    $('#myModal-language').hide();
})
$(".select-button").on('click', function(){
    $('#myModal-language').hide();
})
// ORDER.HTML HIDE THE ORDER
$(".btn-remove-one").on('click', function(){
    $(".pull-right").text("$4.50");
    $(".order-one").hide(300);
})
$(".btn-remove-two").on('click', function(){
    $(".order-two").hide(300);
    $(".pull-right").text("$0");
})
