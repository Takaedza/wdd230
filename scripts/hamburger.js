const hamButton = document.querySelector("#menu");
const direction = document.querySelector(".direction");

if (hambutton && direction) {
    hamButton.addEventListener("click", () => {
        direction.classList.toggle("start");
        hamButton.classList.toggle("start");
    });
}