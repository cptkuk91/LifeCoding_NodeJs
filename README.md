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

------------
#### MySQL ER_ACCESS_DENIED_ERROR 오류
데이터베이스 서버에 접속할 수 없을 때 발생하는 오류다.
일반적으로 비밀번호, 권한에 문제가 있기 때문에 발생한다.
화가 나도.. 비밀번호를 다시 한번 확인 후 데이터베이스 서버에 등록된 사용자(User)를 사용하도록 하자.

- 새로운 유저 생성 검색 (How to Create a New User in MySQL)
<br/>
ex) CREATE USER '(유저 이름)'@'%' IDENTIFIED BY '(비밀번호)';

- 생성된 유저에게 권한 부여 방법 검색 (How to Grant Different User Permissions in MySQL)
<br/>
ex) GRANT ALL PRIVILEGES ON (데이터베이스 이름).* TO '(유저 이름)'@'%';

ALL PRIVILEGES는 모든 권한을 부여한다는 뜻입니다. 권한을 부여한 후 FLUSH PRIVILEGES 명령을 통해 데이터베이스에 적용해야 합니다.


