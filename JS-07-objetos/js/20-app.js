titulo.innerHTML = '20 - Spread ...';
const curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: true,
   
}


const  informacion = {
    tipo: 'presencial',
    horario : '15:00 a 19:00'
}


// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator

const resultado = { ...curso, ...informacion};

console.log(resultado);