// Родительская функция
function Electronics () {
    this.switchOn = function() {
      return 'ВКЛ'
    }
    this.switchOff = function() {
      return 'ВЫКЛ'
    }
    
  }
  
  function Tv (name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color 
    
  }
  
  function Blender (name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color 
    
  }
  
  Blender.prototype = new Electronics();
  Tv.prototype = new Electronics();
  
  const electr1 = new Blender('Bork', '600W', 'Белый');
  const electr2 = new Tv('Samsung', '220W', 'Черный');
  
  
  console.groupCollapsed('Blender');
    console.log(`Наименование ${electr1.name}`);
    console.log(`Мощность ${electr1.power}`);
    console.log(`Цвет ${electr1.color}`);
    console.log(`Статус ${electr1.switchOn()}`);
  console.groupEnd();
  
  console.groupCollapsed('Tv');
    console.log(`Наименование ${electr2.name}`);
    console.log(`Мощность ${electr2.power}`);
    console.log(`Цвет ${electr2.color}`);
    console.log(`Статус ${electr2.switchOn()}`);
  console.groupEnd();