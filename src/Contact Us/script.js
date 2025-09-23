const projectData = {
    name: "Axa Green Energy",
    owner: "Axa Green Energy",
    desinger: "Vinayak Kumar",
    developer: "Vinayak Kumar",
    currPage: "About Us",
    pageIcon: "assets/Svg/icon.svg",
    pageTitle: "Contact Us",
    pageDescription: "We’d love to hear from you. Whether you have questions, project ideas, or want to collaborate, our team is here to help. Get in touch and let’s make your energy needs greener and smarter.",
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
