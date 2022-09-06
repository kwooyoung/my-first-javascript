var count = 0;

while(true){

  var ans;
  ans = parseInt(prompt("1+1?"));
  if(ans != 2){
    console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
    continue;
  }

  ans = parseInt(prompt("7-3?"));
  if(ans != 4){
    console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
    continue;
}
ans = parseInt(prompt("7*9?"));
    if(ans != 63){
      console.log((++count) + "번 틀렸습니다. 다시 도전하세요.");
      continue;
    }

break;

//continue를 만나면 여기로 이동합니다.
}
console.log("참 잘했습니다!");
