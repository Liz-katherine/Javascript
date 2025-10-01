// Vamos a añadir un tutor al curso. 
titulo.innerHTML = '06 - EStructura de objetos';
const curso = {
    nombre: "FrontEnd",
    horas: 210,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    },
    tutor : {
        Nombre:"Alberto Mozo",
        email : "albertomozodocente@gmail.com",
        linked : "https://www.linkedin.com/in/alberto-mozo-avellaned-80615713/",
        github : "https://github.com/albertomozo"
       
       
    }
}
console.log('curso');
console.log(curso);

// si ahora quisiera matricular a alumnos en este curso, debería incluirlos en esta estructura de alguna manera. Como van a ser elementos del mismo tipo, Se utilizan los array para incluir los alumnos en el curso de la siguiente forma
// podriamos definir un objeto similar al tutor, de la siguiente forma.  

const alumno = {
    "Nombre":"Alumno1",
    "email" : "Alumno1@gmail.com",
    "linked" : "https://www.linkedin.com/",
    "github" : "https://github.com",
    /*
    "inicio" : {    
        "html" : 1,
        "css" : 1,
        "JS" : 1,
        "Vue" : 1
    },
    "fin" : {     
        "html" : 4,
        "css" : 4,
        "JS" : 4,
        "Vue" : 4 
    }
    */

}
console.log('alumno');
console.log(alumno);
const cursoactual = 
{"curso":"FRONTEND",
"fecha_inicio" : "2023-02-13",
"tutor" : 
    {"Nombre":"Alberto Mozo",
        "email" : "albertomozodocente@gmail.com",
        "linked" : "https://www.linkedin.com/in/alberto-mozo-avellaned-80615713/",
        "github" : "https://github.com/albertomozo"
       
    
    },
"alumnos" : [
        {
            "Nombre":"Alumno1",
            "email" : "Alumno1@gmail.com",
            "linked" : "https://www.linkedin.com/",
            "github" : "https://github.com",
            "inicio" : {    
                "html" : 1,
                "css" : 1,
                "JS" : 1,
                "Vue" : 3
            },
            "fin" : {     
                "html" : 4,
                "css" : 4,
                "JS" : 4,
                "Vue" : 4 
            }
        
        },
        {
             "Nombre":"Alumno2",
            "email" : "Alumno2@gmail.com",
            "linked" : "https://www.linkedin.com/",
            "github" : "https://github.com",
            "inicio" : {     
                "html":2,
                "css" :3,
                "JS" : 1,
                "Vue" : 3
            },
            "fin" :{     
                "html" : 4,
                "css" : 4,
                "JS" : 4,
                "Vue" : 4 
            } 
        
        },
        {
            "Nombre":"Alumno3",
           "email" : "Alumno4@gmail.com",
           "linked" : "https://www.linkedin.com/",
           "github" : "https://github.com",
           "inicio" : {     
               "html":2,
               "css" :3,
               "JS" : 1,
               "Vue" : 3
           },
           "fin" :{     
               "html" : 4,
               "css" : 4,
               "JS" : 4,
               "Vue" : 4 
           } 
       
       },
       {
        "Nombre":"Alumno4",
       "email" : "Alumno4@gmail.com",
       "linked" : "https://www.linkedin.com/",
       "github" : "https://github.com",
       "inicio" : {     
           "html":2,
           "css" :3,
           "JS" : 1,
           "Vue" : 3
       },
       "fin" :{     
           "html" : 4,
           "css" : 4,
           "JS" : 4,
           "Vue" : 4 
       } 
   
   }  
]
}
console.log('cursoactual');
console.log(cursoactual);
    
   
   




