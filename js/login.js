const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

var emailJacquin = "erickjacquin_tompero@gmail.com";
var passwordJacquin = "vergonhadaproficion";

var messageError = document.getElementById("error");
messageError.style.display = "none";


btnLogin.addEventListener("click", event => {


  const fields = [...document.querySelectorAll(".input-block input")];
  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("login-password");
    

    if (userEmail.value != emailJacquin || userPassword.value != passwordJacquin ) {
      form.classList.add("validate-error");
      event.preventDefault();
      messageError.style.display = 'block';
    }else{
      form.action = "index.html";
    }
    
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }


  
});


form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
