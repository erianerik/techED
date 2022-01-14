function startSplash() {
    let timeSplash = Math.floor(Math.random() * (1500 - 1150) + 1150);
    let flagUserAcess = localStorage.getItem("countAcess");
    $("html").css("overflow", "hidden");

    setTimeout(function(){
        if(flagUserAcess == null || flagUserAcess == 1 ) {
            loadSplash();
            localStorage.setItem("countAcess", 1)
            window.scrollTo(500, 0);
        } else {
            loadSplash();
        }
    }, timeSplash);
}

function loadSplash() {
    $(".splash").fadeOut();
    $("html").css("overflow", "initial");
}

$(() => {
    startSplash(); 
});