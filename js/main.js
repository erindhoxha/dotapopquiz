// ABADDON
var abaddonNearAnswers = ["aba", "abad", "abadd"];
var abaddonAnswers = ["abaddo", "abaddon", "Abaddon", "Abaddo"];

$(".abaddon-button").on('click', function(){
    for (i = 0; i < 10; i++) {
    if ($(".abaddon-input").val() == abaddonNearAnswers[i]) {
       $(".abaddon-input").css("border", "2px solid #f6b12b");
    } else if ($(".abaddon-input").val() == abaddonAnswers[i]) {
        alertify.alert("Correct!", "Nice one champion!");
    }
}   
})
$(".reveal").on('click', function(){
    $(".abaddon-input").val("Abaddon");
    $(".abaddon-input").css("color","red");
    alertify.alert("Correct!", "Nice one champion!");
})
$(".bomb").on('click', function(){
    $(".abaddon-input").val("Abad");
})
// ABADDON

// MODAL
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

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
// INCREMENT QTY
function incrementValue()
{
    var value = parseInt(document.getElementById('qty').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty').value = value;
}

$(".minus-button").on('click', function() {
    if ($("#qty").val() < 0) {
        $("#qty").val("0");
    }    
})
function decrementValue()
{
    var value = parseInt(document.getElementById('qty').value, 0);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('qty').value = value;
}
// LOGO ON CLICK GO TO INDEX.HTML
$(".logo-img").on('click', function(){
    window.location = 'index.html';
});
// NAV BAR
$(document).ready(function(){
    $(".fa-bars").click(function(){
        $(".main-nav-phone").toggle("slide");
        $(".support-nav").hide(500);
        $(".container").show(500);
    });
});

$(document).ready(function(){
    $(".fa-cog").click(function(){
        $(".support-nav").toggle("slide");
        $(".main-nav-phone").hide(500);
    });
});

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
// MODAL
$(".btn-refresh").on('click', function(){
    $(".order-one").hide(300);
    $(".order-two").hide(300);
    $(".pull-right").text("$0");
    $(".btn-proceed").prop("disabled",true);
    $(".btn-proceed").css("color","#ebebeb");
    $(".btn-proceed").addClass("go-back-to-main-page");
    $(".btn-proceed").text("Proceed");
    $(".btn-proceed").css("background-color","#d52537");
    $(".btn-proceed").css("background-color","grey");

    if ($(".btn-proceed").hasClass("go-back-to-main-page")) {
        $(".btn-proceed").on('click', function(){
            window.location = 'donburi.html';
        })
    };
})



// EAT-IN INPUT KEYUP TO TYPE ON SPAN & MAX INPUT 2

    $('#input-number').on('keyup blur', function() {
        $("#text-span").html($("#input-number").val());  
       var inputQuantity = [];
        $(function() {
        $("#input-number").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); // save this field's index to access later
        });
  $("#input-number").on("keyup", function (e) {
    var $field = $(this),
        val=this.value,
        $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
//        window.console && console.log($field.is(":invalid"));
      //  $field.is(":invalid") is for Safari, it must be the last to not error in IE8
    if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
        this.value = inputQuantity[$thisIndex];
        return;
    } 
    if (val.length > Number($field.attr("maxlength"))) {
      val=val.slice(1, 1);
      $field.val(val);
    }
    inputQuantity[$thisIndex]=val;
  });      
});

    });


// PAYMENT BUTTON ALERT
$(".btn-pay").on('click', function() {
    alertify.alert('Payment Succesful', 'Thank you for ordering! Your order number is <h1 style="text-align:center; font-size:50px; color:#d52537;">65</h1>Please sit down and we will serve it to you.');
    $(".ajs-close").css("float","right");
    $(".ajs-header").css("background-color","black");
    $(".ajs-header").css("color","white");
    $(".ajs-ok").css("width","100%");
    $(".ajs-ok").css("color","white");
    $(".ajs-ok").css("background-color","black");
})
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg6');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg7');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// MODAL
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg8');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

