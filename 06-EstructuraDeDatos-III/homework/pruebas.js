
function Nodo(value){
    this.value=value;
    this.left=undefined;
    this.right=undefined;

}

function BinarySearchTree() {
   this.arr = new Array();//[];
   this.right=undefined;
   this.left=undefined;
   this.cantidadNodos = 0;
}

BinarySearchTree.prototype.insert = function (value) {
   if(this.contains(value))return null;
   
   let nodo=new Nodo(value);

   let ir = function (arbolRaiz,arr) {
    
        if (value <arr[arbolRaiz].value){
            if(arr[arbolRaiz].left===undefined){
                arr[arbolRaiz].left=nodo;
                arr[arbolRaiz*2+1]=nodo;
                return;
            }
            else ir(arbolRaiz * 2 + 1,arr)
              
        }
        else{ if(arr[arbolRaiz].right===undefined){
                    arr[arbolRaiz].right=nodo;
                    arr[arbolRaiz*2+2]=nodo;
                    return;
              }
              else ir(arbolRaiz * 2 + 2,arr)
            }

            
        }   
    this.cantidadNodos++;
    if(this.arr[0]===undefined){
        this.arr[0]=nodo;
        return;
    }
    ir(0,this.arr);


}


BinarySearchTree.prototype.contains = function (value) {
    if (this.arr[0]===undefined) return false;
 
 
    const buscar = function (arbolRaiz,arr) {
       if (arr[arbolRaiz]===undefined) return false;
       if (arr[arbolRaiz].value === value) return true;
       if(value< arr[arbolRaiz].value)
          return buscar(arbolRaiz*2+1,arr)
       else return buscar(arbolRaiz*2+2,arr)
 
    }
    return buscar(0,this.arr);
 }


 BinarySearchTree.prototype.depthFirstForEach = function (order = "in-order") {
    const post = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return [];
       const arr1=post(raizArbol*2+1,arr);
       const arr2=post(raizArbol*2+2,arr);
       const arr3=arr1.concat(arr2);
       arr3.push(arr[raizArbol].value);
       return arr3;
       //return arr[raizArbol].value
       //console.log(arr[raizArbol].value);
    }
 
    const pre = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return[];
       //const arr3=arr[raizArbol].value;
       const arr1=pre(raizArbol*2+1,arr);
       const arr2=pre(raizArbol*2+2,arr);
       arr1.unshift(arr[raizArbol].value);
       
       return arr1.concat(arr2);
    }
    const iin = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return[];
 
       const arr1=iin(raizArbol*2+1,arr);
       arr1.push(arr[raizArbol].value);
       return arr1.concat(iin(raizArbol*2+2,arr));
 
    }
 
    if(this.arr[0]===undefined)return;
 
    switch (order) {
       case "post-order": return post(0,this.arr)
         
       case "pre-order": return pre(0,this.arr)
          
       case "in-order": 
                return iin(0,this.arr);
               
    }
 
 
 }
 

const tree=new BinarySearchTree();
tree.insert(12);
tree.insert(12);
tree.insert(22);
console.log(tree.left.value);
console.log(tree.right.value);
// console.log("post-order");
// arbol.depthFirstForEach("post-order");
// console.log("pre-order");
// arbol.depthFirstForEach("pre-order");

