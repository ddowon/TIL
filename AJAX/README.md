##AJAX

##ajax-basic

###XMLHttpRequest
 - Ajax 통신을 위한 실제 JS 객체

```js
(function(global, XHR){
    'use strict';

})(this, this.XMLHttpRequest);
```


```html
<button type="button" class="ajax-btn">!!EVENT!!</button>
<p class="ajax-call"></p>
```

먼저, 탐색을 통해 `<button>`과 데이터를 담을 `<p>` 태그를 변수에 담아줌 
```js
var result_view = document.querySelector('.ajax-result');
var call_ajax_btn = document.querySelector('.call-ajax-data-btn');
```

XMLHttpRequest 생성자 함수를 통해 비동기 통신을 수행할 객체 생성
```js
var xhr = new XHR;
```
생성자 함수를 변수에 담아 줌으로써, 여러 개의 객체 생성 가능!
```js
var createXHR = function(){
    return new XHR;
}
var xhr1 = createXHR();
var xhr2 = createXHR();
```

```js
xhr.open();
xhr.send();
```

 마지막 인자 값이 false 라면 동기 통신!  => Deprecated!!  
 마지막 인자 값이 true 또는 생략하면 비동기 통신!  
```js
xhr.open('GET', '데이터경로', false);  // => 동기 통신 (이제 쓰지 않음!)
xhr.open('GET', '데이터경로', true);   // => 비동기 통신 (생략 가능)
```

             
통신상태 확인하기!  
xhr.status가 200 이면 데이터를 불러온 것
xhr.readystate 값이 4이면 데이터 전송 완료 상태!
```js
if (xhr.status = 200){
    result_view.textContent = xhr.response;
    // 가져오는 데이터가 html 파일일 경우 
    // result_view.innerHTML = xhr.response; 로 써주어야 화면에 HTML문서로 보임 
} else {
    result_view.textContent = '데이터 로드 실패';
}
```

동기 통신일 경우는 데이터가 로드될 때까지 기다림  
비동기 통신일 경우는 위의 코드↑ 가 바로 해석됨  
               
그렇기 때문에 동기 통신 객체에 이벤트 핸들러 바인딩
(xhr.readystate 값이 4이면 데이터 전송 완료 상태!)    
```js
 xhr.onreadystatechange = function(){
        if (this.status === 200 && this.readyState === 4){
            result_view.textContent = xhr.response;
        } else {
            result_view.textContent = '데이터 로드 실패';
        }
    }
    function updateViewPlace(){
        xhr.send()
    }
```


-------

 - 서버환경 만들기? 
    - ( $http-server -o -a localhost -p 8081)