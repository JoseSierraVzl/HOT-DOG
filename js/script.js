window.addEventListener('scroll', function() {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    }
});
$(document).ready(function() {
    $('#staticBackdrop').modal('toggle')

});


var close = document.getElementById("close");

close.addEventListener("click", function() {

    $('#staticBackdrop').modal('toggle')

})

var btnAleatorio = document.getElementById('btn-aleatorio');
var numText = document.getElementById('num-premiado');
var textDelNum = document.getElementById('textDelNum');

btnAleatorio.addEventListener("click", function numRandom() {
    var aleatorio = Math.round(Math.random() * 20);
    textDelNum.innerHTML = "Tu numero premiado es:";
    numText.innerHTML = aleatorio;
    btnAleatorio.disabled = true;

    return aleatorio

});

