(function(global, XHR){
  'use strict';

  var xhr = new XHR;

  var result_view = document.querySelector('.ajax-result');
  var call_ajax_btn = document.querySelector('.ajax-btn');

  call_ajax_btn.onclick = updateViewPlace;

  /*xhr.open('GET', 'http://api.randomuser.me/?results=20&gender=female&nat=gb,br'); // 비동기 통신*/
  xhr.open('GET', '../data/data.json'); // 비동기 통신


  xhr.onreadystatechange = function() {

    if ( this.status === 200 && this.readyState === 4 ) {

      var random_users = this.response; 
      random_users = JSON.parse(random_users); 
      var people = random_users.results;
      var template = "<table><tr><th>사진</th><th>성별</th><th>번호</th><th>이메일</th></tr>"
      
      // people 반복 순환 처리

      var person, gender, phone, email, pic, i=people.length - 1; 
      for ( var i; people[i]; i-- ) {
        person  = people[i];
        gender  = person.gender;
        phone   = person.phone;
        email   = person.email;
        pic     = person.picture.thumbnail;


        template += [
        '<tr>',
          '<td class="thumb" style="background-image:url('+ pic +');"></td>',
           '<td class="gender">' + gender +'</td>',
           '<td class="phone">' + phone +'</td>',
           '<td class="email">' + email +'</td>',
         '</tr>'
        ].join('');
      }
       template += '</table>';
       result_view.innerHTML = template

    }
  }

  function updateViewPlace() {
    xhr.send();
    this.setAttribute('disabled', 'disabled');
  }
})(this, this.XMLHttpRequest);
