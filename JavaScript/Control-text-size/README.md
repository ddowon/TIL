
`.font-size-change` 클래스에 `display:flex` 속성 사용  
그런데 `button` Element 에는 적용이 안되기 때문에  
`div` Element로 묶어줌  
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
버튼이 의미하는 바를 정확하게 파악하기 힘드므로  
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