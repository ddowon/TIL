#Flex-box

##property
###display: flex
###justify-content
flex 요소를 가로선 상에서 정렬
 - flex-start : 요소들을 컨테이너 왼쪽으로 정렬
 - flex-end : 요소들을 컨테이너 오른쪽으로 정렬
 - center : 요소들을 컨테이너 가운데로 정렬
 - space-between : 요소들을 동일한 간격으로 정렬(양끝 공간 없음)
 - space-around : 요소들을 동일한 간격으로 정렬(양끝에도 동일한 공간 존재)

###align-items
flex 요소를 세로선 상에서 정렬
 - flex-start : 요소들을 컨테이너 위쪽으로 정렬
 - flex-end : 요소들을 컨테이너 아래쪽으로 정렬
 - center : 요소들을 컨테이너 세로선 상의 가운데로 정렬
 - baseline : 요소들을 컨테이너의 시작 위치에 정렬
 - stretch : 요소들 컨테이너에 맞도록 늘림

###flex-wrap
flex 요소들을 한 줄 또는 여러 줄에 정렬
 - no-wrap : 모든 요소들을 한 줄에 정렬
 - wrap : 요소들을 여러 줄에 걸쳐 정렬
 - wrap-reverse : 요소들을 여러 줄에 걸쳐 반대로 정렬

###flex-direction
정렬할 방향을 정함
 - row : 요소들을 텍스트의 방향과 동일하게 정렬
 - row-reverse : 요소들을 텍스트의 반대 방향으로 정렬
 - column : 요소들을 위에서 아래로 정렬
 - column-reverse : 요소들을 아래에서 위로 정렬

###align-self
지정된 align-items의 값을 무시하고 flex 요소를 세로선 상에 정렬  
(align-items의 값 : flex-start, flex-end, center, baseline, stretch)

###flex-flow
flex-direction과 flex-wrap을 간략히 한 속성
 - flex-flow : [flex-direction] [flex-wrap]

-----
 #### 더 정리해야할 부분
 - 예시 코드


