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
