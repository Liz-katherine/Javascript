titulo.innerHTML = '25 - Control alumnos II';
// En el objeto vamos añadir un num maximo de alumnos. Y los alumnos matriculados.
// mejora del diseño del anterior 

let cursoContenedor = document.getElementById('curso');

const curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: true,
    alumnosMaximo: 6, 
    matriculas : 0,
    mostrarInfo : function() {
        return `El curso: ${this.nombre}  tiene una duración de  ${this.horas} horas`;
    },
    matricular : function(){
        console.log(this.alumnosMaximo + ' / ' + this.matriculas);
        if (this.alumnosMaximo > this.matriculas) { 
            this.matriculas++;
            document.getElementById('mat').innerHTML= 'Quedan (' + this.matriculas + ' / ' + this.alumnosMaximo  +')';
            return 'Alumno matriculado' + this.matriculas + ' / ' + this.alumnosMaximo ; 
        } else {
            alert('el curso esta completo');
            return 'El curso esta completo';
        }
    }

   
}
let plazas = curso.alumnosMaximo - curso.matriculas;
cursoContenedor.innerHTML = '<bottom id="mat" onClick="curso.matricular()">Matricular (' + plazas + ') </bottom>';
console.log(Object.keys(curso));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(curso)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(curso)); // Entries nos va a retornar una matriz de llaves y valores


// Y con eso tenemos un buen conocimiento de Objectos en JavaScript, los estaremos retomando más adelante pero primero hay que conocer otros conceptos como Arreglos y Funciones para poderle sacar más provecho.