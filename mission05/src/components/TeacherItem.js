import { LitElement, html } from "lit";
import s from "/src/style/Card.css?inline";

// console.log(s);

class TeacherItem extends LitElement {
  static properties = {
    name: { type: String },
    description: { type: String },
    src: { type: String },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <li class="item">
        <h3 class="name">${this.name}</h3>
        <div class="flex">
          <img src="${this.src}" alt="" />
          <ul class="description">
            ${this.description.map((desc) => html` <li>${desc}</li> `)}
          </ul>
        </div>
      </li>
    `;
  }
}

customElements.define("teacher-item", TeacherItem);
