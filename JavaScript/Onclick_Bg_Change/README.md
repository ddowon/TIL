##버튼을 클릭했을 때 `<body>`의 배경색이 변하는 event!
  
먼저 `<body>` 요소를 변수에 대입
```javascript
var body = document.getElementsByTagName('body')[0];
// var body = document.body 라고 해도 무방!
```
  
document.getElementsByTagName은  
html 문서에서 해당 태그이름을 가진 객체(태그)의 배열을 반환한다  
  
`<button>` 이라는 Tagname 을 찾아  
첫번째 버튼은 blue_btn 이라는 변수에 넣고  
두번째 버튼은 red_btn 이라는 변수에 넣어준다  
  
버튼을 클릭하는 이벤트 발생 시, 배경 이미지 색상이 변하는 함수 실행
```javascript
var blue_btn = document.getElementsByTagName('button')[0];
var red_btn = document.getElementsByTagName('button')[1];

blue_btn.onclick = function(){
    body.style.backgroundColor = 'lightblue'; 
                             //  값은 '' or ""를 이용하여 문자열로 묶어줌!
}
red_btn.onclick = function(){
    body.style.backgroundColor = "lightpink";
}
```
  
---
  
####클릭 이벤트 발생 시, 요소 안에 있는 Text(Hex Code)를 읽어 `<body>`의 배경 이미지 색 변경 하기 !  

```html
<div id="btn_group2" role="group">
    <button type="button">#f50054</button>
    <button type="button">#8800f3</button>
    <button type="button">#139df3</button>
</div>
```
  
  
먼저 'btn_group2'라는 id 를 찾아 'button_group'이라는 변수에 대입  
그리고 'button_group'에 있는 `<button>` Tag 를 찾아 'btns' 변수에 대입  
  
각각의 버튼들을 인덱스 값([숫자])을 이용하여 변수에 대입
```javascript
var button_group = document.getElementById('btn_group2');
var btns = button_group.getElementsByTagName('button');

var btn_1 = btns[0]
var btn_2 = btns[1]
var btn_3 = btns[2]
```
  
  
btn_1 클릭 시, 함수 실행  
  
자바스크립트에서는 모든 요소를 노드라고 한다 (`<html>`은 루트노드)  
현재 btn_1의 첫번째 자식은 text로 "#f50054" 이다  
그 값(nodeValue)을 'change_color'라는 변수에 대입시켜 배경색으로 설정  
  
btn_2, btn_3 에서도 반복
```javascript
btn_1.onclick = function() {
 var change_color = btn_1.firstChild.nodeValue;
 body.style.backgroundColor = change_color;
}
btn_2.onclick = function() {
 var change_color = btn_2.firstChild.nodeValue;
 body.style.backgroundColor = change_color;
}
btn_3.onclick = function() {
 var change_color = btn_3.firstChild.nodeValue;
 body.style.backgroundColor = change_color;
}
```
  
반복되는 코드를 간단하게 만들자!  
함수 자체를 변수에 대입하면 나중에 변수를 불러와 함수를 실행 할 수 있다  
  
여기서 this는 이벤트를 발생시킨 객체를 가리킨다(btn_)  
this 는 더 다양하게 쓰일 수 있다 (공부해야 할 부분!)   
```javascript
var colorChange = function(){
    var change_color = this.firstChild.nodeValue;
    body.style.backgroundColor = change_color;
}
```
  
조금 더 간단하게~
```javascript
var colorChange =function(){
   body.style.backgroundColor = this.firstChild.nodeValue;
}
```
  
버튼을 클릭 하였을 때 'colorChange'함수 실행 
```javascript
btn_1.onclick = btn_2.onclick = btn_3.onclick = colorChange
```
아래와 같이 쓰는 것도 가능!
```javascript
btn_1.onclick =
btn_2.onclick =
btn_3.onclick = colorChange
```




---
#### 더 공부해야 할 부분
- 노드
- this