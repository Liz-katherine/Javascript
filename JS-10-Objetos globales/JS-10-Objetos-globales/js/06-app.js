titulo.innerHTML=' 05 - resize div'
let leccionT='';
// 

let leccion = document.getElementById('leccion');

window.addEventListener('resize',()=>{
    console.log('estas cambiando tamaño');
    console.log('----  <div id="leccion"> ---------');
    console.log(`Heigth : ${leccion.height}`);
    console.log(leccion.clientHeight);
    document.getElementById('leccion').innerHTML  = `<p>Capa Leccion</p><p>Heigth : ${leccion.clientHeight} </p><p>Width : ${leccion.clientWidth} </p>`
    if (leccion.clientWidth>='500'){leccion.style.maxWidth='400px';}

})





                   

