#스트링을 숫자로 바꾸기 by.helloworld

###Quiz
strToInt 메소드는 String형 str을 매개변수로 받습니다.  
str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요.  
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.  
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.  

               
내가 풀이한 답!
```js
function strToInt(str){
    return str * 1
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt("-1234"));
```

내가 한 코드는 약간의 편법으로 스트링에 곱하기 1을 해 Number로 바꿀 수 있다.  
                              
MDN에서 찾아본 결과 `parseInt()` 메소드를 이용해도 스트링을 숫자로 바꿀 수 있다.  

>parseInt(string, radix);

하지만 `parseInt()` 는 정수와 실수로 파싱해주는 메소드이기 때문에  
역시 명확한 의미는 아니다.    
              
좀 더 확실하게 명시적으로 형을 변환하는 방법은 `Number()`를 이용하는 방법!

```js
function strToInt(str){
  return Number(str);
}
```

                
반대의 경우!  
숫자를 문자로 형변환 시키고 싶은 경우에는 `String()`을 이용하면 된다.
