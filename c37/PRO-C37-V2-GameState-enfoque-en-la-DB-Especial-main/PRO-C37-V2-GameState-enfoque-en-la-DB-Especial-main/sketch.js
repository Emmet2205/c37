//Código de Inicio PRO C37 V2 Estados del Juego e información del Jugador
var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var car1_img;
var car2_img;
var track_img;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png")
  car2_img = loadImage("./assets/car2.png")
  track_img = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();

  
//4a) Aquí llamamos la función getState para leer el estado del juego ANTES de mostrar el formulario
//4b) Primero llamamos la función getState() y después start()
game.getState();
//5) Start de la class Game crea un objeto pato para la clase Form y Player
game.start();
//6) Revisar la función start() dentro de class Game.
}

function draw() {
  background(backgroundImage);
 //15 TA) Se el numero de jugadores es 2, el gameState se convierte en 1;
  if (playerCount === 2) {
    game.update(1);
  }

 //Si el gameState se convierte en 1 entonces se llama al módulo play de gameState
 //e Inicia el juego.
  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
