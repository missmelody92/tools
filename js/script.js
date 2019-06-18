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
//offer toggle hide
$(".offer__banner").click(function(){
    $(".offer__banner").hide();
})

//bg color
$(".nav__header li").hover(function(){
    $(this).css("background-color", "#0e1111");}, 
    function(){$(this).css("background-color", "white");
});
//font
$(".nav__header li").hover(function(){
    $(this).css("color", "white");}, 
    function(){$(this).css("color", "silver");
});
// pointer 
$("li, .book").hover(function(){
    $(this).css("cursor", "pointer");}, 
    function(){$(this).css("cursor", "pointer");
});
//book bg
$(".book").hover(function(){
    $(this).css("background-color", "silver");}, 
    function(){$(this).css("background-color", "white");
});


