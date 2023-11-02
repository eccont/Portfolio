let nome = document.getElementById("nome");
let form = document.getElementById("formulario");
let email = document.getElementById("e-mail");
let repeteEmail = document.getElementById("repete-e-mail");
let submit = document.getElementById("submit-form");

var erroSubmitNome = true
var erroSubmitEmail = true
var erroSubmitRepeteEmail = true

// ==================== VALIDA O NOME ========================
const messageNome = document.querySelector('#messageNome');

nome.addEventListener('keyup', async () => {

    console.log(messageNome.value)
  
    tamanhoNome = nome.value.length;
    
    const onlyLetras  = /^[a-zA-Z \W]*$/;
        if (!onlyLetras.test(nome.value)) {
            document.getElementById('messageNome').setAttribute('style', 'display:block');
            repeteSenhaError.textContent = "Senha e Repete Senha devem ser iguais.";

            erroSubmitNome = true
            console.log("APENAS LETRAS")
            
        } else if (tamanhoNome < 10) {
            document.getElementById('messageNome').setAttribute('style', 'display:block');
            document.getElementById('messageNome').innerHTML = "NOMEEE";
            erroSubmitNome = true
            } 


        if (onlyLetras.test(email.value) == true) {
        erroSubmitNome = false
        document.getElementById('messageNome').setAttribute('style', 'display:none');
        } 

    
  })

// ==================== VALIDA O EMAIL ========================
const messageEmail = document.querySelector('#messageEmail');

email.addEventListener('keyup', async () => {
  
    const emailValido  = /\S+@\S+\.\S+/;
      if (!emailValido.test(email.value)) {
        document.getElementById('messageEmail').setAttribute('style', 'display:block');
        document.getElementById('messageEmail').innerHTML = "Digite um e-mail válido";
        erroSubmitEmail = true
      }

      if (emailValido.test(email.value) == true) {
        document.getElementById('messageEmail').setAttribute('style', 'display: none');
        erroSubmitEmail = false
      }
      
// ========================== REPETE EMAIL CHECK =======================

      if (email.value != repeteEmail.value || repeteEmail.value.length == 0 || erroSubmitEmail === true) {
        document.getElementById('messageRepeteEmail').setAttribute('style', 'display:block');
        erroSubmitRepeteEmail = true
        document.getElementById('messageRepeteEmail').innerHTML = "Os e-mails não conferem";
      }

      if (email.value == repeteEmail.value) {
        erroSubmitRepeteEmail = false
        document.getElementById('messageRepeteEmail').setAttribute('style', 'display: none');
      }

  })

// ===================== CHECA O SUBMIT ========================
const messageSubmit = document.querySelector('#messageSubmit');

submit.addEventListener("click", function(event) {
  
  if (erroSubmitNome == true || erroSubmitEmail == true || erroSubmitRepeteEmail == true) {
    document.getElementById('messageSubmit').setAttribute('style', 'display: block');
    document.getElementById('messageSubmit').innerHTML = "Preencha todos os campos corretamente";
    event.preventDefault();
  }else if (erroSubmitNome == false && erroSubmitEmail == false && erroSubmitRepeteEmail == false) {
    document.getElementById('messageSubmit').setAttribute('style', 'display: none');
  }
})





var senha = document.getElementById("senha");

function validateSenha() {    
    var senhaValue = senha.value;
    var senhaError = document.getElementById("senha-error");
    senhaError.textContent = "";
    senha.classList.remove("error-border");
    if (senhaValue.trim() === "" || senhaValue.length !== 8) {
        senhaError.textContent = "Senha deve ter exatamente 8 caracteres.";
        senha.classList.add("error-border");
    }
    validateForm();
}

function validateRepeteSenha() {    
    var repeteSenha = document.getElementById("repeteSenha");
    var senhaValue = senha.value;
    var repeteSenhaValue = repeteSenha.value;
    var repeteSenhaError = document.getElementById("repeteSenha-error");
    repeteSenhaError.textContent = "";
    repeteSenha.classList.remove("error-border");
    if (senhaValue !== repeteSenhaValue) {
        repeteSenhaError.textContent = "Senha e Repete Senha devem ser iguais.";
        repeteSenha.classList.add("error-border");
    }
    validateForm();
}