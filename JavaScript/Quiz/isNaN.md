#문자열 다루기 기본 by.hellowolrd


###Quiz
alpha_string46함수는 문자열 s를 매개변수로 입력받습니다.  
s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.  
예를들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.  
                 
                 
                   
```js
function alpha_string46(s){
  var result = true; 
  if(s.length == 4 || s.length == 6){ 
        if(isNaN(s)===false){
            return result;
        }
    }
     return !result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("1145") );
```
억지로 답을 도출한 의문점이 많은 코드!     
(isNaN의 경우, 구글링으로 알아낸 메소드~ )
                      
```js
function alpha_string46(s){
  var result = true; 
  if(s.length == 4 || s.length == 6 && isNaN(s)===false){ 
        return result;
    }       
     return !result;
}
```
처음에는 ↑ 이렇게 코드를 짰다  
s의 length가 4 또는 6 이고,  
isNaN의 결과 false 면 숫자이기 때문에 and 연산자를 이용하였지만,  
정확하게 내가 생각한 결과가 나오지 않았다 
              
             
다른사람의 코드를 참고해보자!
```js
function alpha_string46(s){
  return (s.length == 4 || s.length == 6) && isNaN(s) === false;
}
```

if 문을 쓰지 않고 바로 return 으로 값을 반환하였다!  
비교연산자를 썼기 때문에 return 값은 true or false 의 값이 나오게 된다  
isNaN(s) === false는 s의 값이 숫자 일 때를 나타내므로,  
s 의 길이가 4 또는 6 이고 s가 숫자면 true, 아니면 false 값이 반환된다