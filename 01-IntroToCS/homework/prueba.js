/*
Escribe una función que reciba por parámetro un número en base decimal y retorne el mismo número en base binaria. El valor retornado debe ser de tipo string. Por ejemplo:

```javascript
DecimalABinario(8); // debe retornar '1000'
``` */


function DecimalABinario(num) {
    if(num===0)
       return '';  
    let resto=num%2;
    return(DecimalABinario(Math.floor(num/2))+resto)
 }
 /////////////////////////////////////////
function DecimalABinario(num) {
    let retorno='';
    while(num!==0){
       let resto=num%2;
       num=Math.floor(num/2);
       retorno=resto +retorno;     
    }
   return(retorno)
 }
 ///////////////////////////////
 function DecimalABinario(num) {
   let total=0;
   let i=Math.floor(num/2);
   for (let j=0;j<=i;j++){
      let resto=num%2;
      num=Math.floor(num/2);
     if(resto===1)
        total+=Math.pow(10,j);    
   }   
   return(String(total))
}


 'use strict';

/*Declara una función que reciba por parámetro un número en formato string en base binaria y retorne el mismo número en base decimal. El valor retornado debe ser de tipo number. Por ejemplo: */
function BinarioADecimal(num) {
   let total=0;
   const n=num.length-1;
   for(let i=n;i>=0;i--){
      if(num.charAt(Math.abs(i-n))==='1')
         total+=Math.pow(2,i);
   }

   return total;
}

function DecimalABinario(num) {
   let total=0;
   let i=Math.floor(num/2);
   
  for (let j=0;j<=i;j++){
      let resto=num%2;
      num=Math.floor(num/2);
     if(resto===1)
        total+=Math.pow(10,j);
      
   }
   
   return(String(total))
}