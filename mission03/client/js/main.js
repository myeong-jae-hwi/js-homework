/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { getNode, getNodes } from "../lib/index.js";
import { data } from "./data.js";

/* ----------------------------------- 선언부 ---------------------------------- */
const body = getNode("body");
const ul = getNode("ul");
const image = getNode(".visual img");
const nickName = getNode(".nickName");
const list = getNodes("li");

function setBgColor(color1, color2) {
  body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function setImage(name) {
  image.src = `./assets/${name}.jpeg`;
  image.alt = name;
}

function setNameText(name) {
  nickName.textContent = name;
}

// console.log(data[0].name);

ul.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  console.log(e.target);
  if (!li) return;

  const index = li.dataset.index;
  const characterData = data[index - 1];
  console.log(characterData.name);

  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  li.classList.add("is-active");

  setBgColor(characterData.color[0], characterData.color[1]);
  setImage(characterData.name);
  setNameText(characterData.name);
});
