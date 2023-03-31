// dynamically updates the clip-path property of the iframe element containing 
// the video player when entering and exiting full-screen mode. This allows hiding 
// the banner at the bottom of the video while still being able to view the entire 
// video in full-screen mode.
var iframe = document.querySelector('iframe');

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        // The video player has entered full-screen mode
        iframe.style.clipPath = 'none';
    } else {
        // The video player has exited full-screen mode
        iframe.style.clipPath = 'inset(50px 0 250px 0)';
    }
});


// Setting up the slider for Customer Testimonials
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 500,
      itemMargin: 20
    });
});
