titulo.innerHTML='02 Timestamp';
const cursoC = document.getElementById('curso')

let star = Date.now();
const periodo = 30*24*60*60*1000; // 30 dias  * 24 H/dia * 60 m/H * 60 s/m * 1000 ms/S
let end = star + periodo;
const endD = new Date(end);

console.log(`start : ${star}  -  ${Date(star)}`);
console.log(`periodo 30 dias : ${periodo} milisegundos`);
console.log(`end : ${end}  -  ${endD}`);

// Las fechas se maneja con el objeto date.

cursoC.innerHTML = '<h3>Ejemplos de Timestamp</h3>';
cursoC.innerHTML +=' let star = Date.now();';
cursoC.innerHTML += `<p><strong>star = </strong>${star}  segundos desde 01/01/1970</p>`;
cursoC.innerHTML += `<p><strong>end  = </strong>${end}  timestamp de start + 30 dias</p>`;
cursoC.innerHTML += `<p><strong>date(end)  = </strong>${endD} start + 30 dias</p>`;



//document.getElementById('curso').innerHTML += `<p><strong>valor.getDay() = </strong> ${valor.getDay()}</p>`;




