var modal_box = document.querySelector('.modal');
var open_modal = document.querySelector('.open-modal-btn');
var close_modal = document.querySelector('.close-modal-btn');

open_modal.onclick = function(){
	modal_box.style.display = "block";
};
close_modal.onclick = function(){
	modal_box.style.display = "none";
};