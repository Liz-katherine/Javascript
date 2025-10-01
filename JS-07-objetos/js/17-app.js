titulo.innerHTML = '17 - Freeze';
"use strict";

//  los objetos si se pueden modificar sus valores, veamos como prevenirlo en caso de que sea algo que desees hacer.

const curso = {
    nombre: "Front",
    horas: 210,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}

console.log(curso);

// Para ello utilizaremos un Object Method o Métodos de objetos.

// Seguido me dicen, porque les dices Métodos, eso suena como algo de programación orientada a objetos
// En realidad ese es su nombre, object methods, y en los siguientes videos los estaremos viendo algunos que son muy útiles.

// Pero veamos como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente forma:

Object.freeze( curso ); // Freeze toma como argumento el objeto

// curso.disponible = false;



// Freeze tampoco permite agregar nuevas propiedaes
// curso.imagen = "imagen.jpg";

// Tampoco se pueden eliminar propiedades

// delete curso.nombre;

// Finalmente si quieres revisar si un objeto esta congelado puedes usar

console.log( Object.isFrozen(curso) );

console.log(curso);
