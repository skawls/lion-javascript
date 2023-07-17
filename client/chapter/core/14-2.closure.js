function earth(){
  
    let water = true;
    let apple = {
      founder:'Steve Jobs',
      ceo:'Tim Cook',
      product: ['iphone','macbook','macStudio','appleWatch']
    }
    let gravity = 10;
  
    return function (value){
      // console.log( apple );
      gravity = value;
      
    }
  
  
    // return tiger
  
  }
  
  
  
  const ufo = earth()
  
  
  
  ufo(5)