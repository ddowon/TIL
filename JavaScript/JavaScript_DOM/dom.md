##JAVASCRIPT DOM

####DOM(Document object Model)
 : 문서의 요소들 간 관계도

- 노드 ?
- 요소노드(Element Node)
- 속성노드(Attribute Node)
- 텍스트노드(Text Node)
- 기타 등등


변수란?  
특정한 값을 저장할 수 있는 공간
```javascript
var 변수명;  //변수 선언, 값을 꼭 저장하지 않아도 됨
var I = dowon;  //변수에 특정 값을 저장할 수도 있음
```
  
  javascript에는 내장되어있는 내장메소드가 존재  
      -> 별도로 메소드를 정의하지 않고 사용 가능  
  ex) 위의 변수에 `I.indexOf("w")`를 콘솔에 치면 2이라는 값이 나온다  
                                            (indexOf 값 시작은 0)  
  
객체란?  
property또는 함수(메소드)를 저장할 수 있음
```javascript
var I = {
    name : dowon;      // property
    age : 26;
    doing : function(){
                return "Eat dinner";
            }         // Method
}
```
 객체 안에 함수가 정의 되어있으면 그 함수는 메소드라고 한다!! (여기서 doing은 메소드)
  
 ```html
<!DOCTYPE html>
<head>
    <title>Document</title>
</head>
<body>
    <div>
        <p>hello!</p>
    </div>
    <div><span>byebye~</span></div>
</body>
</html>
 ```
  
document.getElementsByTagName('div')  
: document 객체 내의 div라는 이름를 가진 요소들을 모두 찾음  
  
document.getElementsByTagName('div')[0]  
: 찾아온 div 요소들 중 가장 첫번째 div 를 가리킴 (배열은 0부터 시작)  
  
---

-firstChild
-parentNode
-nextSibling, prevSibling
-nodeValue




