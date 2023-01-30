



function BinarySearchTree(value=undefined) {
    this.value=value ;
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

//////////////////////////////////////////////////////////////////
//////                   contains
//////////////////////////////////////////////////////////////////
BinarySearchTree.prototype.contains = function (value) {
    if (this.value===undefined) {
        console.log("a ver si entro por aca",value);
        return false
    };
 
 
    const buscar = function (arbol) {
       if (!arbol)return false;
       if (arbol.value === value) return true;
       if(value< arbol.value)
          return buscar(arbol.left)
       else return buscar(arbol.right)
 
    }
    return buscar(this);
 }
////////////////////////////////////////////////////////////////////////
///////////////            depthFirstForEach
///////////////////////////////////////////////////////////////////////
BinarySearchTree.prototype.depthFirstForEach = function (cb,order = "in-order") {
   
    const post = function (cb,arbol) {
       if (!arbol) return ;
             post(cb,arbol.left);
             post(cb,arbol.right);
             cb(arbol.value);       
            
       
     
    }
 
    const pre = function (cb,arbol) {
       if (!arbol) return;
       
       cb(arbol.value);
      pre(cb,arbol.left);
       pre(cb,arbol.right);
       
       
    }
    const iin = function (cb,arbol) {
       if (!arbol) return;
 
       iin(cb,arbol.left);
       cb(arbol.value);
       iin(cb,arbol.right);
       
 
    }
 
    
 
    switch (order) {
       case "post-order":  post(cb,this)
                         break;
       case "pre-order": pre(cb,this)
                       break;
       case "in-order": 
                 iin(cb,this);
               
    }
 
 
 }

////////////////////////////////////////////////////////////////////////
///////////////            breadthFirstForEach
///////////////////////////////////////////////////////////////////////
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

console.log("pliss  ",obj);

        for(clave in obj){
            obj[clave].forEach(element => {
                cb(element)
            });
        }

}

 const tree=new BinarySearchTree(20);
tree.insert(15);
console.log("deberia ser 15:  ",tree.left.value);
tree.insert(25);
console.log("deberia ser 25",tree.right.value);
tree.insert(5);
console.log("debería ser 5",tree.left.left.value);
tree.insert(17);
tree.insert(21);
tree.insert(28);
tree.insert(0);
tree.insert(14);
tree.insert(50);
tree.insert(1);
tree.insert(45);
tree.insert(13);
tree.insert(12);
tree.insert(11);
console.log("debería ser 11 : ",tree.left.left.right.left.left.left.value);
tree.insert(30);
tree.insert(35);
tree.insert(33);
tree.insert(31);
tree.insert(34);
console.log("debería ser 34 : ",tree.right.right.right.left.left.right.left.right.value);

valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
console.log("*******************************************contains")
console.log("contains: ",tree.contains(15));
for(let i=0;i<valuesToInsert.length;i++){
    console.log(`contains ${valuesToInsert[i]}: `,tree.contains(valuesToInsert[i]));
}

var testArr = [];
console.log("*******************************************pre order")
console.log(testArr);
tree.depthFirstForEach( function(val){ testArr.push(val); }, 'pre-order');
console.log(testArr);

console.log("*******************************************  prueba");

var depth = [];
tree.breadthFirstForEach(function(val){ depth.push(val); });
console.log(depth);
