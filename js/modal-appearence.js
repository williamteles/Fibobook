const singUpButton = document.getElementById("singUp-link");
const modal = document.querySelector("#modal");
const formSection = document.querySelector(".form-section");

singUpButton.addEventListener("click", () => {
    formSection.style.display = "none";
    modal.classList.toggle("hide");
})