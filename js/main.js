const camposDoFormulario = document.querySelectorAll(".required");
const span = document.querySelectorAll(".mensagem-erro");
const form = document.getElementById("form");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const phoneRegex = /^\d{10}$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  nameValidate();
  lastnameValidate();
  emailValidate();
  phoneValidate();
  mainPasswordValidate();
  comfirmPasswordValidate();
})

function setError(index) {
  camposDoFormulario[index].style.border = '2px solid #e63636';
  span[index].style.display = 'block';
}

function removeError(index) {
  camposDoFormulario[index].style.border = '';
  span[index].style.display = 'none';
}

function nameValidate() {
  if (camposDoFormulario[0].value.length < 3) {

    setError(0);

  } else {
    removeError(0);
  }
}

function lastnameValidate() {
  if (camposDoFormulario[1].value.length < 3) {

    setError(1);

  } else {
    removeError(1);
  }
}

function emailValidate(){

  if (!emailRegex.test(camposDoFormulario[2].value)){
    
    setError(2);
  } else {

    removeError(2);
  }
}

function phoneValidate(){

  if (phoneRegex.test(camposDoFormulario[3].value)){
    setError(3);
  } else {

    removeError(3);
  }
}

function mainPasswordValidate(){
  if (camposDoFormulario[4].value.length < 8){
    setError(4);
  } else {

    removeError(4);
    comfirmPasswordValidate();
  }
}

function comfirmPasswordValidate(){
  if (camposDoFormulario[4].value == camposDoFormulario[5].value && camposDoFormulario[5].value.length >= 8){
    removeError(5);
  }else {
    setError(5);
  }
}