/*

function BinarySearchTree() {
    this.arr = new Array();
    console.log("soy indefined? ",this.arr);
    this.cantidadNodos = 0;
}

BinarySearchTree.prototype.insert = function (value) {

   let ir = function (arbolRaiz,arr) {
        
        if (arr[arbolRaiz]!==undefined ) {
                  if (value <arr[arbolRaiz])
                         ir(arbolRaiz * 2 + 1,arr)
                  else
                         ir(arbolRaiz * 2 + 2,arr)
            }

        else{  arr[arbolRaiz] = value;
                return;
            }     
        }   
    this.cantidadNodos++;
    ir(0,this.arr);


}

BinarySearchTree.prototype.breadthFirstForEach=function(){
     
    for(let i=0; i<this.arr.length;i++){
          if(this.arr[i]!==undefined)
            console.log(this.arr[i]);
    }
 
 }


 BinarySearchTree.prototype.contains = function (value) {
    if (this.arr[0]===undefined) return false;
 
 
    const buscar = function (arbolRaiz,arr) {
       if (arr[arbolRaiz]===undefined) return false;
       if (arr[arbolRaiz] === value) return true;
       if(value< arr[arbolRaiz])
          return buscar(arbolRaiz*2+1,arr)
       else return buscar(arbolRaiz*2+2,arr)
 
    }
    return buscar(0,this.arr);
 }

/////////////////////////////////////////////////////////////////////////

 BinarySearchTree.prototype.depthFirstForEach = function (order = "in-order") {
    const post = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return;
       post(raizArbol*2+1,arr);
       post(raizArbol*2+2,arr);
       console.log(arr[raizArbol]);
    }
 
    const pre = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return;
       console.log(arr[raizArbol]);
       pre(raizArbol*2+1,arr);
       pre(raizArbol*2+2,arr);
 
    }
    const iin = function (raizArbol,arr) {
       if (arr[raizArbol]===undefined) return;
 
       iin(raizArbol*2+1,arr);
       console.log(arr[raizArbol]);
       iin(raizArbol*2+2,arr);
 
    }
 
    if(this.arr[0]===undefined)return;
 
    switch (order) {
       case "post-order": post(0,this.arr)
          break;
       case "pre-order": pre(0,this.arr)
          break;
       case "in-order": 
                console.log("case -in order");
                iin(0,this.arr);

                break;
    }
 
 
 }


let arbol = new BinarySearchTree();
valuesToInsert = [20,15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
for(let i=0;i<valuesToInsert.length;i++){
    arbol.insert(valuesToInsert[i]);
}

arbol.breadthFirstForEach();

console.log(arbol.cantidadNodos);

for(let i=0;i<valuesToInsert.length;i++){
  //  arbol.contains(valuesToInsert[i]);
    console.log( arbol.contains(valuesToInsert[i]));
}

console.log("preorder **************************");
arbol.depthFirstForEach("post-order");





*/

////////////////////////////////////////////////////////////
////           ***********  con nodos, sin arr
////////////////////////////////////////////////////////////
/*function Nodo(value) {
    this.value = value;
    this.hijoDer = null;
    this.hijoIzq = null;
 }
 function BinarySearchTree() {
    this.raiz = null;
    this.cantidadNodos = 0;
 }
 
 BinarySearchTree.prototype.insert = function (value) {
    let nodo = new Nodo(value);
    if (this.raiz === null) {
       this.raiz = nodo;
       return nodo;
    }
    //
    const dondeInserto = function (arbolRaiz) {
       if (nodo.value < puntero.value) {
          if (arbolRaiz.hijoIzq)
             this.insert(nodo, arbolRaiz.hijoIzq);
          arbolRaiz.hijoIzq = nodo;
          return;
       }
       else {
          if (arbolRaiz.hijoDer)
             this.insert(nodo, arbolRaiz.hijoDer);
          arbolRaiz.hijoDer = nodo;
          return;
       }
    }
 
    dondeInserto(this.raiz);
    this.cantidadNodos++;
    return nodo;
 }
 
 
 //contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
 BinarySearchTree.prototype.contains = function (value) {
    if (!this.raiz) return false;
    let arbolRaiz = this.raiz;
 
    const buscar = function (arbolRaiz) {
       if (!arbolRaiz) return false;
       if (arbolRaiz.value === value) return true;
       if (buscar(arbolRaiz.hijoIzq)) return true;
       if (buscar(arbolRaiz.hijoDer)) return true;
 
    }
    return buscar(arbolRaiz);
 }
 
 
 BinarySearchTree.prototype.size = function () {
    return this.cantidadNodos;
 }
 
 BinarySearchTree.prototype.depthFirstForEach = function (order = "in-order") {
    const post = function (raizArbol) {
       if (raizArbol === null) return;
       post(raizArbol.hijoIzq);
       post(raizArbol.hijoDer);
       console.log(raizArbol.value);
    }
 
    const pre = function (raizArbol) {
       if (raizArbol === null) return;
       console.log(raizArbol.value);
       pre(raizArbol.hijoIzq);
       pre(raizArbol.hijoDer);
 
    }
    const iin = function (raizArbol) {
       if (raizArbol === null) return;
 
       iin(raizArbol.hijoIzq);
       console.log(raizArbol.value);
       iin(raizArbol.hijoDer);
 
    }
 
    if(this.raiz===null)return;
 
    switch (order) {
       case "post-order": post(this.raiz)
          break;
       case "pre-order": pre(this.raiz)
          break;
       case "in-order": iin(this.raiz);
          break;
    }
 
 
 }
 
 
 BinarySearchTree.prototype.breadthFirstForEach=function(){
    
 }*/