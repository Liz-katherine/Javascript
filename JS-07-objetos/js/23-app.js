titulo.innerHTML = '23 - Object.entries';
// Object.keys y object.values y entries, estos son más conocidos como iteradores de objetos, 

const curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: true,
    mostrarInfo : function() {
        return `El curso: ${this.nombre}  tiene una duración de  ${this.horas} horas`;
    }
   
}


console.log(Object.keys(curso));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(curso)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(curso)); // Entries nos va a retornar una matriz de llaves y valores


// Y con eso tenemos un buen conocimiento de Objectos en JavaScript, los estaremos retomando más adelante pero primero hay que conocer otros conceptos como Arreglos y Funciones para poderle sacar más provecho.