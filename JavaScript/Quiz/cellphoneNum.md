# 핸드폰 번호 가리기 by.helloworld

###Quiz
별이는 헬로월드텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의 전화번호는 맨 뒷자리 4자리를 제외한 나머지를 "\*"으로 바꿔야 합니다.
전화번호를 문자열 s로 입력받는 hide_numbers함수를 완성해 별이를 도와주세요
예를들어 s가 "01033334444"면 "\*\*\*\*\*\*\*4444"를 리턴하고, "027778888"인 경우는 "\*\*\*\*\*8888"을 리턴하면 됩니다.

              
내가 풀이한 답!
```js
function hide_numbers(s){
  var change_str = s.substring(0, s.length-4);
  var view_str = s.substring(s.length-4, s.length);
  //console.log(typeof(change_str.length));
  //console.log(view_str);
 
    if(change_str.length == 7){
    change_str = "*******"
    } else if(change_str.length == 6){
    change_str = "******"
    };
  return change_str + view_str;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('0233334444'));
```

뒤의 숫자 4개를 제외한 숫자의 개수가 7일 때와 6일 때의 경우로 나누어 코드를 실행...
뭔가 억지로 푼듯한 느낌이 가득하다.  
코드 리펙토링이 필요하다...  
내가 원하는건 앞의 자리수가 몇개든 뒤 4자리를 제외한 모든 번호들이 \*로 표기되는 것!  


```js
function hide_numbers(s){
  var view_str = s.substring(s.length-4, s.length);

  var star = "";
  for(var i=0; i<s.length-4; i++){
     star += "*";
  }
  return star + view_str;
}
```

                 
for문을 이용하여 뒤의 숫자 4개를 재외한 횟수만큼 \*이 반복되게 짜보았다.  
                   
다른 사람의 답을 참고해보자~
```js
function hide_numbers(s){
  var num = s.slice(s.length-4, s.length);
  var hide = '*'.repeat(s.length-4);
  var result = hide + num;
  return result;
}
```

`repeat()`메소드를 이용한 것을 볼 수 있다.  
for문을 쓰는것보다 더 간단해보인다.
