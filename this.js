//오브젝트 프로퍼티로써 펑션,메소드,디스에 대해
/*
객체는 여러 속성을 가질 수 있다. 함수 역시 객체의 속성이 될 수 있다.

객체 속성의 값으로써 함수가 들어가면 그 함수를 메소드라고 부른다.





function f(){
  console.log(this);//예약어 this
  console.log("f is called");

}

var o={name:"object", method:f};

f();
o.method();



출력 결과
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
f is called
{name: 'object', method: ƒ}
f is called


첫번째 f();는 windows라는 오브젝트인걸 알 수 있고
두번째 함수 호출하면 o.method();는 o객체라는 것을 확인.

this는 예약어 이다. 함수 f가 불렸을때 어떤 객체에 바인드된 속성으로써 불렸는지
알 수 있게 해준다.

브라우저에서 코드를 실행하고 있기 때문에 가장 바깥(전역)에 선언한 함수들은
모두 windows 라는 오브젝트에 바인드 되게 된다.
그러므로 f();함수를 호출했을때는 windows 객체가 출력.
o.mothod(); 객체의 메소드로써  출력했을때에는 오브젝트가 출력되는 것이다.

*/
function f(){
  console.log(this);//예약어 this
  console.log("f is called");
}
function setName(name){
  this.name=name;
}


var o={name:"object", method:f, setName:setName};
var o2={name:"", setName:setName}
o.setName("object1");
o2.setname("object2");
