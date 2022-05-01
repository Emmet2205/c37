//Código de Inicio
class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>espera a que otro jugador se una...`;
      this.greeting.html(message);

// 10 TA) Un objeto clase Player llamará el método addPlayer para 
//agregar información en la base de datos y un updateCount() 
//para aumentar el campo playerCount en la DB.
playerCount += 1;

// 10a TA)El método this.input.value() se utiliza para leer la entrada
//del usuario en el nombre del juego del jugador.
//El nombre del jugador se asignará a la propiedad player.name.
player.name = this.input.value();

// 10b TA) EL Player Count agrega el identificador único para cada jugador.
//Una vez iniciada la carrera será muy útil éste identificador.
player.index = playerCount;
//10c TA) Por último, llamamos addPlayer(). Este método
// almacenará todos los datos en la base de datos.
player.addPlayer();

player.updateCount(playerCount);

    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
