

//===========================================================
var bg_change_btns = query('.bg-change').children
var body = document.body;

/*
var btn_white = query('.white-btn');
var btn_black = query('.black-btn');

btn_white.onclick = function() {
	document.body.style.backgroundColor = null;
}
btn_black.onclick = function() {
	document.body.style.backgroundColor = "#333333";
}
*/

// background-color 변경 함수
// button의 class를 가져와 classname에 적힌 color 를 body.bg 에 적용
for ( var i=0, l=bg_change_btns.length; i<l; i++) {
	var bg_btn = bg_change_btns[i]
	bg_btn.onclick = function() {
		var get_class = this.getAttribute('class')
		body.style.backgroundColor = get_class.split('-')[0];
		// this.style.borderWidth = "10px";
	}
}

//===========================================================

// +,- 버튼클릭으로 폰트사이즈 변경 함수
var textarea = query('.preview-text');
var increase_btn = query('.increase-btn');
var decrease_btn = query('.decrease-btn');

textarea.style.fontSize = "16px";

/*
increase_btn.onclick = function() {
	current_size = parseInt(textarea.style.fontSize);
	textarea.style.fontSize = current_size + 1 + "px";
	console.log(textarea.style.fontSize);
}
decrease_btn.onclick = function() {
	current_size = parseInt(textarea.style.fontSize)
	textarea.style.fontSize = current_size - 1 + "px";
	console.log(textarea.style.fontSize);
}
*/


var change_size = 1;
function changeFontSize() {
	var operator = this.firstChild.nodeValue;
	console.log(this.firstChild.nodeValue);

	var current_text = parseInt(textarea.style.fontSize);
	var _current_size;
	if( operator == "+" ) {
		_current_text = current_text + change_size;
	} else {
		_current_text = current_text - change_size;
	}
 textarea.style.fontSize = _current_text + 'px';
}

increase_btn.onclick = decrease_btn.onclick = changeFontSize



/*
		if( operator !== "+" ) {
			change_size = change_size * -1 
		}
		
		이 코드가 안되는 이유!!!!

		operator의 값이 "+" 가 아닐경우, 
		change_size에 -1 을 곱한 값을 넣어서 
		change_size의 값이 -1 이 되게 하려했지만,
		같은함수가 한번 더 반복될 시엔
		change_size에 -1 값이 저장되어있는 상태에서 다시 -1을 곱해주게되므로 값이 1 이 된다..!

*/