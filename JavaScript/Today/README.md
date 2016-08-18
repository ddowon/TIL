## 요일 구하기!


new Date() 함수를 이용하면 오늘 날짜를 구할 수 있음  
(날짜값은 사용자의 컴퓨터 정보값을 가져오는 것이기 때문에,  
사용자의 설정값에 따라 정확하지 않을 수 있음)
```js
var today = new Date()
```

new Date()함수로 가져온 오늘 날짜에  
getDay() 함수를 사용하면 오늘 요일을 알 수 있음  
```js
var today_is = today.getDay()
```

위의 두 변수를 한번에 쓴다면!  
```js
var today = (new Date()).getDay();
```
조금 더 명시적으로 보여주기 위해 'new Date()' 를 ( ) 로 감싸줌  



```js
    var today_date = (new Date()).getDay();
    console.log(today_date);
    today_date === 0 || 6 ? console.log("주말!") : console.log("주중!");
```
실행을 하면 console 에 "주말!" 값이 나옴  
이유는  
`today_date === 0 || 6` 가 today 값이 0 또는 6 인가? 라고 묻는게 아니라  
`(today_date === 0) || 6`   today 값이 0 인가? 와 그냥 숫자 6 인가?를 묻는 것!  
 숫자 6 은 true 값이 때문에 if 문은 "주말!" 값을 내놓음~  

```js
    var today_date = new Date().getDay();
    console.log(today_date);
    today_date === 0 || today_date === 6 ? console.log("주말!") : console.log("주중!");
```

이렇게 고쳐줍니다~