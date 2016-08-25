(function(global, XHR){
	'use strict';

	var btn = document.querySelector('.ajax-btn');
	var data_content = document.querySelector('.ajax-call');

	var xhr = new XHR;

	xhr.open('GET','data/data.html');

	btn.onclick = updateViewPlace;

	xhr.onreadystatechange = function(){
		if ( this.status === 200 && this.readyState === 4) {
			data_content.innerHTML = xhr.response;
		} else {
			data_content.innerHTML = "데이터 로드 실패!";
		}
	}
	function updateViewPlace(){
		xhr.send();
	} 

	
})(this, this.XMLHttpRequest);