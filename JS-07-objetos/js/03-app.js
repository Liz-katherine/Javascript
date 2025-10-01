titulo.innerHTML='03 destructuring';
// Veamos como asignar variables hacia un objeto


const curso = {
    nombre: "FrontEnd", // La , es importante, sin ella tendriamos un error
    horas: 210,
    disponible: true, // el último elemento puede o no tener la ,
}
console.log(curso);

// const nombre = curso.nombre;




// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas

const { nombre } = curso;


// si deseas extraer más variables;
const { horas } = curso;



console.log(nombre)
console.log(horas)

// O puedes hacerlo mejor con 

//const {nombre, horas} = curso;

// const nombre = curso.nombre;
// const horas = curso['horas'];