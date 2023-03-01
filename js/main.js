const camposDoFormulario = document.querySelectorAll(".required");
const span = document.querySelectorAll(".mensagem-erro");
const form = document.getElementById("form");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const phoneRegex = /^\d{10}$/;


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

function emailValidate(){

  if (emailRegex.test(camposDoFormulario[2].value)){
    console.log('vlaido');
  }else{
    console.log('nao');
  }
}