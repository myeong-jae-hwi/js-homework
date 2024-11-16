const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/* -------------------------------------------------------------------------- */
/*                                    상태관리                                    */
/* -------------------------------------------------------------------------- */

const state = {
  emailValid: false,
  pwValid: false,
  isLogined: false,
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

// 이메일 형식인지 확인 메서드
function emailReg(text: string): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// pw 형식인지 확인 메서드
function pwReg(text: string): boolean {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */
/*                                  이메일 유효성검사                                 */
/* -------------------------------------------------------------------------- */

const emailInput = document.querySelector(".user-email-input") as HTMLInputElement;
// const emailError = document.querySelector("#userEmailError");

if (emailInput === null) {
  console.log("에러처리");
} else {
  emailInput.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      let email = target.value;
      if (emailReg(email)) {
        state.emailValid = true;
        emailInput.classList.remove("is--invalid");
      } else {
        state.emailValid = false;
        emailInput.classList.add("is--invalid");
      }
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                                  pw 유효성검사                                  */
/* -------------------------------------------------------------------------- */

const pwInput = document.querySelector(".user-password-input") as HTMLInputElement;
// const pwError = document.querySelector("#userPasswordError");

if (pwInput === null) {
  console.log("에러처리");
} else {
  pwInput.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;

    if (target) {
      let pw = target.value;

      if (pwReg(pw)) {
        state.pwValid = true;
        pwInput.classList.remove("is--invalid");

        // pwError.style.visibility = "hidden";
      } else {
        state.pwValid = false;
        pwInput.classList.add("is--invalid");

        // pwError.style.visibility = "visible";
      }
    }
  });
}

/* -------------------------------------------------------------------------- */
/*                                로그인 버튼 클릭 이벤트                               */
/* -------------------------------------------------------------------------- */

const loginForm = document.querySelector(".login-form");

if (!loginForm || !emailInput || !pwInput) {
  console.log("에러처리");
} else {
  loginForm.addEventListener("submit", (e) => {
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
  });
}
