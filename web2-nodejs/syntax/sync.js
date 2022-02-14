let fs = require("fs");

// readFileSync
// console.log('A');
// let result = fs.readFileSync('sample.txt', 'utf-8');
// console.log(result);
// console.log('C');

// 우선 동기처리방식에 대해서 공부를 해보자..
// fs 모듈을 활용해 sample.txt를 가져와보자.

// ======================================================
console.log('A');
fs.readFile('sample.txt', 'utf-8', (err, result) => {
    console.log(result);
});
console.log('C');

// 출력이 동기와 달라진 이유는 fs.readFile을 처리하는 동안, C가 우선적으로 작업이 끝났기 때문입니다.

// 폴더 구조를 변경했습니다.