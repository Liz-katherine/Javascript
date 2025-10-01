titulo.innerHTML = '26 - Control alumnos III';
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
    matricular: function () {
        if (this.alumnosMaximo > this.matriculas) {
            this.matriculas++;
            actualizarInterfaz();
            return 'Alumno matriculado ' + this.matriculas + ' / ' + this.alumnosMaximo;
        } else {
            alert('El curso está completo');
            return 'El curso está completo';
        }
    }
};

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
    let plazas = curso.alumnosMaximo - curso.matriculas;
    document.getElementById('mat').innerText = 'Matricular (' + plazas + ')';
    document.getElementById('info').innerText = 'Quedan (' + curso.matriculas + ' / ' + curso.alumnosMaximo + ')';
}

// Inicialización
document.getElementById('titulo').innerText = '26 - Control alumnos III';
document.getElementById('curso').innerHTML = `
    <button id="mat">Matricular (${curso.alumnosMaximo - curso.matriculas})</button>
    <p id="info">Quedan (${curso.alumnosMaximo - curso.matriculas} / ${curso.alumnosMaximo})</p>
`;

// Asociar evento de clic al botón de matrícula
document.getElementById('mat').addEventListener('click', function () {
    curso.matricular();
});

