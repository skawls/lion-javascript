/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
  };
  
  
  // 객체의 속성(property) 포함 여부 확인 방법
  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
  
  Object.prototype.nickName = 'tiger';
  
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신(Own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  
  // for ~ in 문

  const key = 'hasOwnProperty';


console.log(Object.prototype.hasOwnProperty.call(javaScript,key));


for(let key in javaScript){

if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    // if (({}).hasOwnProperty.call(javaScript,key)) 똑같은거임

    console.log(key);
}
   
}


  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?

const tens = [10,100,1000,10000];

for(let key in tens){
    console.log(tens[key]);

}

//for...in 객채를 순환하는 용도로 사용이 가능함.
//배열은..좀..그렇다..for...in은 객체에 양보하세요
