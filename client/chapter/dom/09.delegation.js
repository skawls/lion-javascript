/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a');

// buttonA.addEventListener('click',()=>{

// })


const container = getNode('.container');



function handleDelegation (e){
  
  let target = e.target;


  let li = target.closest('li');

  if(!li) return;

  let className = attr(li,'class');
  let dataName = attr(li,'data-name');

  
  if(className === 'home'){
    console.log('홈 실행!');
  }

}


container.addEventListener('click',handleDelegation)
    // console.log( target.getAttribute('class') )
    
    
    // if(target.getAttribute('class') === 'a'){
    //   console.log('A 버튼 클릭!');
    // }
  
    
    // if(target.getAttribute('class') === 'b'){
    //   console.log('B 버튼 클릭!');
    // }
  
    
    // if(target.getAttribute('class') === 'c'){
    //   console.log('C 버튼 클릭!');
    // }
  
    
    // if(target.getAttribute('class') === 'd'){
    //   console.log('D 버튼 클릭!');
    // }

  



/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */