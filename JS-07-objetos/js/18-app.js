titulo.innerHTML = '06 - Seal';
"use strict";
// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

const curso = {
    nombre: "Monitor 20 pulgadas",
    horas: 30,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}

Object.seal(curso);

// Se pueden reasignar
curso.nombre = 'BACK';

// Pero no eliminar
// delete curso.horas;


// Tampoco se pueden añadir nuevas
// curso.imagen = "imagen.jpg";

// Verificar si un objeto esta sellado
console.log(Object.isSealed(curso))

console.log(curso);