function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  console.log("der: ",delimitadorDerecha);
  console.log("izq: ",delimitadorIzquierda);
  console.log("cad: ",cadena); 
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind("*","*");
let textoGuiones = crearCadena.bind(this,"-","-");
let textoUnderscore = crearCadena.bind(this,"_","_");

console.log(textoAsteriscos("cadena"));