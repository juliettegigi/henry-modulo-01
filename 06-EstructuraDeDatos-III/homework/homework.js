'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value=undefined) {
   this.value=value;
  this.right=undefined;
  this.left=undefined;
  this.cantidadNodos =value!= undefined? 1:0;
}

BinarySearchTree.prototype.insert = function (value) {
   // si me pasan un valor q ya está retorno
   if(this.contains(value))return null;
   this.cantidadNodos++;

   // si el árbol no tiene raíz, la 1ra vez q inserto 
    if(this.value===undefined){
       this.value=value;
       return ;
    }
   //sino creo un subarbolBinario
    let arbol=new BinarySearchTree(value);

  
    let ir = function (arbol,padre) {     
       if (value <padre.value){
           if(padre.left===undefined){
               padre.left=arbol;
               return;
           }
           else ir(arbol,padre.left)
             
       }
       else{ if(padre.right===undefined){
                   padre.right=arbol;
                   return;
             }
             else ir(arbol,padre.right)
           }
   }    
 



   // sino tengo q ver donde ubico al elemento
   ir(arbol,this);
   
   return arbol;
   
}


//////////////////////////////////

BinarySearchTree.prototype.size=function(){
   if(!this.left && !this.right ) // if (this.left===null && this.right===null)
            return 1;
   if(!this.left && this.right){
      return 1+this.right.size();
   }
   if(!this.right && this.left)
      return 1+this.left.size();
   if(this.right && this.left)
      return 1+this.left.size()+this.right.size();
}


//////////////////////////////////////////////////////////////////
//////                   contains
//////////////////////////////////////////////////////////////////
BinarySearchTree.prototype.contains = function (value) {
   if (this.value===undefined) return false;


   const buscar = function (arbol) {
      if (!arbol) return false;
      if (arbol.value === value) return true;
      if(value< arbol.value)
         return buscar(arbol.left)
      else return buscar(arbol.right)

   }
   return buscar(this);
}


///////////////////////////////////////////////////////////////////////
///////////////            depthFirstForEach
///////////////////////////////////////////////////////////////////////
BinarySearchTree.prototype.depthFirstForEach = function (cb,order = "in-order") {

   switch (order) {
      case "post-order":if(this.left)this.left.depthFirstForEach(cb,"post-order");
                        if(this.right)this.right.depthFirstForEach(cb,"post-order");
                        cb(this.value);             
                        break;
     case "pre-order":  cb(this.value);
                        if(this.left)this.left.depthFirstForEach(cb,"pre-order");
                        if(this.right)this.right.depthFirstForEach(cb,"pre-order");
                        break;
      default: if(this.left)this.left.depthFirstForEach(cb);
               cb(this.value);
               if(this.right)this.right.depthFirstForEach(cb);
                        
                
               }
}




BinarySearchTree.prototype.breadthFirstForEach=function(cb){
   let obj={};
   var i=0;
   const pre = function (cb,arbol) {
    if (!arbol){return }
    cb(arbol.value,i);
    i++;
    pre(cb,arbol.left);
    pre(cb,arbol.right);
    --i;
}
   
    pre(
        function(val,i){ 
            let j=i;
            if(!obj.hasOwnProperty(`nivel${j}`))
                obj[`nivel${j}`]=[];
            obj[`nivel${j}`].push(val);
           
         }
        ,this);

//console.log("pliss  ",obj);

        for(let clave in obj){
            obj[clave].forEach(element => {
                cb(element)
            });
        }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
