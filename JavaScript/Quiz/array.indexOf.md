#서울에서 김서방 찾기

###Quiz

findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.   
seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하세요.  
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.  
----


배열의 index 값을 찾아야 하는 문제!   

>array1.indexOf(searchElement[, fromIndex])

indexOf()메소드를 이용하면 배열의 index 값을 알 수 있다

```js
function findKim(seoul){
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}
// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
```


다른 사람이 풀이한 코드를 보자!  

for 문을 이용하여 푼 것을 볼 수 있다  

```js
function findKim(seoul){
  var idx;
  for(var i=0; i<seoul.length; i++){
    if(seoul[idx] === "Kim"){
      idx = i;
    }
  }
  return "김서방은 " + idx + "에 있다";
}
```

for in 문을 사용하는 것도 가능!
```js
function findKim(seoul){
  var idx = 0;
    for(idx in seoul){
    if(seoul[idx]=='Kim') break;
  }
  return "김서방은 "+idx+"에 있다";
}
```
