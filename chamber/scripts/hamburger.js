const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#navMenu");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.textContent = navigation.classList.contains("open") ?
        "❌" : "☰";
});

//Close hamburger menu a nav link clicked
document.querySelectorAll(".direction a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.textContent = "☰";
    });
});