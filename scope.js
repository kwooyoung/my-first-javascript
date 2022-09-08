//scope , 선언된 변수가 어느 위치에서 유효한가?

function a(){
  var v_a= "a";

  function b(){
    var v_b="b";
    console.log("b : ",typeof(v), typeof(v_a),typeof(v_b));

  }

  b();
  console.log("a : ",typeof(v), typeof(v_a),typeof(v_b));
}


var v="v";
a();
console.log("ㅇ : ",typeof(v), typeof(v_a),typeof(v_b));
/*


a{
  함수 v_a 선언
  b{
    함수 v_b선언
      b의 type of 탐색

   }
   b 호출
   a의 type of 탐색

}
  a 함수 호출
  v의 type of 탐색


  출력 결과
  b :  string string string
  a :  string string undefined
  ㅇ :  string undefined undefined

변수의 범위(scope)는 function의 범위(scope)를 따른다.
객체(변수)는 선언된 함수 안에서만 접근이 가능
v는 전역 스코프라 어느곳에서나 접근이 가능하다.
반대로 v_a, v_b 함수는 지역변수로 그 안에서만 접근이 가능

*/
