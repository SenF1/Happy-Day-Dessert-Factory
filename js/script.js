// Dynamically updates the clip-path property of the iframe element containing 
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


// The toggleDropdown function shows and hides a dropdown menu when the user 
// clicks on a dropdown icon or link, and the window.onclick event listener 
// closes any open dropdown menus when the user clicks outside of them.
function toggleDropdown(event) {
    if (!event.target.closest('.dropdown-content')) {
        event.preventDefault();
    }
    event.stopPropagation();
    var dropdownContent;
    if (event.target.tagName === 'A') {
        dropdownContent = event.target.nextElementSibling;
    } else if (event.target.tagName === 'I') {
        dropdownContent = event.target.parentElement.nextElementSibling;
    }
    if (dropdownContent) {
        dropdownContent.classList.toggle("show");
    }
}
