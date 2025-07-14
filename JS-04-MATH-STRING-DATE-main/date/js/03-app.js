titulo.innerHTML='03 - setTimeout';
const cursoC = document.getElementById('curso')

const myTimeout = setTimeout(saludos, 5000);
cursoC.innerHTML = '<p>Espera 5 segundos </p>';
function saludos() {
  cursoC.innerHTML += "Kaixo !!"
}









