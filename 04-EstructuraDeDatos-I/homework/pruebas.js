function sumar(num, tot = 0) {
    // si mi número es menor igual `0` dejo de contar y retorno el total
    if(num <= 0) return tot;

    // si no sumo el número actual al total
    tot += num;
    

    // y finalmente realizo una nueva invocación
    return sumar(num-1, tot);
  }

  
  console.log(sumar(8));