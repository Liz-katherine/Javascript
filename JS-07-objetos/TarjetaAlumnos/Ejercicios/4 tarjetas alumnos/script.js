const cursoJSON = {
  "curso": "IFCD0110_202505",
  "fecha inicio": "2025-05-15",
  "fecha fin": "2025-09-26",
  "lugar": "Donosti",
  "empresa": "CEBANC",
  "url_drive": "https://docs.google.com/presentation/d/1APMiTbTaZDGt2DyPXf5gcJxv--SWPONJ0nOrvrpPv4o/edit?usp=drive_link",
  "tutor": {
    "Nombre": "Alberto Mozo",
    "linked": "https://www.linkedin.com/in/alberto-mozo-avellaned-80615713/",
    "github": "albertomozo"
  },
  "alumnos": [
    {
      "Nombre": "Monica",
      "email": "moniqueaghedo2001@gmail.com",
      "linked": "https://www.linkedin.com/",
      "github": "moniqueaghedo",
      "url": "https://curriculumvitae01.netlify.app/",
      "inicio": {"html": 1, "css": 1, "JS": 1},
      "fin": {"html": 0, "css": 0, "JS": 0}
    },
    {
      "Nombre": "Liz Cebrecos",
      "email": "liz.k.cebrecos@gmail.com",
      "linked": "http://Linkedin.com/in/lizcebrecos",
      "github": "Liz-katherine",
      "url": "https://cvindex.netlify.app/",
      "inicio": {"html": 0, "css": 0, "JS": 0},
      "fin": {"html": 2, "css": 1, "JS": 0}
    }
  ]
};

function pintarCurso() {
  document.getElementById('titulo').innerHTML = cursoJSON.curso;
  let curso = document.getElementById('curso');
  let textoCurso = `<ul class="bloqueCurso">
    <li><strong>Fecha Inicio</strong> : ${cursoJSON["fecha inicio"]}</li>
    <li><strong>Fecha Fin</strong> : ${cursoJSON["fecha fin"]}</li>
    <li><strong>Lugar </strong> : ${cursoJSON["lugar"]}</li>
    <li><strong>Empresa</strong> : ${cursoJSON["empresa"]}</li>
    <li><strong>URL Inicio</strong> : <a href="${cursoJSON["url_drive"]}" target="_blank">documentación</a></li>
  </ul>`;
  curso.innerHTML = textoCurso;
}

function pintarTutor() {
  let tutor = document.getElementById('tutor');
  let textoTutor = `<h2>Tutor</h2>
    <ul class="bloqueTutor">`;
  textoTutor += pintarPersona(cursoJSON.tutor);
  textoTutor += `</ul>`;
  tutor.innerHTML = textoTutor;
}

function pintarAlumnos() {
  let alumnos = document.getElementById('alumnos');
  let alumnosTabla = cursoJSON.alumnos;
  let textoAlumnos = '<h2>Alumnos</h2><div class="row row-cols-1 row-cols-md-2 g-4">';
  alumnosTabla.forEach(alumno => {
    textoAlumnos += `
      <div class="col">
        <div class="card p-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${alumno.Nombre}</h5>
            <p class="card-text">
              ${pintarPersona(alumno)}
              <strong>GitHub:</strong> ${alumno.github}<br>
              <strong>CV:</strong> <a href="${alumno.url}" target="_blank">Ver CV</a><br>
              <strong>Inicio:</strong> HTML ${alumno.inicio.html} | CSS ${alumno.inicio.css} | JS ${alumno.inicio.JS}<br>
              <strong>Fin:</strong> HTML ${alumno.fin.html} | CSS ${alumno.fin.css} | JS ${alumno.fin.JS}
            </p>
          </div>
        </div>
      </div>`;
  });
  textoAlumnos += '</div>';
  alumnos.innerHTML = textoAlumnos;
}

function pintarPersona(persona) {
  let resultado = '';
  resultado += `<strong>Email:</strong> ${persona.email}<br>`;
  resultado += `<strong>LinkedIn:</strong> <a href="${persona.linked}" target="_blank">Perfil</a><br>`;
  return resultado;
}

pintarCurso();
pintarTutor();
pintarAlumnos();
