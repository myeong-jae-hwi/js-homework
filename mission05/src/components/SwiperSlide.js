import { LitElement, html } from "lit";
import s from "/src/SwiperSlide.css?inline";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

class SwiperSlide extends LitElement {
  constructor() {
    super();
    this.data = [
      {
        id: 1,
        src: "./assets/image.png",
        alt: "",
        title: "멋쟁이사자처럼",
        discription: "빨리 가려면 혼자 가고, 멀리 가려면 함께 가라.",
      },
      {
        id: 2,
        src: "./assets/image copy.png",
        alt: "",
        title: "가능성을 현실로",
        discription: "상상은 가능성을 열고, 행동은 현실을 만든다.",
      },
      {
        id: 3,
        src: "./assets/image copy 2.png",
        alt: "",
        title: "Title",
        discription: "미래를 예측하는 가장 좋은 방법은 그것을 만들어가는 것이다.",
      },
    ];
  }

  connectedCallback() {
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
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          ${this.data.map(
            (item) => html`
              <div class="swiper-slide">
                <div class="text">
                  <h3>${item.title}</h3>
                  <p>${item.discription}</p>
                </div>
                <div class="image-overlay"><img src="${item.src}" alt="${item.alt}" /></div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("swiper-slide", SwiperSlide);
