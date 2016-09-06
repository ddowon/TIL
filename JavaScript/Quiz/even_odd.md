#홀수, 짝수 구분하기 by.helloworld

###evenOrOdd 메소드는 int형 num을 매개변수로 받습니다.  
num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하도록 evenOrOdd에   코드를 작성해 보세요.   
num은 0이상의 정수이며, num이 음수인 경우는 없습니다.    


내가 쓴 답!

```js
function evenOrOdd(num) {
  var result = num % 2 
  if(result === 0) {
    return "Even";
  }
  return "Odd";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
```


다른 사람들의 정답을 살펴 보니,  
더 간단하게 if문 3항식으로 만들 수 있을 거 같다!
```js
function evenOrOdd(num) {
    num % 2 === 0 ? return 'Even' : return 'Odd' ;
}
```


....? 오류가 난다   

```js
function evenOrOdd(num) {
    // return num % 2 === 0 ? 'Even' : 'Odd' ;
  if(num%2 === 0) {
    return 'Even';
    } else {
        return 'Odd';
    }
}
```
이 코드를 삼항식으로 바꾼게 위의 코드라고 알고 있는데 왜 오류가 난걸까....?  


```js
function evenOrOdd(num) {
    return num % 2 === 0 ?  'Even' : 'Odd' ;
}
```
return 위치를 다시 잡으니 console 창에서 오류 없이 잘된다   

조금 더 간단하게 해보자! 이건 다른사람이 푼 답!
```js
function evenOrOdd(num) {
    return (num % 2) ?  'Odd' : 'Even' ;
}
```

0값이 false임을 이용한 if문!
자주 쓰면서 코드를 줄이는 연습을 해야겠다!