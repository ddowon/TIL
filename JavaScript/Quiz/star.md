# 삼각형 출력하기  by.helloworld


###Quiz 
printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.  
다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는  
printTriangle 메소드를 완성하세요.  
printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다.  

            
내가 풀이한 답!
```js
function printTriangle(num) {
  var star ="";
  for( var i=0; i<num; i++ ) {
    for( var j=0; j<i+1; j++ ) {
        star +="*";
    }
     star +="\n"
  }
  return star;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );
```
                
\n 은 줄바꿈을 하는 코드!  
처음에 이게 무엇인지 정확히 몰라서 줄바꿈을 하는데 `document.write(<br>);` 을  쓰려고 하지만, 코드실행이 잘 되지 않았다.
                   
개행문자 \n을 씀으로써 코드가 제대로 실행되었다.  
                
              
반대로 역삼각형이 출력되는 코드도 작성해 보았다.
```js
function printTriangle(num) {
  var star ="";
  for( var i=num; i>0; i-- ) {
    for( var j=0; j<i; j++ ) {
        star +="*";
    }
     star +="\n"
  }
  return star;
}
```
                      

---
다른 사람의 답을 참고해보자~
```js
function printTriangle(num) {
  var result = '';
  for(var i = 1 ; i < num+1; i++) {
    result += "*".repeat(i) + "\n";
  }
  return result
}
```
              
repaet 함수를 사용하여 i 만큼 *이 반복되게 하였다. 
                
>resultString = str.repeat(count);  
이 방법은 ECMAScript 2015 사양에 추가되었다.   
아직 모든 자바 스크립트 구현에서 사용하지 못할 수 있다.