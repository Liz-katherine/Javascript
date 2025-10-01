titulo.innerHTML=' 04 - screen'
let leccionT='';
// 
console.log('----  screen ---------');
console.log(screen);


for (let clave in screen){
   leccionT += `<p> ${clave} : ${screen[clave]} </p>`;

} 
document.getElementById('leccion').innerHTML = leccionT;


                   

