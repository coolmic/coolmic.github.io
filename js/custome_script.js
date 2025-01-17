  $(document).ready(function () {
      var navbar = $(".navbar");
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          navbar.addClass("sticky_navigation");
        } else {
          navbar.removeClass("sticky_navigation");
        }
      });
    });

$(document).ready(function(){
  $('#testimonial-slisder').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 4000, // Set a lower value for continuous scrolling
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;

  $(document).ready(function() {
    // Close offcanvas and scroll to target section on link click
    $('.navbar-nav a.nav-link').on('click', function() {
      $('#main_navbar').offcanvas('hide'); // Close offcanvas
      var targetSection = $(this).attr('href'); // Get the target section ID from the link
      $('html, body').animate({
        scrollTop: $(targetSection).offset().top - $('.navbar').outerHeight() // Scroll to target section
      }, 100);
    });
  });


function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});