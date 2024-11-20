document.addEventListener("keydown", function (event) {
    const elemento = document.getElementById("cuerpo"); // esta linea relaciona a todos mis htmls

    if (event.key === "1") {
        elemento.classList.toggle("cuerpo00");
    }

    if (event.key === "2") {
        elemento.classList.toggle("cuerpo01"); // esta linea camnia el estilo de alhun html 
    }

    if (event.key === "3") {
        elemento.classList.toggle("cuerpo03");
    }
    if (event.key === "4") {
        elemento.classList.toggle("cuerpo04");
    }
    if (event.key === "5") {
        elemento.classList.toggle("cuerpo05");
    }
 
document.addEventListener("keydown", function(event){console.log(event)})});

// Cambia el texto del primer botón con ArrowLeft (de Hola a Adiós)
document.addEventListener("keydown", function(event) {
    // Detectar la tecla ArrowLeft para el primer botón
    if (event.key === "ArrowLeft") {
        const button1 = document.getElementById("button1");
        
        // Cambia el texto de "Hola" a "Adiós" o viceversa
        if (button1.textContent === "Hola") {
            button1.textContent = "Adios";
        } else {
            button1.textContent = "Hola";
        }
    }

    // Detectar la tecla ArrowRight para el segundo botón
    if (event.key === "ArrowRight") {
        const button2 = document.getElementById("button2");
        
        // Cambia el texto de "Hello" a "Bye" o viceversa
        if (button2.textContent === "Hello") {
            button2.textContent = "Bye";
        } else {
            button2.textContent = "Hello";
        }
    }
});


// soy Alexander Maurice Ponce Sierra, estudio diseño de la comunicacion grafica en la lobos alamedas y hoy es 20 de noviembre del 2024