// Giveaway Home SLider
$(document).ready(function () {
  $(".giveaway-blog-row").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Play and Pause flickity Slider
// For Desktop
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 5,
    autoScroll: {
      speed: 0.7,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    interval: 5000,
    keyboard: false,
    rewind: true,
    // Responsive breakpoints
    breakpoints: {
      1500: {
        perPage: 4,
      },
      991: {
        perPage: 3,
      },
      580: {
        perPage: 2,
      },
      400: {
        perPage: 2,
      },
    },
  }).mount(window.splide.Extensions);

  var button = document.querySelector("#splide .splide__play-pause");

  if (button) {
    var pausedClass = "is-paused";

    // Remove the paused class and change the label to "Pause".
    splide.on("autoplay:play", function () {
      button.classList.remove(pausedClass);
      button.textContent = "Pause";
      button.setAttribute("aria-label", "Pause Autoplay");
    });

    // Add the paused class and change the label to "Play".
    splide.on("autoplay:pause", function () {
      button.classList.add(pausedClass);
      button.textContent = "Play";
      button.setAttribute("aria-label", "Start Autoplay");
    });

    // Toggle play/pause when the button is clicked.
    splide.on(
      "click",
      function () {
        var flag = 99;
        var Autoplay = splide.Components.Autoplay;

        if (button.classList.contains(pausedClass)) {
          Autoplay.play(flag);
        } else {
          Autoplay.pause(flag);
        }
      },
      button
    );
  }
  function updateSlideCount() {
    var activeSlideIndex = document
      .querySelector("#splide .splide__pagination__page.is-active")
      .getAttribute("aria-label")
      .replace(/\D/g, "");
    var totalSlides = document.querySelectorAll(
      "#splide .splide__pagination__page"
    ).length;
    document.querySelector(
      ".news__counter"
    ).innerText = `${activeSlideIndex}/${totalSlides}`;
  }
  setInterval(updateSlideCount, 300);

  $("body").on("click", function () {
    // Remove class "pause-active" from pauseBtn
    console.log("helllo");
    var button = document.querySelector("#splide #splide-track");
    var attr = button.getAttribute("aria-live");
    var pauseBtn = document.querySelector(
      "#splide .splide__optional-button-container"
    );
    if (attr == "polite") {
      pauseBtn.classList.add("pause-active");
    } else {
      pauseBtn.classList.remove("pause-active");
    }
  });
});
// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["close"],
  loop: false,
  clickContent: false,
  btnTpl: {
    smallBtn:
      '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
    close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">' +
      '<path d="M13.4115 15.2153L8 9.8038L2.58847 15.2153L0.784624 13.4115L6.19616 7.99995L0.784625 2.58842L2.58847 0.784578L8 6.19611L13.4115 0.784578L15.2154 2.58842L9.80384 7.99995L15.2154 13.4115L13.4115 15.2153Z" fill="black"/>' +
      "</svg>" +
      "</button>",
    arrowLeft:
      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">' +
      '<path d="M6.25247 11.8182L7.63635 10.4509L3.1412 5.99999L7.63635 1.54908L6.25247 0.181811L0.363625 5.99999L6.25247 11.8182Z" fill="black"/>' +
      "</svg>" +
      "</button>",

    arrowRight:
      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">' +
      '<path d="M1.74753 0.181824L0.363647 1.5491L4.8588 6.00001L0.363647 10.4509L1.74753 11.8182L7.63637 6.00001L1.74753 0.181824Z" fill="black"/>' +
      "</svg>" +
      "</button>",
  },
});

// Product page scroll slider
// Get the product slider container
const productSliderContainer = document.querySelector(".product__media-list");

// Get the track element
const trackElement = document.querySelector(".mds-mini-slider__track");

// Get the knob element
const knobElement = document.querySelector(".mds-mini-slider__knob");

// Function to update knob position
function updateKnobPosition() {
  // Calculate the translation in pixels based on the width of the product slider container
  const containerWidth = productSliderContainer.offsetWidth;
  const knobWidth = knobElement.offsetWidth;
  const maxTranslation = containerWidth - knobWidth;
  const trackWidth = trackElement.offsetWidth;
  const translation =
    (productSliderContainer.scrollLeft /
      (productSliderContainer.scrollWidth -
        productSliderContainer.clientWidth)) *
    maxTranslation;

  // Constrain translation to stay within the bounds of the track
  const constrainedTranslation = Math.min(
    Math.max(0, translation),
    trackWidth - knobWidth
  );

  // Update the knob position
  knobElement.style.transform = `translateX(${constrainedTranslation}px)`;
}

// Call the function to update knob position initially
updateKnobPosition();

// Add event listener for scroll event
productSliderContainer.addEventListener("scroll", function () {
  updateKnobPosition();
});
