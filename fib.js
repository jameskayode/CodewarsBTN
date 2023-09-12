function productFib(prod){
    let first = 0,
        second = 1;
    
    while(first * second < prod){
      second = second + first
      first = second - first
    }
    return [first, second, first * second === prod]
  }
 console.log(productFib(800)) 
  