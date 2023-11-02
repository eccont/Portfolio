let nome = document.getElementById("nome");
let form = document.getElementById("formulario");
let email = document.getElementById("e-mail");
let repeteEmail = document.getElementById("repete-e-mail");


// ==================== VALIDA O NOME ========================
const messageNome = document.querySelector('#messageNome');

nome.addEventListener('focusout', async () => {
  console.log(nome.value)
  try {
    tamanhoNome = nome.value.length;
    const onlyLetras  = /^[a-zA-Z \W]*$/;
      if (!onlyLetras.test(nome.value)) {
         document.getElementById('messageNome').setAttribute('style', 'display:block');
          throw {nome_error: 'Apenas letras'};
      }
      
      if (tamanhoNome < 10) {
        document.getElementById('messageNome').setAttribute('style', 'display:block');
        throw {nome_error: 'Digite seu nome completo'};        
      } 

      if (onlyLetras.test(email.value) == true) {
        document.getElementById('messageNome').setAttribute('style', 'display:none');
      }

  } catch (error) {
    if(error?.nome_error){
      messageNome.textContent = error.nome_error;
    }
    }
  })

// ==================== VALIDA O EMAIL ========================
const messageEmail = document.querySelector('#messageEmail');

email.addEventListener('key', async () => {
  console.log(email.value)
  try {
    const emailValido  = /\S+@\S+\.\S+/;
      if (!emailValido.test(email.value)) {
          document.getElementById('messageEmail').setAttribute('style', 'display:block');
          throw {email_error: 'Digite um e-mail válido'};
      }

      if (emailValido.test(email.value) == true) {
        document.getElementById('messageEmail').setAttribute('style', 'display: none');
      }
      
  } catch (error) {
      if(error?.email_error){
        messageEmail.textContent = error.email_error;
      } 
    }
  })

  // ==================== CONFERE O EMAIL ========================

  repeteEmail.addEventListener('focusout', async () => {
  
    try {
      if (email.value != repeteEmail.value || repeteEmail.value.length == 0) {
        document.getElementById('messageRepeteEmail').setAttribute('style', 'display:block');
        throw {repeteEmail_error: 'Os e-mails não conferem.'};
      }

      if (email.value == repeteEmail.value) {
        document.getElementById('messageRepeteEmail').setAttribute('style', 'display: none');
      }
    } catch (error) {
        if(error?.repeteEmail_error){
          messageRepeteEmail.textContent = error.repeteEmail_error;
        } 
      }
  })