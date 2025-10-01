titulo.innerHTML = '27 - Control alumnos IV (desmatriculas)';
// Mejora de interfaz de usuario y uso de add.listener


let cursoContenedor = document.getElementById('curso');

let curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: true,
    alumnosMaximo: 6,
    matriculas: 0,
    mostrarInfo: function () {
        return `El curso: ${this.nombre} tiene una duración de ${this.horas} horas`;
    },
    mostrarMatriculas : function() {
        return `Hay  ${curso.matriculas} alumnos de  ${curso.alumnosMaximo} plazas`;
    },
    matricular: function () {
        if (this.alumnosMaximo > this.matriculas) {
            this.matriculas++;
            actualizarInterfaz();
            return 'Alumno matriculado ' + this.matriculas + ' / ' + this.alumnosMaximo;
        } else {
            alert('El curso está completo');
            return 'El curso está completo';
        }
    },
    desmatricular: function () {
        if ( this.matriculas>= 1) {
            this.matriculas--;
            actualizarInterfaz();
            return 'Alumno des matriculado ' + this.matriculas + ' / ' + this.alumnosMaximo;
        } else {
            alert('No hay alumnos');
            return 'No hay alumnos';
        }
    }
};

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
    let plazas = curso.alumnosMaximo - curso.matriculas;
    document.getElementById('mat').innerText = 'Matricular (' + plazas + ')';
    document.getElementById('desmat').innerText = 'DesMatricular (' + plazas + ')';
    document.getElementById('info').innerText = curso.mostrarMatriculas() ;
}

// Inicialización
document.getElementById('titulo').innerText = '27 - Control alumnos IV (desmatricular)';
document.getElementById('curso').innerHTML = `
    <button id="mat">Matricular (${curso.alumnosMaximo - curso.matriculas})</button>
    <p id="info">${curso.mostrarMatriculas()}</p>
    <button id="desmat">Desmatricular
     (${curso.alumnosMaximo - curso.matriculas})</button>
`;

// Asociar evento de clic al botón de matrícula
document.getElementById('mat').addEventListener('click', function () {
    curso.matricular();
});

// Asociar evento de clic al botón de matrícula
document.getElementById('desmat').addEventListener('click', function () {
    curso.desmatricular();
});

