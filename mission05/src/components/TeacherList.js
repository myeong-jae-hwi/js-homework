import { LitElement, html } from "lit";
import {} from "/src/components/TeacherItem";

class TeacherList extends LitElement {
  static properties = {
    teacher: { type: Array },
  };

  constructor() {
    super();

    this.teacher = [
      {
        name: "슬비쌤",
        description: ["현) EUID(이듬) 강사", "현) NIA, K-MOOC 웹접근성 자문위원", "현) 멀티캠퍼스 사외강사"],
        src: "/src/assets/teacher/seulbiTeacher.png",
      },
      {
        name: "범쌤",
        description: ["현) EUID(이듬) 강사", "현) 멀티캠퍼스 사외강사", "현) 인프런 지식 공유자", "전) SI 디자인 & 개발", "전) 디자인나스 전임강사"],
        src: "/src/assets/teacher/tigerTeacher.png",
      },
      {
        name: "야무쌤",
        description: ["현) EUID(이듬) 강사", "현) NIA, K-MOOC 웹접근성 자문위원", "현) Samsung, LG, SK, 신세계 등 기업 사외강사"],
        src: "/src/assets/teacher/image.png",
      },
    ];
  }

  render() {
    return html`
        <div class="card-view">
          <ul>
            ${this.teacher.map((teacher) => html` <teacher-item .name="${teacher.name}" .src="${teacher.src}" .description="${teacher.description}"></teacher-item> `)}
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define("teacher-list", TeacherList);
