##make_dom.md 파일에서 작성한 코드를 refactoring 해보자!

element를 원하는 곳에 삽입할 수 있는 prependChild 함수를 만들어보자!  
아래 코드가 저번에 작성한 코드!  
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

일단, tag를 새로 생성하는 것이 아니라 이미 만든 코드를 삽입하는 코드로 수정!
```js
function prependChild(child, selector){
    // 이때 target은 내가 삽입하고자, 미리 만들어둔 Element
    var target = document.body.querySelector(selector);
    return target.parentNode.insertBefore(child, target); 
}
prependChild('make_div', '.hello');
```

------

####여기서부터는 강사님께서 짜신 코드!

방법 1. 표준 DOM API 방법인 insertBefore() 메소드를 활용  
insertBefore() 사용 방법~
앞에 부모노드를 붙이고,  (parentNode.insertBefore())
인자 값으로 insertBefore(삽입하고자 하는 노드, 삽입하고자하는 위치바로 뒤에있는 노드)

```js
target_node.parentNode.insertBefore(insert_node, target_node);
var script_in_body = document.body.querySelector('script');
script_parent.insertBefore(make_div, script_in_body);
```
  
넣고자하는 부모노드의 첫번째 자식을 찾아 그 앞에 삽입하는 코드 
```js
function prependChild(parent_node, child_node) {
    parent_node.insertBefore(child_node, parent_node.firstChild);
}
```

방법 2. 사용자 정의(custom) 헬퍼 함수 prependChild()를 활용
```js 
var body = document.body;
function prependChild(parent_node, child_node) {
 parent_node.insertBefore(child_node, parent_node.firstChild);
}
prependChild(body, make_div);
```

insertAfter() : 특정 노드 뒤에 삽입하는 헬퍼 함수
```js
function insertAfter(insert_node, target_node) {
 target_node.appendChild(insert_node);
}
insertAfter(make_div, body);
```
