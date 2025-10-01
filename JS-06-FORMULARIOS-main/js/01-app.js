titulo.innerHTML ='texarea';

elTextarea = document.getElementById('texta');

elTextarea.addEventListener('resize',()=>{
    console.log('resize texarea');
});

elTextarea.addEventListener('blur',()=>{
    console.log('blur texarea');
});

elTextarea.addEventListener('input',()=>{
    console.log('input');
});