String 다루기

str= "abcdeabcde";

str=charAt(0) =결과 : a

str.substring(2,4); = 결과 : "cd" 2(c)자리부터 4번째자리(e)의 전까지 반환

str.substr(2,4); = 결과 : cdea 2번째자리(c)부터 문자열 4개만큼 반환

str.substring(2)
str.substr(2)     = 결과 : cdeabcde 2번째 자리 (c부터) 문자열의 끝까지 반환


str.substr(-7)  = 결과 : deabcde  뒤에서 7번째 자리부터 문자열 끝까지 반환

str.substr(-7,2) = 결과 : de 뒤에서 7번째 자리부터 문자열 2개를 반환


문자열 안에서 주어진 문자열이 존재하는 위치를 찾아서 반환.
문자열.indexOf
문자열.lastIndexOf

문자열이 있는경우 해당 시작위치를 반환

str.indexof("bc"); = 출력 결과 : 1
첫번째로 bc가 나오는 위치

str.lastIndexOf("bc"); = 출력 결과 : 6
마지막으로 bc가 나오는 위치


str.lastIndexOf("f"); = 출력결과 : -1 ,
 존재하지 않는 문자열을 사용하는 경우 -1 반환
