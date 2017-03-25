#약수의 합 by.helloworld

###Quiz
어떤 수를 입력받아 그 수의 약수를 모두 더한 수 sumDivisor 함수를 완성해 보세요.    
예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고,   
총 합은 28이 되므로 28을 반환해 주면 됩니다.  


---

내가 풀이한 답!
```js
function sumDivisor(num) {
    var answer = 0;
     for(var i=1; i<=num; i++ ){
       if(num%i == 0){
         answer+= i;
       }
     }
    return answer;
}
```

if문을 사용하여 매개변수(num)를 나누었을 때 나머지가 0인 값을 찾고   
조건에 맞을 경우 값을 더해줌  
for문을 이용하여 매개변수를 나누는 값을 1부터 num까지 반복!  


----  
이문제는 대부분의 사람들이 같은 방법으로 풀었다!

