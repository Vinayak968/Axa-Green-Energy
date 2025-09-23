const projectData = {
    name: "Axa Green Energy",
    owner: "Axa Green Energy",
    desinger: "Vinayak Kumar",
    developer: "Vinayak Kumar",
    currPage: "About Us",
    pageIcon: "assets/Svg/icon.svg",
    pageTitle: "Contact Us",
    pageDescription: "At Axa Green Energy, we offer a range of eco-friendly products designed to save energy and protect the planet. Our selection includes solar panels, energy-efficient lighting, battery storage systems, and electric vehicle (EV) charging stations. Each product is tested for quality, reliability, and long-term performance — so you can go green with confidence.",
    pageTechnologies: ["Html5", "Css", "JavaScript"],
    pageApi: ["OwlCarousel", "Cdn", "Google Fonts"],
}


document.title = projectData.pageTitle;

document.getElementById("webDescription").setAttribute("content", projectData.pageDescription);

document.getElementById("icon").setAttribute("href", projectData.pageIcon);

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
