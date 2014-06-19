(function($) {
  $(document).ready(function() {
    $.slidebars({
      siteClose: true,
      disableOver: false,
      hideControlClasses: true
    });


    $('a[href*=#]:not([href=#])').click(function(e) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          e.preventDefault()
          headerHeight = $('body header').outerHeight() + 10
          $('#sb-site').scrollTo(target, 550, {offset: (-1 * headerHeight)});
        }
      }
    });

  });
}) (jQuery);
