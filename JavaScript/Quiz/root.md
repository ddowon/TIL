# 정수 제곱근 판별하기 by.helloworld
 

###Quiz
nextSqaure함수는 정수 n을 매개변수로 입력받습니다.  
n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이  아니라면 'no'을 리턴하는 함수를 완성하세요.  
예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고,   3이라면 'no'을 리턴하면 됩니다.   

                 
내가 풀이한 답!
```js
function nextSqaure(n){
    var sqrt = Math.sqrt(n);
  console.log(sqrt);
  // if(sqrt === parseInt(sqrt)) {
  //        return Math.pow(sqrt + 1, 2)
  // } else {
  //        return "no";
  // }
  return sqrt === parseInt(sqrt)? Math.pow(sqrt + 1, 2): "no";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
```


> Math.sqrt( num );
Math.sqrt 메소드를 이용하여 쉽게 정수의 제곱근 값을 구할 수 있다  
                  
> Math.pow(base, exponent);
Math.pow 메소드를 이용하여 제곱수를 구할 수 있다  
'base'의 'exponent'제곱  (ex - Math.pow(2,3) 은 2의 3제곱);

if문 삼항식을 이용하여 값을 반환하고 싶었지만, error 가 떴다
```js
function nextSqaure(n){
    var sqrt = Math.sqrt(n);
    sqrt === parseInt(sqrt)? return Math.pow(sqrt + 1, 2): return "no";
}
```
return 위치를 잘못 잡았기 때문....!
                
---
다른 사람의 답을 참고해보자~
```js
function nextSqaure(n){
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return "no"
  }
}
```

항상 if문을 써야한다는 편견을 버려야겠다  
다음 문제 풀 때는 for, switch, while 등 다양한 문법과 친해져야겠다  