const userName = {
    name: 'Magomed',
    age: 31
  }
  
  const userIvanov = {
    name: 'Ivan',
    age: 44
  }
  const str = 'Ivan'
  
 const search = (obj,variable) => {
   for (let key in obj) {
     if (obj.[key] === variable) {
       console.log(true)
     } else {
       console.log(false)
     }
     
   }
   
 }
 search(userName, str)
 search(userIvanov, str)