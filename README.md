# Let's Study Node.JS

#### 중복을 피하는 코드를 작성하는 것이 좋은 프로그래머입니다.
중복된 단어(코드)를 줄이는 방법은 다양합니다. 선언을 통해 중복된 코드를  쉽게 수정, 삭제 할 수 있습니다.

-----------

#### 객체와 배열
배열은 ([, ]) 사용하지만 객체는 ({, }) 사용한다.
배열은 순서대로 저장하면 된다. 객체는 키값을 입력해주면 된다.

###### ex) 객체의 반복문
```javascript
var school = {
    'element':'seohyun',
    'middle':'bundang',
    'high':'seongnam'
}

for(let name in school){
  console.log('key', name, 'value', school[name]);
}
```
