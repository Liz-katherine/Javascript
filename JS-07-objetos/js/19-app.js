titulo.innerHTML = '19 - Object.assign Unir Objetos';
// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const curso = {
    nombre: "FRONT",
    horas: 30,
    disponible: true,
    horario : 55
   
}


const  informacion = {
    tipo: 'presencial',
    horario : '15:00 a 19:00'
}

// Una forma de hacerlo es con el object method llamado assign

const resultado = Object.assign(curso, informacion);

// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator

console.log(resultado);
