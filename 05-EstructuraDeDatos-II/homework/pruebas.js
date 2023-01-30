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
  
    if(!(typeof clave === "string"))
         throw new TypeError("clave debe ser un string") 
  
      // si la clave existe==> la sobreescribo o
      // 
    if(this.hasKey(clave)){
        let i=this.hash(clave);
        while(!this.tabla[i].hasOwnProperty(clave)){
          i++;
          i%=this.numBuckets;
        }
        
             this.tabla[i][clave]=valor;
            return valor;
    }
    
   
    // si la tabla[i] está vacía
    if(!this.tabla[this.hash(clave)]){
      this.tabla[this.hash(clave)]={};
      this.tabla[this.hash(clave)][clave]=valor;
      return valor;
    }
    //si no
    let i=this.hash(clave);
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
    
      if(!(typeof clave === "string"))
         throw new TypeError("clave debe ser un string")  
     
      let i=this.hash(clave);
      //si la tabla de i no tiene nada
      if(!this.tabla[this.hash(clave)]) return null;  
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
  