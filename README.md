# Let's Study Node.JS

#### 중복을 피하는 코드를 작성하는 것이 좋은 프로그래머입니다.

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

-----------
#### Node.js 모듈
우선 어떤 모듈이 있는지 파악하는 것이 좋습니다.
개인이 모듈을 직접 구성하고, 만드는 경우도 있으며, Node.js awesome을 통해 찾아볼 수도 있습니다. 다양한 모듈을 알고 있으면 개발 과정에 도움이 됩니다.

