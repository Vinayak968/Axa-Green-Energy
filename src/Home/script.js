const projectData = {
    name: "Axa Green Energy",
    owner: "Axa Green Energy",
    desinger: "Vinayak Kumar",
    developer: "Vinayak Kumar",
    currPage: "Home",
    pageIcon: "assets/Svg/icon.svg",
    pageTitle: "Axa Green Energy",
    pageDescription: "Welcome to Axa Green Energy – where innovation meets sustainability. We aim to provide clean, renewable energy solutions for a brighter, greener future. Explore our vision and join us in shaping a world powered by nature.",
    pageTechnologies: ["Html5", "Css", "JavaScript"],
    pageApi: ["OwlCarousel", "Cdn", "Google Fonts","Form Spree"],
}

document.title = projectData.pageTitle;

document.getElementById("icon").setAttribute("href", projectData.pageIcon);

document.getElementById("webDescription").setAttribute("content", projectData.pageDescription);

//Creating Slider Functionality.

const slider = document.getElementById("slider");

const sliderBars = document.getElementById("sliderBars");

const closeSlider = document.getElementById("crossSlider");


sliderBars.addEventListener("click", () => {
    slider.style.transform = "translateX(0px)";
})

closeSlider.addEventListener("click", () => {
    slider.style.transform = "translateX(-2200px)";
})


//Owl Carosaul

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        center: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 600,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
});

function showReview(n) {
    const reviews = document.querySelectorAll(".review");
    reviews.forEach(review => review.classList.remove("active"));
    document.getElementById("review" + n).classList.add("active");
}

// Optional: auto-slide every 5 seconds
let currentReview = 1;
setInterval(() => {
    currentReview = currentReview % 3 + 1; // loops 1 → 2 → 3 → 1...
    showReview(currentReview);
}, 5000);


const reviewBoxes = document.querySelectorAll('.review-box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.2
});

reviewBoxes.forEach(box => observer.observe(box));

