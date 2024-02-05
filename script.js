const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
let noClicks = 0;

noButton.addEventListener("click", () => {
    noClicks++;
    yesButton.style.transform = `scale(${1 + noClicks * 0.1})`;
    noButton.style.transform = `scale(${1 - noClicks * 0.1})`;
});

yesButton.addEventListener("click", () => {
    window.open("celebration.html", "_blank", "width=600,height=400");
});
