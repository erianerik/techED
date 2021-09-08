$("nav a").click(element => {

    element.preventDefault();

    let navHeight = $(".nav").innerHeight(); 
    let idLink = $(element.target).parent().attr("href");
    let targetOffset = $(idLink).offset().top;

    $("html, body").animate({
        scrollTop: targetOffset - navHeight
    });

});