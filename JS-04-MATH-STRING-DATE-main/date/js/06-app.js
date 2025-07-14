titulo.innerHTML='05 - setInterval';
const cursoC = document.getElementById('curso');
const info = document.getElementById('info');
info.innerHTML = '<button id="parar" onClick="parar()")>PARAR</button>';


let myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  cursoC.innerHTML = date.toLocaleTimeString();
}

function parar() {
  let btnParar = document.getElementById('parar');
  if (btnParar.innerText =='PARAR'){
    clearInterval(myInterval);
    btnParar.innerHTML ='CONTINUAR'
  } else {
    myInterval = setInterval(myTimer, 1000);
    btnParar.innerText ='PARAR';

  }
  
}













