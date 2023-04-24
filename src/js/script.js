function encriptar() {
  var input = document.getElementById("input").innerText;
  let input1=document.getElementById("input")

  if(input.length === 0){
    alert("La entrada de texto esta vacia");
    input1.focus();
  }else{
    let elementos = document.querySelectorAll(".ocultar");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "none";
    }

    let elemento = document.querySelector(".mostrar");
    elemento.style.display = "block";



    var output = "";
    for (var i = 0; i < input.length; i++) {
      var char = input.charAt(i);
      switch (char) {
        case "e":
          output += "enter";
          break;
        case "i":
          output += "imes";
          break;
        case "a":
          output += "ai";
          break;
        case "o":
          output += "ober";
          break;
        case "u":
          output += "ufat";
          break;
        default:
          output += char;
      }
      document.getElementById("input").innerText = "";
    }
    document.getElementById("output").innerText = output;
  }
}


function desencriptar() {
  var input = document.getElementById("input").innerText;
  let input1=document.getElementById("input")
  if(input.length === 0)
  {
    alert("La entrada de texto esta vacia");
    input1.focus();
  }else{
    let elementos = document.querySelectorAll(".ocultar");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "none";
    }

    let elemento = document.querySelector(".mostrar");
    elemento.style.display = "block";


    var output = "";
    var i = 0;
    while (i < input.length) {
      var char = input.charAt(i);
      if (char === "e") {
        i += 4; // saltar los siguientes 4 caracteres ("nter")
        output += "e";
      } else if (char === "i") {
        i += 3; // saltar los siguientes 3 caracteres ("mes")
        output += "i";
      } else if (char === "a") {
        i += 1; // saltar el siguiente caracter ("i")
        output += "a";
      } else if (char === "o") {
        i += 3; // saltar los siguientes 3 caracteres ("ber")
        output += "o";
      } else if (char === "u") {
        i += 3; // saltar los siguientes 3 caracteres ("fat")
        output += "u";
      } else {
        output += char;
      }
      i++;
    }
    document.getElementById("output").innerText = output;
    document.getElementById("input").innerText = "";
  }
}



function copiar() {
  var div = document.getElementById("output");
  var texto = div.textContent;
  if(texto.length=== 0)
  { 
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "El cuadro de texto esta en blanco.";
    mensaje.style.display = "block";
    setTimeout(function() {
      mensaje.style.display = "none";
    }, 1000);
  }else{
    var seleccion = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(div);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    document.execCommand("copy");
    var mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Texto copiado en el Portapapeles.";
    mensaje.style.display = "block";
    setTimeout(function() {
      mensaje.style.display = "none";
    }, 1000);


    document.getElementById("output").innerText = "";
    let input1=document.getElementById("input")
    input1.focus();
    let elementos = document.querySelectorAll(".ocultar");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "block";
    }
  }
}


