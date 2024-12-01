const data = [
  {
    id: 1,
    src: "/src/assets/image.png",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
    title: "멋쟁이사자처럼",
    discription: "빨리 가려면 혼자 가고, 멀리 가려면 함께 가라.",
  },
  {
    id: 2,
    src: "/src/assets/image copy.png",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
    title: "가능성을 현실로",
    discription: "상상은 가능성을 열고, 행동은 현실을 만든다.",
  },
  {
    id: 3,
    src: "/src/assets/image copy 2.png",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
    title: "Title",
    discription: "미래를 예측하는 가장 좋은 방법은 그것을 만들어가는 것이다.",
  },
];

const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  speed: 800,
  parallax: true,
  pagination: {
    el: `.swiper-pagination`,
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
