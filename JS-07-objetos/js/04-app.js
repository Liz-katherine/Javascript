titulo.innerHTML='04 objetos anidados';
// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const curso = {
    nombre: "FrontEnd",
    horas: 210,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}



console.log(curso.nombre); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

console.log(curso.informacion);
console.log(curso.informacion.tipo);
console.log(curso.informacion.horario);
