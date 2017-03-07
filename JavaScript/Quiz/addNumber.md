#두 정수 사이의 합 구하기

###Quiz
adder함수는 정수 a, b를 매개변수로 입력받습니다.     
두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요.     a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.    
예를들어 a가 3, b가 5이면 12를 리턴하면 됩니다.    

a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.

---

내가 풀이한 답!
```javascript
function adder(a, b){
    var result = 0;
    var i,j;
    if(a<b){
      i=a, j=b;
    } else{ i=b, j=a };
    for(var i;i<=j;i++){
    result += i;
    }
    return result;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(5, 3) )
```
입력하는 숫자에 대소가 정해져 있지 않기때문에 if문을 이용하여     
더 작은 수를 변수 i에, 큰 수를 j 변수에 넣어주었다.  

---
다른사람이 풀이한 답!
```javascript
function adder(a, b, result = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++){
      result += i;
    }
  return s;
}
```
Math 메소드를 이용하여 a,b 중 더 작은 수를 변수 i에,     
더 큰 수를 변수 j에 설정해준 것을 볼 수 있다. 
