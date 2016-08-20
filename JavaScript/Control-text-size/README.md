
`.font-size-change` 클래스에 `display:flex` 속성 사용  

그런데 `<button>` Element 에는 적용이 안되기 때문에  `<div>` Element로 묶어줌  
```html
<div class="font-size-change">
    <p class="font-size" contenteditable="true">16px</p>
    <div>
        <button class="decrease-btn" type="button">-</button>
    </div>
    <div>
        <button class="increase-btn" type="button">+</button>
    </div>
</div>
```


접근성의 관점에서 위와 같은 코드는 스크린 리더기가 읽기에  
버튼이 의미하는 바를 정확하게 파악하기 힘드므로,  
`<span>`으로 버튼의 의미를 정확하게 명시해줌   
```html
    <div>
        <button class="decrease-btn" type="button"><span>글자 크기 키우기</span></button>
    </div>
```
    
      
아래코드도 마찬가지로! 버튼의 의미를 정확하게 써줌
```html
<div class="bg-change">
    <button class="white-btn" type="button">A</button>
    <button class="gray-btn" type="button">A</button>
</div>
```
↓
```html
<div class="bg-change">
    <button class="white-btn" type="button"><span>화면 어둡게 하기</span></button>
</div>
```


↑ 위에서는 스크린 리더기가 읽을 컨텐츠를 작성한 후,  
텍스트를 text-indent 로 감춰주는 방법을 이용하였는데,  
aria-label을 이용하는 코드로 수정  
(aria-label은 IE9 이상에서 지원)
```html
<div class="font-size-change">
    <input class="font-size" type="text" value="16px">
    <div>
        <button class="decrease-btn" type="button" aria-label="글자 크기 줄이기" ></button>
    </div>
    <div>
        <button class="increase-btn" type="button" aria-label="글자 크기 키우기"></button>
</div>
```

---

###바뀐 폰트사이즈를 `<input>` 의 value 값에 넣어주기!

처음에 아래와 같이 cur_value 라는 변수에 input의 value 값을 넣어줌  
그러나 console에 찍어 본 결과,  
cur_value의 값은 변하지만 내가 원했던 input의 value값은 변하지 않음
```js
    var show_font = query('.font-size');
    var cur_value = show_font.value;
    console.log(cur_value);

    textarea.style.fontSize = cur_value = _current_text + 'px';
    console.log(cur_value);
```

     
input의 value 값을 변수에 넣어주는 것 대신에  
직접 코드에 대입하였더니, 정상적으로 작동함  
         

```js
    var show_font = query('.font-size');
    // var cur_value = show_font.value;
    // console.log(show_font.value);
    
    textarea.style.fontSize = show_font.value = _current_text + 'px';
    console.log(show_font.value);
```

----

###html 상의 `<input>` 창에서 값 변경 시, text에 적용되게 하기!

 - onKeyUp  : 키보드의 키를 눌렀다고 놓은 상태
 - onChange : 객체의 선택된 내용이 바뀌는 상태  
               
current_value 라는 변수를 선언!  
그 안에 this(이벤트가 발생한 때의 input)의 value 값을 할당한 후,  
textarea의 fontSize 에 넣어줌!
```js
var show_font = query('.font-size');
show_font.onkeyup = show_font.onchange = function() {
    var current_value = this.value;
    textarea.style.fontSize = current_value;
};
```

----

### 

처음에는 fontSize 변경을 if문 하나를 가지고 해결하려고 시도! 
`<button>`의 textnode 값이 '+' 가 아닐 경우,  
change_size가 -1 이 되어  
원래의 fontSize 에 -1 일 더해 주는 것을 원함  
그러나 원하는 코드가 나오지 않음   


```js
if( operator !== "+" ) {
    change_size = change_size * -1 
}
```

이 코드가 안되는 이유!!!!  
                    
operator의 값이 "+" 가 아닐경우,  
change_size에 -1 을 곱한 값을 넣어서   
change_size의 값이 -1 이 되게 하려했지만,  
같은 함수가 한번 더 반복 될 시엔  
change_size에 -1 값이 저장되어있는 상태에서 다시 -1을 곱해주게 됨..!
  



-----

 - background color 변하는 부분 클릭시 font-color 변경은 어떻게? 
