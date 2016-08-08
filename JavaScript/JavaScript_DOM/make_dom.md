##DOM 만들기

###DOM API를 사용하여 문서 객체를 동적으로 생성해보자!

`<div>` Element 안에 text를 넣어보자!  
`createElement` 메소드를 이용하여 `<div>`를 생성하고,  
`createTextNode` 메소드를 이용하여 텍스트 생성.  
```js
//<div>this is div</div>
var maked_division = document.createElement('div');
var maked_division_text = document.createTextNode('this is division');

console.log('div:', maked_division);
console.log('div_text:',maked_division_text);
```
콘솔에 결과 값을 찍어보면, 각각의 요소들이 생성된 것을 확인할 수 있다.  
  
  
같은 방법으로 `<ul>` element 도 생성해보자!
```js
//<ul><li>list item</li></ul>
var maked_ul = document.createElement('ul');
var maked_ul_li = document.createElement('li');
var maked_ul_li_text = document.createTextNode('list item');

console.log('ul:', maked_ul);
console.log('ul>li:',maked_ul_li);
console.log('ul>li_text:',maked_ul_li_text);
```
  
  
###DOM API를 사용하여 문서 객체를 동적으로 조작해보자!
  
위에서 만든 `<div>`와 text.  
appendChild 메소드를 이용하여 `<div>` 안에 text 삽입.  
콘솔 결과값으로 '<div>this is division</div>' 이 반환된다.  
(append의 뜻은 '덧붙이다'로,  
  appendChild는 요소의 가장 마지막 부분에 생성된다.(::after 위치!))
```js
maked_division.appendChild(maked_division_text);
console.log(maked_division);
```
  
  
역시 같은 방법으로 위에서 만든 `<ul>`,`<li>`,text를 묶어 보자! 
```js
maked_ul.appendChild(maked_ul_li);
maked_ul_li.appendChild(maked_ul_li_text);
console.log(maked_ul);
```
  아주아주 잘 만들어진다~  
  
####목적지에 해당하는 요소를 직접 생성한 다음에 문서에 붙여보자!

  
setAttribute 메소드를 이용하여 'id=target-container' 생성.
```js
var target_container = document.createElement('div');
// setAttribute(attribute, value);
// id를 추가해보자!
target_container.setAttribute('id','target-container');
target_container.appendChild(maked_ul);
document.body.appendChild(target_container);
```
     
prependChild는 요소의 가장 앞부분에 생성된다. (::before 위치!)  
prependChild는 정식코드는 아니기 때문에 insertBefore를 사용.    
insertBefore를 사용하는 데는 두 가지 인자 값이 필요하다   
insertBefore(tagname, target)  => target 앞에 tagname 삽입  

```js
var target = document.body.firstChild;
target.parentNode.insertBefore(target_container,target);
```
      
  
이번에는!  
element 와 위치를 원하는 곳에 자유롭게 사용 가능 한 함수를 만들어보자!  
```js
function prependChild(tag, classname){
    var tagname = document.createElement(tag);
    var target  = document.body.querySelector(classname);
    return target.parentNode.insertBefore(tagname, target); 
}
```
```js
prependChild('div','.hello');
```
이런식으로 함수 실행!  
`.hello` 라는 클래스의 부모 노드를 찾아 자식 요소중 가장 앞부분에 생성이 된다.  
    

----
   
짧은 코드이지만 짜는데 두시간이나 걸렸다. 다음엔 더 빨리 짤 수 있겠지  
더 좋은 코드가 없을까?  
     
insertBefore() 메소드에는 parentNode 객체가 필요하기 때문에  
부모노드를 찾는 코드를 작성 했지만, classname을 바로 찾아  
해당 요소의 첫번째 자식 부분 앞에 원하는 코드를 삽입 할 수 있는 방법을  
생각해 봐야겠다 ----> (고민해야 할 숙제!)  

