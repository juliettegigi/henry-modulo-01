var person = {
   nombre: 'Defecto',
   apellido: 'Defecto'
  }; // un objeto cualquiera
  
  var Santi = Object.create(person); // le paso el objeto que creamos
  console.log("ew: ",Santi) // es un objeto
  console.log(Santi.__proto__) 