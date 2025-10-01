titulo.innerHTML='05 destructuring II';
// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const curso = {
    nombre: "FrontEnd",
    horas: 210,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}


const { nombre, informacion, informacion: { tipo, horario } } = curso;


console.log(nombre)
console.log(informacion) // curso.informacion
console.log(tipo) //curso.informacion.tipo
console.log(horario)