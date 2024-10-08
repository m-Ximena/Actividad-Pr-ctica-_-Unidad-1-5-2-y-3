//a. Mostrar el número de artículos que existen en el documento 
console.log("Número de artículos que existen en el documento");
console.log(document.querySelectorAll("h3").length); 

//b. Identificar líneas divisorias dentro del documento y número de líneas
console.log("Identificar líneas divisoras dentro del documento y número de líneas");
console.log(document.querySelectorAll("hr"));
console.log(document.querySelectorAll("hr").length); 

//c. Identificar los elementos de lista dentro del documento y número de elementos en total.
console.log("Identificar elementos de lista dentro del documento y número de elementos en total");
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length); 

//d. Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.
console.log("Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.");
console.log(document.querySelectorAll("#elemen li"));
console.log(document.querySelectorAll("#elemen li").length); 
document.querySelectorAll("#elemen a").forEach((el)=>console.log(el));


//e. Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.
console.log("Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista");
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll("#menu a"));
console.log(document.querySelectorAll("#menu a").length);

//f. Identificar imágenes dentro del Documento y número de imágenes en total.
console.log("Identificar imágenes en el documento y el número total de imagenes");
console.log(document.querySelectorAll("img")); 
console.log(document.querySelectorAll("img").length);

/* g. Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes 
dentro de este bloque.*/
console.log("Identificar imágenes del “Artículo 2”, identificar primera imagen y número total de imágenes”");
console.log(document.querySelectorAll(".imgAr2 img"));
console.log(document.querySelectorAll(".imgAr2 img")[0]);
console.log(document.querySelectorAll(".imgAr2 img").length);

/* h. Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda 
y cuarta imagen del presente bloque.*/
console.log("Identificar imágenes del “Artículo 3”, número total de imagenes y código de la segunda y cuarta imagen");
console.log(document.querySelectorAll("#imgAr3 img"));
console.log(document.querySelectorAll("#imgAr3 img").length);
console.log(document.querySelectorAll("#imgAr3 img")[1]);
console.log(document.querySelectorAll("#imgAr3 img")[3]);

//i. Identificar enlaces del documento y número de enlaces en total.
console.log("Identificar enlaces del documento y número total");
console.log(document.querySelectorAll("a")); 
console.log(document.querySelectorAll("a").length); 

//j. Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.
console.log("Identificar enlaces del “Artículo 1” y número de enlaces");
console.log(document.querySelectorAll("#text1 a")); 
console.log(document.querySelectorAll("#text1 a").length); 