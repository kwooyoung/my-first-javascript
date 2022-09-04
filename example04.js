배열 pop push shift unshift

var arr=[1,2,3,4,5];

arr.pop(); 출력 > 5
arr; 출력 -> [1,2,3,4]
pop은 배열의 마지막 엘리먼트를 빼서 반환

arr.shift(); 출력 -> 1
arr; 출력 -> [2,3,4]
배열의 앞에 부분을 제거


arr.push(6); 출력 -> 4
arr; -> 출력 [2,3,4,6]
마지막 자리 즉 4번째에 6을 추가


arr.unshift(0); -> 출력 5
arr; 출력 -> [0,2,3,4,6]
배열의 맨 첫번째에 0을 추가

arr.reverse(); 출력 -> [6,4,3,2,0]
arr; 출력 -> [6,4,3,2,0]
배열을 뒤집음 (reverse)

arr.sort(); 출력 -> [0,2,3,4,6]
arr; 출력 -> [0,2,3,4,6]
배열의 값들을 정렬해줌


.push(element) : 배열의 뒤에 엘리먼트 추가
.pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴
.shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴
.unshift(element) : 배열의 앞에 엘리먼트 추가

문자열과 같이 concat과 indexOf, lastIndexOf 사용 가능


스플릿 명령

var str="1,2,3,4,5";

str.split(",");[
출력 ->
["1","2","3","4","5"]
