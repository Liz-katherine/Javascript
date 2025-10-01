/* 
headerScroll: alamacena el elemento html con el ID header-scroll
*/
let $headerScroll = document.querySelector("#header-scroll");

/* 
$sections: alamacena los elementos html con TAG section que se 
encuentren dentro de la TAG main
*/
let $sections = document.querySelectorAll("main section");

/* 
$links: alamacena los elementos html con TAG a que se 
encuentren dentro de la TAG header nav ul li
*/
let $links = document.querySelectorAll("header nav ul li a");

/* 
generamos un evento scroll en el objeto windows
*/
window.addEventListener("scroll", () => {
  /* 
  si la altura en el eje Y es mayor a 90
  (altura del header en la pagina oficial)
  añadimos a $headerScroll la clase js_header_scroll
  definida en la hoja de estilos
  */
  if (window.scrollY > 90) {
    $headerScroll.classList.add("js_header_scroll");
  } else {
    /* 
    de lo contrario removemos la clase js_header_scroll
    */
    $headerScroll.classList.remove("js_header_scroll");
  }
});

/* 
generamos un evento scroll en el objeto windows
*/
window.addEventListener("scroll", function () {
  
  /*generamos un recorrido forEach por cada $sections*/
  $sections.forEach((sect) => {
    let top = window.scrollY;
    let offset = sect.offsetTop;
    let height = sect.offsetHeight;
    
    /*
    seleccionamos un elemento del forEach de $sections haciendo uso 
    de getAttribute() en este caso por el atributo ID y almacenamos 
    esa seccion en la variable sectionId
    */
    let sectionId = sect.getAttribute("id");

    /*
    definimos un condicional si el valor de top es mayor o igual
    a el valor de offset y si top es menor que offset sumada la
    altura
    */
    if (top >= offset && top < offset + height) {
      /*
      realizamos un recorrido forEach en $links
      */
      $links.forEach((link) => {
        /*
        removemos de cada elemento la clase js_link_active 
        */
        link.classList.remove("js_link_active");
        
        /*
        finalmente haciendo uso del document seleccionamos las TAG a
        y en su atributo href pasamos como valor la variable sectionId
        con esto identificamos cual sera ese enlace al que le agregamos 
        la clase js_link_active 
        */
        document.querySelector("header nav ul li a[href*=" + sectionId + "]").classList.add("js_link_active");
      });
    }
  });
});


 // Mostrar u ocultar botón según scroll
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    // Desplazar arriba
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });