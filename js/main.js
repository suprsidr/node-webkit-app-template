'use strict';
$('.left-off-canvas-menu a').off('.offcanvas').on('click', function(e){
  e.preventDefault();
  var hash = $(this).attr('href'), txt = $(this).text();
  if(hash.indexOf('#') == 0){
    $('html,body').animate({ scrollTop: $(hash).offset().top },
      {
        duration: 'slow',
        easing: 'swing',
        complete: function () {
          location.hash = hash;
          document.title = 'Welcome | ' + txt;
          $('.off-canvas-wrap').removeClass('move-right');
        }
      }
    );
  } else if(this.target && this.target =="_blank") {
    window.open(hash);
    $('.off-canvas-wrap').removeClass('move-right');
  } else {
    location.href = hash;
  }
});
