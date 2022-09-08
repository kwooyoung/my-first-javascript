//서로 다른 함수에서 같은 변수를 선언했을때 발생하는 쉐도잉 효과

function shadowing_example(){
  var val= 5;
  console.log("F", val);
  val++;
}

var val = 0;
shadowing_example();
console.log("O", val);


/*
출력 결과

같은이름의 변수가 사용된다는 전제 하에
 함수 안에서 출력한 값은 함수 안의 변수의 값을 따라감.

함수밖에서 출력한 변수는 바깥에서 선언한 변수의 값을 따라감.
F 5
O 0
---------------------------
한 함수 안에서만 값이 유지되어야 하는 변수는

var 키워드를 이용해 사용
예)
function name{
//함수 안에서만 값이 유지되는 변수
var in_var;
}

-----
여러 함수에 값이 유지되면서 사용해야하는 변수는 함수들을 포괄하는 바깥에서
선언 하여 사용
var in_var;

*/
