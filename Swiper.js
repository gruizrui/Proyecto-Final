/* getRandomMovie(): Esta función devuelve una película aleatoria de la lista de películas.

initGame(): Esta función inicializa el juego. Establece el índice de la película actual en 0, muestra la primera película y comienza el temporizador llamando a la función startTimer().

displayMovie(): Muestra la película actual en el elemento HTML con el id "movie-title".

checkGuess(): Verifica la suposición del usuario comparando la entrada del usuario (convertida a minúsculas y sin espacios al principio y al final) con la respuesta correcta. Si la suposición es correcta, muestra "¡Correcto!" y detiene el temporizador llamando a la función endGame(). Si la suposición es incorrecta, muestra "Incorrecto. Intenta de nuevo.".

nextMovie(): Mueve al usuario a la siguiente película. Si llega al final de la lista de películas, vuelve al principio. Limpia el resultado anterior y reinicia el temporizador llamando a startTimer().

window.onload (primera aparición): Cuando la página se carga, llama a initGame() para iniciar el juego.

getHint(): Muestra una pista para la película actual. La pista consiste en la primera letra de la respuesta y el resto de letras ocultas con guiones bajos.

Variables globales:

tiempoRestante: Almacena el tiempo restante para adivinar una película.
intervalo: Almacena el identificador del intervalo utilizado para el cronómetro.
iniciarCronometro(): Inicia un cronómetro con un tiempo inicial de 20 segundos. Actualiza el elemento HTML con el tiempo restante y utiliza un intervalo para actualizar el tiempo cada segundo. Si el tiempo llega a cero, muestra una alerta.

actualizarTiempo(tiempo): Actualiza el elemento HTML con el tiempo restante.

nextMovie() (segunda aparición): Esta función es la misma que la anterior nextMovie(), pero también reinicia el cronómetro al pasar a la siguiente película.

window.onload (segunda aparición): Llama a iniciarCronometro() al cargar la página.

En cuanto a tu comentario sobre que no cambia de película, parece que la función nextMovie() se define dos veces, y la segunda definición sobrescribe la primera. Por lo tanto, solo se está utilizando la segunda definición que reinicia el cronómetro. Si deseas que también cambie de película, puedes combinar ambas partes de la función nextMovie() en una sola.
*/


// Lista de películas para adivinar
const movies = [
  "Interestelar",
  "Megalodon",
  "Prision Break",
  "Juego de Tronos",
  "Deadpool",
  "Campeones",
];

let currentMovieIndex = 0;
let timer;

// Función para obtener una película aleatoria
function getRandomMovie() {
  return movies[Math.floor(Math.random() * movies.length)];
}

// Inicializar el juego
function initGame() {
  currentMovieIndex = 0;
  displayMovie();
  startTimer();
}

// Mostrar la película actual
function displayMovie() {
  const movieTitleElement = document.getElementById("movie-title");
  movieTitleElement.textContent = movies[currentMovieIndex];
}

// Verificar la suposición del usuario
function checkGuess() {
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");

  const userGuess = guessInput.value.trim().toLowerCase();
  const correctAnswer = movies[currentMovieIndex].toLowerCase();

  if (userGuess === correctAnswer) {
    resultElement.textContent = "¡Correcto!";
    clearInterval(timer); // Detener el temporizador
    endGame();
  } else {
    resultElement.textContent = "Incorrecto. Intenta de nuevo.";
  }
}

// Ir a la siguiente película
function nextMovie() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  currentMovieIndex++;
  if (currentMovieIndex === movies.length) {
    currentMovieIndex = 0; // Reiniciar cuando se llega al final de la lista
  }

  displayMovie();
  startTimer(); // Reiniciar el temporizador para la próxima película
}

// Inicializar el juego al cargar la página
window.onload = initGame;

// Agrega la función para obtener una pista
function getHint() {
  const movieTitle = movies[currentMovieIndex];

  // Muestra la primera letra de la respuesta como pista
  const hint = movieTitle.slice(0, 1) + "_".repeat(movieTitle.length - 3);

  const hintElement = document.getElementById("hint");
  hintElement.textContent = "Pista: " + hint;
}


// Variables globales
let tiempoRestante = 20;
let intervalo;

// Función para iniciar el cronómetro
function iniciarCronometro() {
  // Reiniciar el tiempo
  tiempoRestante = 20;

  // Actualizar el elemento HTML con el tiempo inicial
  actualizarTiempo(tiempoRestante);

  // Limpiar cualquier intervalo anterior
  clearInterval(intervalo);

  // Intervalo para actualizar el tiempo cada segundo
  intervalo = setInterval(function() {
    tiempoRestante--;

    // Actualizar el elemento HTML con el tiempo restante
    actualizarTiempo(tiempoRestante);

    // Verificar si el tiempo ha llegado a cero
    if (tiempoRestante === 0) {
      // Detener el intervalo cuando el tiempo llega a cero
      clearInterval(intervalo);
      alert('¡Tiempo agotado!');
    }
  }, 1000);
}

// Función para actualizar el elemento HTML con el tiempo restante
function actualizarTiempo(tiempo) {
  document.getElementById('tiempo').textContent = tiempo;
}





//NO CAMBIA DE PELICULA, SI LO QUITO SI QUE CAMBIA

// Función que se llama al hacer clic en el botón "Siguiente Película"
function nextMovie() {
  // Reiniciar el cronómetro al pasar a la siguiente película
  iniciarCronometro();
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  currentMovieIndex++;
  if (currentMovieIndex === movies.length) {
    currentMovieIndex = 0; // Reiniciar cuando se llega al final de la lista
  }

}



// Llamar a la función iniciarCronometro al cargar la página
window.onload = function() {
  iniciarCronometro();
};

