// Vamos a añadir un tutor al curso. 
titulo.innerHTML = '07 - Estructura de objetos';

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

console.log(cursoactual);

/* VAMOS A RECORRER ESTE OBJETO PARA VISUALIZAR LA INFORMACIÓN DE OTRA FORMA */


    
   
   




