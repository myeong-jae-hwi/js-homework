const END_POINT = "https://pokeapi.co/api/v2/pokemon";

import { insertLast, getNode, getNodes } from "../../lib/index.js";

const body = getNode("body");
const ul = getNode("ul");
const button = getNodes("button");
const list = getNodes("li");

async function getData(url) {
  const response = await fetch(url);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
}

/* -------------------------------------------------------------------------- */
/*                             스타팅 포켓몬 3마리 url 반환                             */
/* -------------------------------------------------------------------------- */
function getPoketmon() {
  const url = [];
  for (let i = 1; i <= 7; i += 3) {
    url.push(`${END_POINT}/${i}`);
  }
  console.log(url);
  return url;
}

/* -------------------------------------------------------------------------- */
/*                                   버튼에 렌더링                                  */
/* -------------------------------------------------------------------------- */

const url = getPoketmon();
const index = [];

function renderButton() {
  for (let i = 0; i < 3; i++) {
    console.log();

    index.push(url[i]);

    // 버튼 이미지
    getData(url[i]).then((res) => {
      insertLast(button[i], `<img class="poketmon" src="${res.data.sprites.other["official-artwork"].front_default}" alt=""/>`);
    });
  }
}

renderButton();

/* -------------------------------------------------------------------------- */
/*                                   울음소리 반환                                  */
/* -------------------------------------------------------------------------- */
async function getCrise() {
  const crise = [];
  const audioList = [];

  for (let i = 0; i < 3; i++) {
    crise.push(url[i]);

    const res = await getData(url[i]);
    const cries = res.data.cries;
    const latestCryUrl = cries.latest;

    const audio = new Audio(latestCryUrl);
    audioList.push(audio);
  }

  return audioList;
}

ul.addEventListener("click", async (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const audioList = await getCrise();

  const index = li.dataset.index;

  console.log(index);
  console.log(audioList[index - 1]);

  const audio = audioList[index - 1];

  audio.play();

  setImage(index);

  list.forEach((li) => {
    li.classList.remove("is-active");
  });

  li.classList.add("is-active");
});

function setImage(idx) {
  getData(url[idx - 1]).then((res) => {
    const image = getNode("img");
    image.src = `${res.data.sprites.other["official-artwork"].front_default}`;
    console.log(`../assets/bg${idx}.png`);
    // body.style.backgroundImage = `../assets/bg${idx}.png`;
    body.style.backgroundImage = `url("../poketmon/assets/bg${idx}.png")`;
  });
}
