fetch('IFCD0110_202505.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('header').innerHTML = `
      <h1>Curso ${data.curso}</h1>
      <p><strong>Empresa:</strong> ${data.empresa}</p>
      <p><strong>Lugar:</strong> ${data.lugar}</p>
      <p><strong>Fechas:</strong> ${data["fecha inicio"]} - ${data["fecha fin"]}</p>
      <p><a href="${data.url_drive}" target="_blank">Presentación del Curso</a></p>
    `;
    document.getElementById('tutor').innerHTML = `
      <h2>Tutor</h2>
      <p><strong>Nombre:</strong> ${data.tutor.Nombre}</p>
      <p>
        <a href="mailto:${data.tutor.email}">Email</a>
        <a href="${data.tutor.linked}" target="_blank">LinkedIn</a>
        <a href="https://github.com/${data.tutor.github}" target="_blank">GitHub</a>
      </p>
    `;
    const alumnosContainer = document.getElementById('alumnos');
    data.alumnos.forEach(alumno => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${alumno.Nombre}</h3>
        <p><a href="mailto:${alumno.email}">Email</a></p>
        <p>
          ${alumno.linked ? `<a href="${alumno.linked}" target="_blank">LinkedIn</a>` : ''}
          ${alumno.github ? `<a href="https://github.com/${alumno.github}" target="_blank">GitHub</a>` : ''}
          ${alumno.url ? `<a href="${alumno.url}" target="_blank">CV</a>` : ''}
        </p>
        <div class="skills">
          <p><strong>Inicio:</strong> HTML: ${alumno.inicio.html}, CSS: ${alumno.inicio.css}, JS: ${alumno.inicio.JS}</p>
          <p><strong>Fin:</strong> HTML: ${alumno.fin.html}, CSS: ${alumno.fin.css}, JS: ${alumno.fin.JS}</p>
        </div>
      `;
      alumnosContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error al cargar JSON:', error));