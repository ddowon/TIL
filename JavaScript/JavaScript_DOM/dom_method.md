##DOM Method 정리

 - getElementById()
 - getElementsByTagName()
 - getELementsByClassName()
 - createElement()
 - createTextNode()
 - setAttribute()
 - getAttribute()
 - querySelector()
 - querySelectorAll()
 - removeChild()
 - appendChild()
 - insertBefore()
 - CloneNode()
 - replaceChild()

-----

####getElementById()
```js
document.getElementById('id');
```

####getElementsByTagName()
```js
document.getElementsByTagName('tagname');
```

####getElementsClassName()
```js
document.getElementsByClassName('classname');
```

####querySelector()
```js
document.querySelector('selector_name');
```

####querySelectorAll()
```js
document.querySelectorAll('selector_name');
```

####createElement()
```js
document.createElement('tag');
```

####createTextNode()
```js
document.createTextNode('text');
```

####setAttribute()
```js
element.setAttribute(name, value);
```
```js
var name = document.querySelector('selector_name');
selector_name.setAttribute('attribute','value');
```

####getAttribute()
```js
element.getAttribute(name, value);
```
```js
var name = document.querySelector('selector_name');
selector_name.getAttribute(attribute);
```

####appendChild()
```js
element.appendChild(child_name);
```
```js
var child_name = document.createElement("tagname");
document.body.appendChild(child_name);
//또는
target_node.appendChild(child_name);
```

####insertBefore()
```js
parentNode.insertBefore('child_node','target_node');
```

####removeChild()
```js
document.getElementsByTagName('tagname');
```

####CloneNode()
```js
document.getElementsByTagName('tagname');
```

####replaceChild()
```js
document.getElementsByTagName('tagname');
```
