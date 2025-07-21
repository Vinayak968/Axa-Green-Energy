const sliderIcon = document.getElementById("rBars");
const crossIcon = document.getElementById("cs-icon");

sliderIcon.addEventListener("click", () => {
    document.getElementById("slider").style.transform = "translateX(0px)";
});

crossIcon.addEventListener("click", () => {
    document.getElementById("slider").style.transform = "translateX(-1750px)";
}) 