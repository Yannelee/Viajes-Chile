var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){

 $("a").click(function (){
    var gato = this.hash

    $("html, body").animate({
        scrollTop: $(gato).offset().top     },
    800
    )
 });

 $(window).scroll(function() {
    if ($(document).scrollTop() > 1700) { 
    $(".navbar").css("background-color", "#000000");
    } else {
    $(".navbar").css("background-color", "transparent");
    }
 });
  
})