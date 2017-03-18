#괄호 확인하기

###Quiz
is_pair함수는 문자열 s를 매개변수로 입력받습니다.  
s에 괄호가 알맞게 짝지어져 있으면 True를 아니면 False를   
리턴하는 함수를 완성하세요.      
예를들어 s가 "(hello)()"면 True이고, ")("이면 False입니다.    
s가 빈 문자열("")인 경우는 없습니다.   

---

내가 풀이한 답!
```javascript
function is_pair(s){
  var a = s.match(/\(/g).length;
  var b = s.match(/\)/g).length;
  if((a == b) 
	  && (s.indexOf("(")<s.indexOf(")") 
	  && (s.lastIndexOf("(")<s.lastIndexOf(")")) ){ return true; }
  return false;
}
```

매개변수로 받은 s 문자열에서 "(" 와 ")"의 개수가 같은 지 일단 확인 후에     
가장 첫번째로 오는 괄호가 어떤것인지 "("  ")" 의 indexOf 메소드를 이용하여 확인,    
그리고 마지막으로 오는 괄호가 어떤것인지 lastIndexOf 메소드를 이용하여 확인    

조건이 모두 충족하면 결과값을 true로 return 하고,    
하나라도 충족되지 않으면 false로 return 하도록 작성    


----
하지만 처음 문제 정답을 제출했을 때, 오류가 났던 것으로 보아    
문제 출제자가 원했던 답은 "(())" 이런모양도 허용하는 것이 아니라  
"()()" 이렇게 짝을 짓는 것 만을 원했던 것 같음  
아직 어떻게 작성해야할지 감이 오지 않는 상태...   
코드 refactoring이 필요함