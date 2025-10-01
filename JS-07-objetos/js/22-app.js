titulo.innerHTML = '22 - This';
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


// Aún no hemos visto las funciones, pero lo haremos en los próximos capitulos...



const curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: false,
    mostrarInfo : function() {
        return `El curso: ${this.nombre}  tiene una duración de  ${this.horas} horas`;
    },
    estaDisponible : function() {
        if (this.disponible === true){
            return 'El curso esta disponible, y son ' + this.horas;  
        } else {
            return 'Lo siento no esta disponible' ;
        }
    }
   
}

console.log(curso.mostrarInfo() );
console.log(curso.estaDisponible() );