/* java script de Header Fade
*************************************** */
var $headline = $('.headline'),
    $inner = $('.inner'),
    $nav = $('nav'),
    navHeight = 75;
if ($headline){
  $nav.addClass('overheader');
}

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop(),
      headlineHeight = $headline.outerHeight() - navHeight,
      navOffset = $nav.offset().top;

  $headline.css({
    'opacity': (1 - scrollTop / headlineHeight)
  });
  $inner.children().css({
    'transform': 'translateY('+ scrollTop * 0.4 +'px)'
  });
  if (navOffset > headlineHeight) {
    $nav.removeClass('overheader');
  } else {
    $nav.addClass('overheader');
  }
});

/***********************************************
  Javascript copié de "pure.io" pour le responsive Menu
**********************************************/
(function (window, document) {
  var menu = document.getElementById('menu'),
     WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

  function toggleHorizontal() {
     [].forEach.call(
         document.getElementById('menu').querySelectorAll('.custom-can-transform'),
         function(el){
             el.classList.toggle('pure-menu-horizontal');
         }
     );
  };

  function toggleMenu() {
     // set timeout so that the panel has a chance to roll up
     // before the menu switches states
    /* if (menu.classList.contains('open')) {
         setTimeout(toggleHorizontal, 500);
     }
     else {
         toggleHorizontal();
     }*/
     menu.classList.toggle('open');
     document.getElementById('toggle').classList.toggle('x');
  };

  function closeMenu() {
     if (menu.classList.contains('open')) {
         toggleMenu();
     }
  }

  document.getElementById('toggle').addEventListener('click', function (e) {
     toggleMenu();
     e.preventDefault();
  });
  toggleMenu();
  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);
