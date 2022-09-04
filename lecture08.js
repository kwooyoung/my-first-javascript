var uninitialized_var;
//typeof()결과 역시 undefined


var obj={
  x:1,
  y:2
};
/*

오브젝트에 정의되지 않은 변수 출력시 예) obj.z
undefined 결과 출력, typeof(onj.z)역시 undefined

주로 시스템에서 변수나, 속상이 정의되지 않은 경우 표현


null -개발자가 의도적으로 비어있는 무의 상태를 표현하기 위해 사용

*/


var null_var;
null_var=null;
null_var;
typeof(null_var);

/*
typeof()시 object가 출력됨
null이라는 빈 객체가 저장되어 있다는 뜻 */
