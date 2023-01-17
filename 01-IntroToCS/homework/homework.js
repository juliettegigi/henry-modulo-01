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
   if(num===0)
      return '';  
   let resto=num%2;
   return(DecimalABinario(Math.floor(num/2))+resto)
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
