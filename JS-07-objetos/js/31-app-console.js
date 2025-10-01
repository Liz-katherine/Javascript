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
                console.log('🎓');
                tablaMat += '<i class="fa-solid fa-user-graduate"></i>';
                
            } else {
                console.log('❌');
                tablaMat += '<img src="imagenes/close.png" width="16px" />';
            }
            tablaMat += '</td>';
        }
        console.log('fin - for');
        tablaMat += '</tr></table>';
        return tablaMat;
    },
    matricular: function () {    
            this.matriculas++;
            actualizarInterfaz();       
    },
    desmatricular: function () {  
            this.matriculas--;
            actualizarInterfaz();      
    }
};

// Función para actualizar la interfaz de usuario
function actualizarInterfaz() {
    // Incializacion de variables
    console.log('📘Actualizar');
    console.table(curso);

    let plazas = curso.alumnosMaximo - curso.matriculas;
    let btnDesmat = document.getElementById('desmat');
    // Actualizamos valores botones  botones 
    document.getElementById('mat').innerText = 'Matricular (' + plazas + ')';
    btnDesmat.innerText = 'DesMatricular (' + plazas + ')';
    btnDesmat.style.backgroundColor = 'red';
    document.getElementById('info').innerHTML = curso.mostrarMatriculas() ;
    // si no hay plazas no podemos matriculas
    if (curso.matriculas == 12) {
        document.getElementById('mat').style.display = 'none';
        console.log('❌ Quitamos boton matricular');
    } else {
        document.getElementById('mat').style.display = 'block';
    } 
    // si no hay matriculas no podemos desmatricular.
    if (curso.matriculas == 0 )
    {
        btnDesmat.disabled=true;
        console.log('💣 deshabilita boton desmatricular');
    } else {
        btnDesmat.disabled = false;
        
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

