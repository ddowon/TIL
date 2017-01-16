# 수박수박수박수박수박수? by.helloworld
              

###Quiz
water_melon함수는 정수 n을 매개변수로 입력받습니다.  
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록  
함수를 완성하세요.  
예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴하면 됩니다.  
                     

내가 풀이한 답!
```js
function waterMelon(n){
  var result = "수박";
    result = result.repeat(n-1).substring(0,n);
    return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
```

반복문을 이용하여 삼각형을 출력하는 문제에서 공부한 `repeat` 메소드를 이용해 보았다.  
                   
>str.substring(indexStart[, indexEnd])
                
repeat 메소드를 이용하여 "수박" 문자열이 계속 반복되게 하고,  
substring 메소드를 이용하여 원하는 위치까지만 문자열이 출력되도록 하였다.  
                        
---
다른사람의 풀이를 참고해보자~
```js
function waterMelon(n){
  var result = ""
  for(var i=0; i<n; i++){ (i%2==0) ? result+="수" : result+="박" }
  return result;
}
```

for문을 이용한 코드가 제일 많았다.  

