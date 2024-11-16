# 명재휘 과제 2

## 네이버 폼 구현 ✅

### 요구사항

1. email / pw 정규표현식을 사용한 조건처리

```js
// 이메일 형식 조건처리
if (emailReg(email)) {
  state.emailValid = true;
  emailInput.classList.remove("is--invalid");
} else {
  state.emailValid = false;
  emailInput.classList.add("is--invalid");
}

// pw 형식 조건처리
if (pwReg(pw)) {
  state.pwValid = true;
  pwInput.classList.remove("is--invalid");
} else {
  state.pwValid = false;
  pwInput.classList.add("is--invalid");
}
```

2. 로그인 버튼을 클릭시 user.id / user.pw 의 값과 input의 값을 비교

```js
// 로그인 버튼 클릭 이벤트
loginForm.addEventListener("submit", (e) => {
  try {
    const email = emailInput.value;
    const pw = pwInput.value;

    e.preventDefault();

    if (email === user.id && pw === user.pw) {
      state.isLogined = true;
      window.location.href = "welcome.html";
    } else {
      alert("정보가 일치하지 않습니다. 다시 입력해주세요.");
    }
  } catch (error) {
    alert("에러가 발생했습니다. 지연이 지속되면 문의 주시기 바랍니다. \n📞 010-7169-0262");
    console.error(error);
  }
});
```

3. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

```js
window.location.href = "welcome.html";
```

### 성능

#### 리렌더링 제거

에러 메세지가 나오고 사라지는 과정에서 불필요한 리렌더링이 되는 것을 볼 수 있었습니다.

그래서 메세지의 `display: none;` 대신 `visibility`을 제어해 해당 위치에서 메세지만 사라지도록 구현해 보았습니다.

```js
if (emailReg(email)) {
  emailError.style.visibility = "hidden";
} else {
  emailError.style.visibility = "visible";
}
```

#### 쓰로틀링 추가

쓰로틀링을 추가해보았습니다. 처음에는 콜백함수를 만들고 싶었는데 실패했습니다

```js
let timer;

emailInput.addEventListener("input", function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      let email = e.target.value;

      if (emailReg(email)) {
        state.emailValid = true;
        emailInput.classList.remove("is--invalid");
        console.log(email);
      } else {
        state.emailValid = false;
        emailInput.classList.add("is--invalid");
        console.log(email);
      }
    }, 500);
  }
});
```

### 예외처리

### try-catch 문

```js
try {
  const email = emailInput.value;
  const pw = pwInput.value;
  console.log(email);

  e.preventDefault();

  if (email === user.id && pw === user.pw) {
    state.isLogined = true;
    window.location.href = "welcome.html";
  } else {
    alert("정보가 일치하지 않습니다. 다시 입력해주세요.");
  }
} catch (error) {
  alert("에러가 발생했습니다. 지연이 지속되면 문의 주시기 바랍니다. \n📞 010-7169-0262");
  console.error(error);
}
```

서버의 응답이 잘못되어 에러가 났을 때 에러메세지를 출력했습니다.

### 상태관리

전역 state를 이용해 현재 상태를 알 수 있도록 설정했습니다.

```js
const state = {
  emailValid: false,
  pwValid: false,
  isLogined: false,
};
```

### 회고

이번 과제를 하며 폼을 제출할 때 에러가 발생했습니다. 그 이유는 폼에 `submit`을 하면 `action`에 설정된 url로 이동을 하게 되는데 해당 주소가 없기 때문에 발생한 이슈였습니다.

그래서 `e.preventDefault();` 를 추가해 폼의 기능을 멈추었고 `window.location.href = "welcome.html";` 로 경로를 바꾸었습니다.

최근 멋사에서 보내준 책을 읽으며 성능 향상에 관한 관심이 생겨 최대한 코드의 성능 뿐만 아니라 퀄리티를 높히는 데에 집중했습니다.
