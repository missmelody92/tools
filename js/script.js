//nav toggle open
$(".nav__header").click(function(){
    $(".nav__header ul").toggleClass("active");
    $(".search").toggleClass("active");
    $(".book").toggleClass("active");
    $(".search").toggleClass("active");
    $(".black").toggleClass("active");
  
})
//nav toggle close
$(".nav__header").click(function(){
    $(".icon").toggleClass("close");
})
//bg color
$(".furniture, .designers, .news, .history, .contact").hover(function(){
    $(this).css("background-color", "#0e1111");}, 
    function(){$(this).css("background-color", "white");
});
//font
$(".furniture, .designers, .news, .history, .contact").hover(function(){
    $(this).css("color", "white");}, 
    function(){$(this).css("color", "silver");
});
// pointer 
$(".furniture, .designers, .news, .history, .contact, .en, .book, .search").hover(function(){
    $(this).css("cursor", "pointer");}, 
    function(){$(this).css("cursor", "pointer");
});
//book bg
$(".book").hover(function(){
    $(this).css("background-color", "silver");}, 
    function(){$(this).css("background-color", "white");
});
// en underline 
$(".en").hover(function(){
    $(this).css("text-decoration", "underline");}, 
    function(){$(this).css("text-decoration", "none");
});
