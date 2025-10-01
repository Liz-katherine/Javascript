titulo.innerHTML=' 03 - navigator'
let leccionT='';
// 
console.log('----  navigator ---------');
console.log(navigator);


for (let clave in navigator){
   leccionT += `<p> ${clave} : ${navigator[clave]} </p>`;

} 
document.getElementById('leccion').innerHTML = leccionT;
// Sitemas operativos 
const sistemas = ['windows','linux','mac','android','iphone'];
const so = navigator.userAgent;
console.log(`💻 userAgent :  ${so}`);


// mostrar una página distinta dependiento del sistema operativo del ordenador


// mostrar una pagina distinta dependiendo del idioma del navegador

                   

