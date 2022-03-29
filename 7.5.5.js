class Electronics {
    constructor (name, power) {
    this.name = name,
    this.power = power,
    this.switchOn = true
    }
  
    getPower() {
      console.log(`Мощность прибора ${this.name} = ${this.power} W`)
    }
    
    getColor() {
      console.log(`Цвет ${this.name} - ${this.color}`)
    }
    getSwitchOn() {
      if (this.switchOn == true) {
        console.log(`${this.name} включен`)
      } else {
        console.log(`${this.name} выключен`)
      }
    }
  }
  
  class Tv extends Electronics {
    constructor(name, power, color) {
      super(name, power),
      this.color = color,
      this.switchOn = true
    }
  }
  
  class Blender extends Electronics {
    constructor(name, power, color) {
      super(name, power),
      this.color = color,
      this.switchOn = false
    }
  }
  const tv = new Tv('Samsung', '220', 'Черный');
  const blender = new Blender('Bork', '600', 'Красный');
  
  
  tv.getPower();
  tv.getColor();
  tv.getSwitchOn();
  
  blender.getPower();
  blender.getColor();
  blender.getSwitchOn();