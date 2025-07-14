titulo.innerHTML='05 - setInterval';
const cursoC = document.getElementById('curso');
const info = document.getElementById('info');
info.innerHTML = '<button id="parar" onClick="parar()")> PARAR </button>';


const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  cursoC.innerHTML = date.toLocaleTimeString();
}

function parar() {
 
  clearInterval(myInterval);
}













