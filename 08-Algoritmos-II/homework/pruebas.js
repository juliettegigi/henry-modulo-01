//  const array=[2,8]
//   let i=Math.floor(array.length/2);

//   const arr1=array.splice(i,array.length);
//   const arr2=array;

//   console.log(arr1);
//   console.log(array);


const arr=[2];
const arr1=[8];
let i=0;
arr.concat([8]);
console.log(arr);














/*



function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    
    if(array.length===1 || array.length===0) return array;
    let pivote=Math.floor(array.length/2);
    let derecha=[];
    let izquierda=[];
    
    for(let i=0;i<array.length;i++){
      if(i!==pivote){
          if(array[i]<=array[pivote])
            derecha.push(array[i])
          else izquierda.push(array[i])  
    }
  }
    let retDer=quickSort(derecha);
    retDer.push(array[pivote]);
   // quickSort(izquierda); 
    retDer=retDer.concat(quickSort(izquierda));
  return retDer;
    
    }

    */