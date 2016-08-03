

```
        var body = document.getElementsByTagName('body')[0];
        // var body = document.body 라고 해도 무방!
        var blue_btn = document.getElementsByTagName('button')[0];
        var red_btn = document.getElementsByTagName('button')[1];

        blue_btn.onclick = function(){
            body.style.backgroundColor = 'lightblue'; 
                        //  값은 '' or "" 로 묶어줌!
        }
        red_btn.onclick = function(){
            body.style.backgroundColor = "lightpink";
        }
```

```
    <div id="btn_group2" role="group">
        <button type="button">#f50054</button>
        <button type="button">#8800f3</button>
        <button type="button">#139df3</button>
    </div>
```

```
    var button_group = document.getElementById('btn_group2');
    var btns = button_group.getElementsByTagName('button');

    var btn_1 = btns[0]
    var btn_2 = btns[1]
    var btn_3 = btns[2]
```

```
     btn_1.onclick = function() {
      var change_color = btn_1.firstChild.nodeValue;
      body.style.backgroundColor = change_color;
     }
     btn_2.onclick = function() {
      var change_color = btn_2.firstChild.nodeValue;
      body.style.backgroundColor = change_color;
     }
     btn_3.onclick = function() {
      var change_color = btn_3.firstChild.nodeValue;
      body.style.backgroundColor = change_color;
     }
```

```
    var colorChange = function(){
        var change_color = this.firstChild.nodeValue;
        body.style.backgroundColor = change_color;
     }
    btn_1.onclick =
    btn_2.onclick =
    btn_3.onclick = colorChange
```

```
    var colorChange =function(){
        body.style.backgroundColor = this.firstChild.nodeValue;
    }
```