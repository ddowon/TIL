#2016년 by.helloworld

###QUIZ
2016년 1월 1일은 금요일입니다. 2016년 A월 B일은 무슨 요일일까요?     
두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요.   
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 를 출력해주면 됩니다.   
예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다.  

-----

내가 쓴 답!
```js
function getDayName(a,b){

    var day = new Date('2016-'+a+'-'+b).getDay();
  if( day == 0 ){ day = "SUN"; }
  else if( day == 1 ){ day = "MON"; }
  else if( day == 2 ){ day = "TUE"; }
  else if( day == 3 ){ day = "WED"; }
  else if( day == 4 ){ day = "THU"; }
  else if( day == 5 ){ day = "FRI"; }
  else if( day == 6 ){ day = "SAT"; }
    return day;
}

```
Date()를 이용해 2016년은 고정값으로 두고 월과 일을 변수 a, b로 받아  
요일값을 가져옴  
요일은 일~토가 숫자 0~6으로 표현되기 때문에  
요일이 문자값으로 출력이 되도록 if문을 이용하여 조건을 달아줌  

-----
       
다른사람이 쓴 답! 
```js
function getDayName(a,b){

  var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');

  var today = new Date('2016-' + a + '-' + b).getDay();
  var answer = week[today];

  return answer;
}
```
일단 방법 자체는 나와 같지만 요일을 if문으로 하나하나 문자값으로 바꿔준게 아니라  
배열을 이용한 것을 볼 수 있다  

