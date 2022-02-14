// 함수의 반올림 Math.round
console.log(Math.round(1.6)); // 2출력
console.log(Math.round(1.4)); // 1출력

// 여기서 first, second와 같이 변수를 전달받는 걸 매개변수 (parameter)라고 한다.
// 반대로 sum(2,4)처럼 전달하는 걸 인자(argument)라고 한다.
function sum(first, second){
    console.log(first + second);
}

sum(2,4);

// 함수에 return 문이 존재하면 return 이후는 출력하지 않는다.
// return은 함수를 종료한다는 의미다.
