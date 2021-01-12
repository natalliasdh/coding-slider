let slideNumber = 1;
showSlides(slideNumber);

function plusSlides(n) {
    showSlides(slideNumber += n);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("person");

    if (n > slides.length) { slideNumber = 1 }
    if (n < 1) { slideNumber = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideNumber - 1].style.display = "block";

}