'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
 
  
*/
function LinkedList() {
  this.head = null;
  this.length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}


//- add: agrega un nuevo nodo al final de la lista;
LinkedList.prototype.add = function (value) {
  let puntero = this.head;
  let nodo = new Node(value);
  if (!puntero) {  // si lista vacía
    this.head = nodo;
  }

  else{  while (puntero.next)
            puntero = puntero.next;
        puntero.next = nodo;
  }
  this.length++;
  return nodo;
}
//remove: elimina el último nodo de la lista y retorna su valor
LinkedList.prototype.remove = function () {
  if (!this.head)
    return null;
  let puntero = this.head;
  let aux = puntero;
  while (puntero.next) {
    aux = puntero;
    puntero = puntero.next;
  }
  if (aux === puntero) {
    this.head = null;
  }
  else aux.next = null;
  this.length--;
  return puntero.value;
}

/* - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
LinkedList.prototype.search = function (value) {
  let puntero = this.head;
  if (!this.head) return null;
  if (typeof value === 'function') {
    do {
      if (value(puntero.value))
        return puntero.value;
    } while (puntero = puntero.next);
    return null;
  }
  do {
    if (puntero.value === value)
      return puntero.value;
  } while (puntero = puntero.next);
  return null;

}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.tabla = new Array(this.numBuckets);
}


HashTable.prototype.hash = function (str) {

  let retorno = 0;
  for (let i = 0; i < str.length; i++)
    retorno += str.charCodeAt(i);
  return retorno % 35;
}

/*- set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto. */

/*qué pasa cuando dos keys distintas generar dos hash iguales */
HashTable.prototype.set = function (clave, valor) {

  // si me pasa una clave que no es un string
  if(!(typeof clave === "string"))
       throw new TypeError("clave debe ser un string") 

   
  let i=this.hash(clave);
   // si la clave existe==> la sobreescribo 
  if(this.hasKey(clave)){
      while(!this.tabla[i].hasOwnProperty(clave)){
        i++;
        i%=this.numBuckets;
      }
      this.tabla[i][clave]=valor;
      return valor;
  }
  
 
  // si la tabla[i] está vacía
  if(!this.tabla[i]){
    this.tabla[i]={};
    this.tabla[i][clave]=valor;//{clave:valor}
    return valor;
  }
  //si no es porq ya se insertó una clave distinta a la clave de ahora y dieron el mismo hash
 
  let aux=0;
  while(this.tabla[i] && aux<this.numBuckets){
    aux++;
    i++;
    i%=this.numBuckets;
  }
  if(aux!==this.numBuckets){
  this.tabla[i]={};
  this.tabla[i][clave]=valor;
  return valor;
  }
  return null;
  }



/* - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla. */
HashTable.prototype.get = function (clave) {
    // si me pasan una clave que no es un string
    if(!(typeof clave === "string"))
       throw new TypeError("clave debe ser un string")  
   
    let i=this.hash(clave);
    //si la tabla de i no tiene nada
    if(!this.tabla[i]) 
        return null;  
    let aux=0;
    while(this.tabla[i] && aux<this.numBuckets){
      if(this.tabla[i].hasOwnProperty(clave))
        return this.tabla[i][clave];
      aux++;
      i++;
      i%=this.numBuckets;
    }
      
    return null;
    
  }
  


/*- hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano). */

HashTable.prototype.hasKey = function (clave) {
 
  let i=this.hash(clave);
  let aux=0;
       while((this.tabla[i])&& aux<this.numBuckets ){
         if(this.tabla[i].hasOwnProperty(clave))
            return true; 
        aux++;
        i++;
        i%=this.numBuckets;
       }
  return false;      
} 
       
     
      
 





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
