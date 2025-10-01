titulo.innerHTML = '27 - Control alumnos IV (desmatriculas)';
// Mejora de interfaz de usuario y uso de add.listener


let cursoContenedor = document.getElementById('curso');

let curso = {
    nombre: "FRONT",
    horas: 210,
    disponible: true,
    alumnosMaximo: 12,
    matriculas: 0,
    mostrarInfo: function () {
        return `El curso: ${this.nombre} tiene una duración de ${this.horas} horas`;
    },
    mostrarMatriculas : function() {
        //return `Hay  ${curso.matriculas} alumnos de  ${curso.alumnosMaximo} plazas`;
        let tablaMat = '<table class="barraMatriculas"><tr>';
        for (let i =1; i<=this.alumnosMaximo;i++){
            tablaMat += '<td>';
            if (i <= this.matriculas) {
                tablaMat += '<i class="fa-solid fa-user-graduate"></i>';
            } else {
                tablaMat += '<img src="imagenes/close.png" width="16px" />';
            }
            tablaMat += '</td>';
        }
        tablaMat += '</tr></table>';
        return tablaMat;
    },
    matricular: function () {
        if (this.alumnosMaximo > this.matriculas) {
            this.matriculas++;
            actualizarInterfaz();
          
        }
    },
    desmatricular: function () {
        if ( this.matriculas> 0) {
            this.matriculas--;
            actualizarInterfaz();      
        }
    }
};

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
    // Incializacion de variables
    let plazas = curso.alumnosMaximo - curso.matriculas;
    let btnDesmat = document.getElementById('desmat');
    // Actualizamos valores botones  botones 
    document.getElementById('mat').innerText = 'Matricular (' + plazas + ')';
    btnDesmat.innerText = 'DesMatricular (' + plazas + ')';
    btnDesmat.style.backgroundColor = 'red';
    document.getElementById('info').innerHTML = curso.mostrarMatriculas() ;
    // si no hay plazas no podemos matriculas
    if (plazas == 0) {
        document.getElementById('mat').style.display = 'none';
    } else {
        document.getElementById('mat').style.display = 'block';
    } 
    // si no hay matriculas no podemos desmatricular.
    if (curso.matriculas == 0 )
    {
        btnDesmat.style.display = 'none';
    } else {
        btnDesmat.style.display = 'block';
    }
}

// Inicialización generamos varores iniciales en los contenedores
document.getElementById('titulo').innerText = '31  - Estilos CSS y segunda refactorizacion';


document.getElementById('curso').innerHTML = `
    <button id="mat"></button>
    <p id="info"></p>
    <button id="desmat"></button>
`;

actualizarInterfaz();

// Asociar evento de clic al botón de matrícula
document.getElementById('mat').addEventListener('click', function () {
    curso.matricular();
});

// Asociar evento de clic al botón de matrícula
document.getElementById('desmat').addEventListener('click', function () {
    curso.desmatricular();
});

