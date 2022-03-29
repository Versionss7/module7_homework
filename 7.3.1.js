const userShabanov = {
    surname: 'Shabanov',
    age: 31
  }
  
  userShabanov.name = 'Magomed';
  delete userShabanov.name;
  
  // Функция, которая принимает в качестве аргумента объект и выводит в консоль все ключи собственных свойств
  
  const showAllKeys = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key);
      }
    }
  }
  showAllKeys(userShabanov);