class Ninja {
  constructor(nombre, salud = 10, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }
  sayName() {
    console.log(this.nombre);
  }
  showStats() {
    // mostrar todos los atributos del ninja
    console.log(
      `Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`
    );
  }
  drinkSake() {
    this.salud += 10;
  }
}

/*Un Sensei debe tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto. Además, un Sensei debe tener un nuevo atributo llamado sabiduría , y el valor predeterminado debe ser 10. Finalmente, agrega el métodospeakWisdom(). speakWisdom()debe llamar al métododrinkSake() desde la clase Ninja, antes de hacer console.logging un mensaje de sabiduría.*/

class Sensei extends Ninja {
  constructor(nombre, salud = 200, velocidad = 10, fuerza = 10) {
    super(nombre, salud, velocidad, fuerza);
    this.sabiduria = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
    );
  }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
