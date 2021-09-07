$(() => {

    $("html").css("overflow", "hidden");
    
    setTimeout(function(){
        $(".splash").fadeOut();
        window.scrollTo(500, 0);
        $("html").css("overflow", "initial");
    }, 1500);
    

});
