##position

position property
    - static(Default)
    - relative
    - absolute
    - fixed 
----
  
#### static  
    - 모든 요소의 기본값(default)
```css
.static {
    position: static;
}
```

#### relative
    - 자기 자신의 위치를 기준으로 이동  
    - 일반 흐름(normal flow)를 깨지 않음
    - top, right, bottom, left 값으로 위치 조정 

```css
.relative {
    position: static;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```


#### absolute
    - offsetParent에 상대적  
        (offsetParent : 자식요소를 포함하는 가장 가까운 부모 요소중에 position값이 static이 아닌 부모요소)  
    - 일반 흐름에서 벗어남  
    - top, right, bottom, left 값으로 위치 조정 
    - display 속성 값이 block으로 변경됨
    - 일반적으로 absolute가 적용된 요소의 부모요소에 relative를 설정하는 이유
        : relative는 일반흐름을 깨지 않기 때문!
    - float와의 차이점 : float는 부모요소가 float 된 요소를 감싸게 하는 방법이 있지만, absolute의 경우는 별도로 height값을 제공해야 함

```css
.absolute {
    position: static;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

#### fixed
    - screen viewport 를 기준
    - 고정형태로 위치가 설정(화면 스크롤과 상관없이 항상 그자리를 유지)
    - display 값이 block으로 변경됨
  
```css
.fixed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

absolute와 fixed의 경우 display 값이 block으로 변경됨  
But, block이 되어도 width값을 따로 주지 않으면 inline요소 처럼 자기 자신의 영역만큼만 가로 값을 가짐  
(float역시 display값이 block이 되지만, 자식의 폭만큼 크기가 줄어듦)  
  

z-index 속성의 경우 반드시 position(static 제외)과 함께 사용됨  
(z-index 속성값은 양의 정수, 0, 음의 정수 사용 가능!  
 단, 설정 시 1 단위가 아닌 10 또는 100단위로 설정하는 것이 유지보수 관점에서 권장됨!)  
    
content를 부모요소 안에서 가운데 정렬 하고 싶을 때!  
```css
.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
transform: translate는 자기자신의 가로, 세로 값을 기준으로 주어진 값만큼 x,y축 이동 

 ---
 ####더 알아보기
 -position -> absolute 자식에게 마진을 주었을때 적용이 될까? 안될까?  ==> 숫자값은 적용이 되지만 auto는 안됨!
 - 가상요소에 z-index:-1 하고 원래요소(가상요소의 부모)에 z-index 값을 10 을 주면 ?
    => 부모요소가 위로 올라오는게 아니라 가상요소를 감싸는 형태가 됨 ? 텍스트는 위로 올라옴?...? 