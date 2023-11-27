//Esta función genera y devuelve una URL de imagen aleatoria 
//La URL generada incluye el ancho y alto especificados y se agrega un parámetro random con un valor aleatorio para evitar el almacenamiento en caché de la imagen.

function getRandomImageUrl() {
    var width = 500;
    var height = 500;
    return `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
  }

//Esta función cambia dinámicamente el color de fondo, el radio de borde y la imagen de fondo de elementos con la clase "disco-box".
//Obtiene todos los elementos en el documento con la clase "disco-box" usando getElementsByClassName

  function changeColorAndShape() {
    var discoBoxes = document.getElementsByClassName("disco-box");
    for (i = 0; i < discoBoxes.length; i++) {
      var randomColor = '#'+(Math.floor(Math.random()*50) + 200).toString(16) + '00'; // Gamas cercanas al rojo
      var randomBorderRadius = Math.floor(Math.random() * 50); // Valor aleatorio para border-radius
      var randomImageUrl = getRandomImageUrl();

      discoBoxes[i].style.backgroundColor = randomColor;
      discoBoxes[i].style.borderRadius = randomBorderRadius + 'px';
      discoBoxes[i].style.backgroundImage = `url(${randomImageUrl})`;
    }
  }

  setInterval(changeColorAndShape, 500);

  /*Esta función utiliza un bucle for para iterar sobre todos los elementos con la clase "disco-box". Para cada elemento, genera un color aleatorio cercano al rojo, un valor aleatorio para el radio de borde y una URL de imagen aleatoria utilizando la función getRandomImageUrl(). Luego, actualiza dinámicamente el color de fondo, el radio de borde y la imagen de fondo del elemento.

Además, hay un uso de setInterval al final del código que llama a la función changeColorAndShape cada 500 milisegundos (medio segundo), lo que hace que la apariencia de los elementos con la clase "disco-box" cambie continuamente.
*/
