//Código Inicial
class Player {
  //6) Revisamos las propiedades que estamos creando para cada jugador ¿Cuáles son?
      constructor() {
      //7b) Guarda un identificador único para cada jugador      
        this.index = null;
       //7a) Para Guardar el nombre del jugador 
       this.name = null;       
        
  
  
       //7c) Almacenan la posición X and Y de cada jugador 
       this.positionX = 0;
       this.positionY = 0;     
        



      }
      
  //9) Agrega las propiedades de los jugadores 
  addPlayer() {
  //9a) Crea una jerarquía de jugadores/jugao r1 en la base de datos
     var playerIndex = "players/player" + this.index;
  //9b) Da posición x a ambos jugadores uno a la izq. desde center (width/2) y otro a la derecha
     if (this.index === 1) {
       this.positionX = width / 2 - 100;
     }
    else {
      this.positionX = width / 2 + 100;
    }

     //9c) Actualiza en la base de datos el nombre del jugador y su posición (x,y)
     database.ref(playerIndex).set({
       name: this.name,
       positionX: this.positionX,
       positionY: this.positionY

     });
      

  


  }
  
  //8) Lee la base de datos, escuchar los cambios y actualizarlos valores RECORDEMOS
  // .ref()  Para dar la ubicación del campo en la base de datos
  // .on()  Continuar escuchando los cambios que ocurren en el campo 'playerCount' de la DB
  // .val() - para copiar el valor de la base de datos a la variable global del código
  // .update - para almacenar el valor de la variable global en el campo de la base de datos 'playerCount'
      getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
      }
  //8a) “/” se usa en updateCount para hacer referencia al directorio raíz.  
      updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
      }
  }
  
  