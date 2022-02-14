// 어떤 실행문을 마치면 내부적으로 자동 호출하는 기능을 '콜백'이라고 한다.

// function a(){
//     console.log('A');
// }

// a();

// callback을 통해 특정 함수를 호출할 수 있다.
let a = function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);
// slowfunc(a)를 통해 인자가 매개변수로 전달된다. 
// 이때 callback()이 a()로 바뀌면서
// function() 을 실행하고 'A'를 출력한다.