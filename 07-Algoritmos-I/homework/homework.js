'use strict'
// No cambies los nombres de las funciones.


function factorear(num) {
 
  const esPrimo = function (j) {
    if(j===1)return true;
    let i = 2;
    for (i; j % i; i++) { }
    return j === i;

  }
  const proximoPrimo = function (j) {
    for (j = j + 1; !esPrimo(j); j++) { }
    return j;
  }

  const primos = [2, 3, 5, 7, 11];//37, 41, 43, 47, 53, 59, 61, 67
if(num===1)
   return [1];

 
 let i = 0;
 for (i; num % primos[i]; i++){}
 let arr=factorear(num/primos[i]);
 arr.push(primos[i]);
 selectionSort(arr);
 return arr;
}

function factorear2(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  const esPrimo = function (j) {
    let i = 2;
    for (i; j % i; i++) { }
    return j === i;

  }
  const proximoPrimo = function (j) {
    for (j = j + 1; !esPrimo(j); j++) { }
    return j;
  }

  const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];//37, 41, 43, 47, 53, 59, 61, 67
  const arr = [1];
  if (num === 1) return arr;
  do {
    let i = 0;
    
    for (i; num % primos[i]; i++) {
      if (i === primos.length - 1)
        primos.push(proximoPrimo(primos[i]));

    }

    arr.push(primos[i]);
    num = num / primos[i];
  } while (num !== 1);
  selectionSort(arr);
  return arr;
}



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap=true;
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap=false;
      }
    }
    if(swap)break;
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let j = 1; j < array.length; j++) {
    let aux = array[j];
    let i=j-1;
    for ( i;j>0 && array[i] > aux; i--) {
      array[i + 1] = array[i];
    }
   array[i + 1] = aux;// if(i+1!==j)
  }

return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:


  for (let j = 0; j < array.length; j++) {
    let minIndex = j;
    for (let i = j + 1; i < array.length; i++) {//busco el min
      if (array[i] < array[minIndex]) 
        minIndex = i;
      
    }
  
    if (minIndex !== j) {
      let min= array[minIndex];
      array[minIndex] = array[j];
      array[j] = min;
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
