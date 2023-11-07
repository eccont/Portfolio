let nome = document.getElementById("nome");
let form = document.getElementById("formulario");
let email = document.getElementById("e-mail");
let repeteEmail = document.getElementById("repete-e-mail");
let submit = document.getElementById("submit-form");

var erroSubmitNome = true;
var erroSubmitEmail = true;
var erroSubmitRepeteEmail = true;

// ==================== VALIDA O NOME ========================
const messageNome = document.querySelector("#messageNome");

nome.addEventListener("keyup", () => {
  
  try {
    tamanhoNome = nome.value.length;
    const onlyLetras = /^[a-zA-Z \W]*$/;
    if (!onlyLetras.test(nome.value)) {
      document
        .getElementById("messageNome")
        .setAttribute("style", "display:block");
      erroSubmitNome = true;
      throw { nome_error: "Apenas letras" };
    }

    if (tamanhoNome < 10) {
      document
        .getElementById("messageNome")
        .setAttribute("style", "display:block");
      erroSubmitNome = true;
      throw { nome_error: "Digite seu nome completo" };
    }

    if (onlyLetras.test(email.value) == true) {
      erroSubmitNome = false;
      document
        .getElementById("messageNome")
        .setAttribute("style", "display:none");
    }
  } catch (error) {
    if (error?.nome_error) {
      messageNome.textContent = error.nome_error;
    }
  }
});

// ==================== VALIDA O EMAIL ========================
const messageEmail = document.querySelector("#messageEmail");

email.addEventListener("keyup", () => {
  
  try {
    const emailValido = /\S+@\S+\.\S+/;
    if (!emailValido.test(email.value)) {
      document
        .getElementById("messageEmail")
        .setAttribute("style", "display:block");
      erroSubmitEmail = true;
      throw { email_error: "Digite um e-mail válido" };
    }
    
    if (email.value != repeteEmail.value){
      document
        .getElementById("messageRepeteEmail")
        .setAttribute("style", "display:block");
      erroSubmitRepeteEmail = true;
      throw { repeteEmail_error: "Os e-mails não conferem." };
    }

    if (emailValido.test(email.value) == true) {
      erroSubmitEmail = false;
      document
        .getElementById("messageEmail")
        .setAttribute("style", "display: none");
    }
  } catch (error) {
    if (error?.email_error) {
      messageEmail.textContent = error.email_error;
    }
  }
});

// ==================== CONFERE O EMAIL ========================

repeteEmail.addEventListener("keyup", () => {
  
  try {
    if (
      email.value != repeteEmail.value ||
      repeteEmail.value.length == 0 ||
      erroSubmitEmail == true
    ) {
      document
        .getElementById("messageRepeteEmail")
        .setAttribute("style", "display:block");
      erroSubmitRepeteEmail = true;
      throw { repeteEmail_error: "Os e-mails não conferem." };
    }

    if (email.value === repeteEmail.value) {
      erroSubmitRepeteEmail = false;
      document
        .getElementById("messageRepeteEmail")
        .setAttribute("style", "display: none");
    }
  } catch (error) {
    if (error?.repeteEmail_error) {
      messageRepeteEmail.textContent = error.repeteEmail_error;
    }
  }
});

// ===================== CHECA O SUBMIT ========================
const messageSubmit = document.querySelector("#messageSubmit");

submit.addEventListener("click", function (event) {
  if (
    erroSubmitNome == true ||
    erroSubmitEmail == true ||
    erroSubmitRepeteEmail == true
  ) {
    document
      .getElementById("messageSubmit")
      .setAttribute("style", "display: block");
    document.getElementById("messageSubmit").innerHTML =
      "Preencha todos os campos corretamente";
    event.preventDefault();
  } else if (
    erroSubmitNome == false &&
    erroSubmitEmail == false &&
    erroSubmitRepeteEmail == false
  ) {
    document
      .getElementById("messageSubmit")
      .setAttribute("style", "display: none");
  }
});

/*function checkEmail() {
  email.addEventListener("keyup", () => {
    if (email.value != repeteEmail.value) {
      document
        .getElementById("messageRepeteEmail")
        .setAttribute("style", "display:block");
      erroSubmitRepeteEmail = true;
      messageRepeteEmail.textContent = "Os e-mails não conferem.";
    } else {
        erroSubmitRepeteEmail = false;
    }
  });

  repeteEmail.addEventListener("focusin", () => {
    if (email.value != repeteEmail.value) {
      document
        .getElementById("messageRepeteEmail")
        .setAttribute("style", "display:block");
      erroSubmitRepeteEmail = true;
      messageRepeteEmail.textContent = "Os e-mails não conferem.";
    } else {
       erroSubmitRepeteEmail = false;
    }
  });
}*/

document.getElementById("repete-e-mail").addEventListener(
  "paste",
  function (E) {
    E.preventDefault();
    return false;
  },
  true
);
