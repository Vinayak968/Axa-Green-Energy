const projectData = {
    name: "Axa Green Energy",
    owner: "Axa Green Energy",
    desinger: "Vinayak Kumar",
    developer: "Vinayak Kumar",
    currPage: "About Us",
    pageIcon: "assets/Svg/icon.svg",
    pageTitle: "About Us",
    pageDescription: "Axa Green Energy is committed to advancing renewable energy in everyday life. Our mission is built on innovation, environmental responsibility, and delivering high-quality solutions. From solar installations to energy-efficient products, we work to create a cleaner tomorrow.",
    pageTechnologies: ["Html5", "Css", "JavaScript"],
    pageApi: ["OwlCarousel", "Cdn", "Google Fonts","Form Spree"],
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
