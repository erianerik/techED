let nav = $(".nav");

$(window).scroll(() => {
   let scrollPage = $(this).scrollTop();
   let positionShowNav = 900;

   scrollPage >= positionShowNav ? nav.fadeIn() : nav.fadeOut();
});