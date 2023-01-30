'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length<=1 ) return array;
  let pivote=0;
  let derecha=[];
  let izquierda=[];
  
  for(let i=1;i<array.length;i++){
    
        if(array[i]<=array[pivote])
          derecha.push(array[i])
        else izquierda.push(array[i])  
  
}
  let retDer=quickSort(derecha);
  retDer.push(array[pivote]);
 // quickSort(izquierda); 
  retDer=retDer.concat(quickSort(izquierda));
return retDer;
  
  }
  



function mergeSort(array=[]) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  if(array.length<=1)return array;
  
  let i=Math.floor(array.length/2);

  const arr1=mergeSort(array.slice(i));
  const arr2=mergeSort(array.slice(0,i));
 
  let j=0;
  i=0;   
  let arr=[]; //el arr q voy a retornar
  while(i<arr1.length && j<arr2.length){
     if(arr1[i]<arr2[j]){
        arr.push(arr1[i]);i++;
     }
     else{
      arr.push(arr2[j]);
      j++;
     }
  }

  if(j===arr2.length){
    arr=arr.concat(arr1.slice(i,arr1.length));
  }
  else arr=arr.concat(arr2.slice(j,arr2.length));
  
  return arr;//  arr concatenado con el izq  y conc derecha

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
