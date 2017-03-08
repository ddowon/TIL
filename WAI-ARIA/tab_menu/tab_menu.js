$(document).ready(function(){
	$('[role="tab"]').keyup(function(e){
		var keyCode = e.keyCode || e.which; //키보드 코드값
		if(keyCode == 39 || keyCode == 40){
			//오른쪽 방향키이거나 아래 방향키일 경우
			//브라우저의 기본동작을 취소함!
			e.preventDefault();
			
			//다음 tab 요소에 aria-selected=true로 지정하고
			//형제 요소중에서 자신 tab 이외의 나머지 tab요소들을 
			//aria-selected=false로 지정한다.
			$(this).next().attr('aria-selected', true).siblings().attr('aria-selected', false);
			
			var selectedId = "#"+$(this).next().attr('aria-controls');
			//자신은 보이게 하고 다른 tabpanel은 보이지 않게 지정한다.
			$(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
			//다음요소로 포커스를 이동한다.
			$(this).next().focus();
			
			//마지막요소에서 오른쪽방향키나 아래 방향키를 눌렀을 경우!
			if($(this).next().prevObject.attr('aria-controls')=='section3'){
				//tab, tabpanel, focus 모두 처음으로 이동!
				$('#tab1').attr('aria-selected', true).siblings().attr('aria-selected', false);
				$('#section1').removeClass('unvisual').siblings().addClass('unvisual');
				$('#tab1').focus();
			}
		}
		if(keyCode == 37 || keyCode == 38 ){
			//왼쪽 방향키이거나 위쪽방향키
			e.preventDefault();

			//이전 tab요소에 aria-selected=true로 지정하고
			//형제요소중에 자신 tab이외의 나머지 tab 요소들을 
			//aria-selected=false로 지정한다.
			$(this).prev().attr('aria-selected', true).siblings().attr('aria-selected', false);
			
			var selectedId = "#"+$(this).prev().attr('aria-controls');
			//자신은 보이게 하고 다른 tabpanel은 보이지 않게 지정한다.
			$(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
			//이전요소로 포커스를 이동한다.
			$(this).prev().focus();
			
			//처음요소에서 왼쪽방향키나 위쪽방향키를 눌렀을 경우!
			if($(this).prev().prevObject.attr('aria-controls')=='section1'){
				//tab, tabpanel, focus 모두 마지막으로 이동!
				$('#tab3').attr('aria-selected', true).siblings().attr('aria-selected', false);
				$('#section3').removeClass('unvisual').siblings().addClass('unvisual');
				$('#tab3').focus();
			}
		}
		
		if(keyCode == 35){
			//end 키를 눌렀을 경우!
			e.preventDefault();
			//tab, tabpanel, focus 모두 마지막으로 이동!
			$('#tab3').attr('aria-selected', true).siblings().attr('aria-selected', false);
			$('#section3').removeClass('unvisual').siblings().addClass('unvisual');
			$('#tab3').focus();
		}

		if(keyCode == 36){
			//home키를 눌렀을 경우!
			//tab, tabpanel, focus 모두 처음으로 이동!
			$('#tab1').attr('aria-selected', true).siblings().attr('aria-selected', false);
			$('#section1').removeClass('unvisual').siblings().addClass('unvisual');
			$('#tab1').focus();
		}
	});

	$('[role="tab"]').keydown(function(e){
		var keyCode = e.keyCode || e.which; //키보드 코드값
		if(keyCode == 9){
			//tab키를 눌렀을 경우!
			e.preventDefault();
			var selectedId = "#"+$(this).attr('aria-controls');
			console.log(selectedId);
			$(selectedId).children('a').focus();
		}
	});

	$('section a').keydown(function(e){
		var keyCode = e.keyCode || e.which //키보드 코드값
		if(keyCode == 9 && e.shiftKey){
			// shift + tab 키를 눌렀을 경우!
			$('.tab-list li').each(function(index){
				if($(this).attr('aria-selected')=='true'){
					$(this).next().focus();
					return false;
				}
			});
		}
	});
	//tab요소에 클릭 이벤트를 추가한다!
	$('[role="tab"]').on('click',function(e){
		e.preventDefault();

		//클릭한 tab요소에 aria-selected-true를 지정하고
		//형제요소중에 자신 tab 이외의 나머지 tab 요소들을 
		//aria-selected=true로 지정한다.
		$(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
		
		var selectedId = "#"+$(this).attr('aria-controls');
		//자신은 보이게 하고 다른 tabpanel은 보이지 않게 한다.
		$(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
	});
});