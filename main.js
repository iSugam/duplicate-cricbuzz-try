// All HTML class and ids selector
let winner = document.querySelectorAll("span.winner");
let videoClick = document.querySelectorAll(".videos")
let searchBar= $(".search")

// Manipulating Text color of span winner
winner[2].style.color ="#c9820c";
winner[5].style.color ="#c7343c";

// Open a link on video click
videoClick[0].addEventListener("click", function(){
    window.open('https://www.youtube.com/watch?v=3MVxdyJSHLs', '_blank')
});
videoClick[1].addEventListener("click", function(){
    window.open('https://www.youtube.com/watch?v=JlgFgpDab0Q', '_blank')
});
videoClick[2].addEventListener("click", function(){
    window.open('https://www.youtube.com/watch?v=QD2hxpQd_b0', '_blank')
});



// JS for Desktop
let matchParagraph = document.querySelectorAll(".featured-matches p")
matchParagraph[2].style.color="#1866db";
matchParagraph[1].style.color="#1866db";
matchParagraph[3].style.color="##d0021b";

// JQuery For Desktop

$(".All").click( ()=>{
    $(".all-Slider").slideToggle(300);
});


$(".search").click( ()=>{
    $(".search-bar").fadeToggle(200);
});

