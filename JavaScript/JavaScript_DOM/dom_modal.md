## button click event를 이용하여 modal창을 만들어보자!

###순서!
1. modal창 content 생성하기
2. 버튼을 클릭했을 때 modal창 생성 (이 때, 모달창 생성 후 버튼은 비활성화)
3. modal창에서 x 버튼 클릭하면 modal창 제거 (처음 버튼 활성화)

-------

####먼저 modal창에 들어갈 content를 간단히 생성해보자!
(요소를 동적으로 생성해보는 코드는 'make_dom.md 참조!' )
```js
var make_div = document.createElement('div');
var make_div_text = document.createTextNode('안녕하세요!');
make_div.appendChild(make_div_text);

var make_button = document.createElement('button');
var make_btn_text = document.createTextNode('x');
make_button.setAttribute('type','button');
make_button.appendChild(make_btn_text);

make_div.appendChild(make_button);
```

####버튼을 클릭했을 때, modal창이 뜨는 코드를 만들어보자!
```js
// 여기서 modal_btn 은 html 상에서 만든 button!
//<button class="modal_btn" type="button">클릭!</button>
var modal_btn = document.querySelector('.modal_btn'); 

modal_btn.onclick = function () {
    document.body.appendChild(make_div);
}
```

####다음으로, 생성된 modal창이 x 버튼을 클릭했을 때, 사라지도록 코딩!
```js
make_button.onclick = function () {
    make_div.parentNode.removeChild(make_div);
}
```

여기까지가 내가 짠 코드!! 

---------

####강사님께서 짠 코드는?


```js
var body            = document.body;
var exist_modal     = false;
// 모달이 존재하는가? no!(false);

function makeModal() {
  if (!exist_modal) {
    // !exist_modal 값은 true 이기 때문에 함수가 실행됨~
    var make_div = document.createElement('div');
    var make_div_text = document.createTextNode('안녕하세요!');
    make_div.setAttribute('class','modal');
    make_div.appendChild(make_div_text);

    var make_button = document.createElement('button');
    var make_btn_text = document.createTextNode('x');
    make_button.setAttribute('type','button');
    make_button.appendChild(make_btn_text);

    make_div.appendChild(make_button);
    make_button.onclick = removeModal;
    //make_button을 클릭했을 때 removeModal 함수 실행!
    
    document.body.appendChild(make_div);
    //body 안에 make_div(모달창) 삽입!

    exist_modal = !exist_modal;
    //초기에 false로 정의된 변수값 true로 변경
    this.setAttribute('disabled', true);
    //함수가 실행되었을 때, this(여기서는 make_button) 속성 disable = "true" ;
  }
}

function removeModal() {
  var make_div = document.querySelector('.modal');
// 위의 함수에서 선언한 변수는 지역변수이므로 다시 선언해주어야함
  make_div.parentNode.removeChild(make_div);
  exist_modal = !exist_modal;
  //위 함수에서 true로 정의된 변수값 false로 변경
  make_button.removeAttribute('disabled');
  //make_button의 disabled 속성을 없애줌! 
}

make_btn.onclick = makeModal;
//make_btn 버튼 클릭 시 makeModal 함수 실행 

```


------

####내가 짠 코드와 비교해보자!
 - 나는 자바스크립트로 동적으로 생성한 element와 textnode 등을 전역번수로 지정...   
    * 그러나, 전역번수를 많이 쓰는 방법은 좋지 않음. 왜?  
    * 강사님께선 생성한 코드를 함수 안에 넣음으로써 지역변수로 사용 
 - 모달창을 생성했을 때, 처음 클릭한 버튼은 비활성화되는 되는 코드를 추가해야함!
 - 비활성화되는 코드를 넣었다면, 굳이 버튼을 여러번 클릭하였을 때, 모달창이 계속해서 추가적으로 생성되는 것을 막기위한 코드를 작성할 필요는 없음! (exist_modal)
 
