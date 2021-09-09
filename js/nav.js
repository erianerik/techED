const submenuContainer = ".nav .drop-down";
const subMenuClass = ".drop-down__sub-menu";

let nav = $(".nav");
let auxSubMenu = 0;
let deviceWidthNav = $(document).width();

$(window).scroll(() => {
   let scrollPage = $(this).scrollTop();
   let positionShowNav = 900;

   scrollPage >= positionShowNav ? nav.fadeIn() : nav.fadeOut();
});

function openSubmenu(element) {
   return $(subMenuClass, element).stop().slideDown();
}

function closeSubmenu(element) {
   return  $(subMenuClass, element).stop().slideUp();
}

if(deviceWidthNav > 900) {
   $(submenuContainer).hover(function () {
      openSubmenu(this);
   },
   function () {
      closeSubmenu(this);
   });
}else {
   $(submenuContainer).click(function () {
      auxSubMenu += 1;
      auxSubMenu == 1 ? openSubmenu(this) : closeSubmenu(this);
      auxSubMenu >= 3 ? auxSubMenu = 0 : false;
   });
}
