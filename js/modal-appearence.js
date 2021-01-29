const singUpButton = document.getElementById("singUp-link")
const modal = document.querySelector("#modal")

singUpButton.addEventListener("click", () => {
    modal.classList.toggle("hide")
})