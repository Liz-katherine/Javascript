titulo.innerHTML=' 02 Propiedades'
// Veamos como acceder a las propiedades de un objeto:

const curso = {6
    nombre: "FrontEnd", // La , es importante, sin ella tendriamos un error
    horas: 210,
    disponible: true, // el último elemento puede o no tener la ,
}


console.log(curso);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto

console.log(curso.nombre);
console.log(curso.horas);
console.log(curso.disponible);

// Otra forma aunque no tan común es:
console.log(curso['nombre']);


// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
curso.imagen = "image.jpg";


// Finalmente para eliminar una propiedad se utiliza delete

delete curso.nombre;

console.log(curso);

