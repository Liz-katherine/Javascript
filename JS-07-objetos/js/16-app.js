titulo.innerHTML = '16 - Objetos const';
// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.


// const producto = "Monitor";
// producto = 'Tablet';
// console.log(producto);


// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const curso = {
    nombre: "FrontEnd",
    horas: 30,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}


console.log(curso);

curso.disponible = false;

console.log(curso); // Puedes ver que lo pudimos modificar, a pesar de ser const