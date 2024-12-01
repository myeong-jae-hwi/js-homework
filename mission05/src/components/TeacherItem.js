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

  handleSandData() {
    this.dispatchEvent(
      new CustomEvent("getData", {
        bubbles: true,
        composed: true,
        detail: {
          data: this.name,
        },
      })
    );
    console.log(`${this.name} click!`);
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <li class="item" @click=${this.handleSandData}>
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
