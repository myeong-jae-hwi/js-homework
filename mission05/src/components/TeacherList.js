import { LitElement, html } from "lit";
import {} from "/src/components/TeacherItem";

class TeacherList extends LitElement {
  static properties = {
    teacher: { type: Array },
    src: { type: String },
    tag: { type: Array },
  };

  constructor() {
    super();

    this.teacher = [
      {
        name: "슬비쌤",
        description: ["현) EUID(이듬) 강사", "현) NIA, K-MOOC 웹접근성 자문위원", "현) 멀티캠퍼스 사외강사"],
        src: "/src/assets/teacher/seulbiTeacher.png",
        picture: "https://d35ai18pny966l.cloudfront.net/course/kdt/kdt-frontend-12th/teacher_img1.png",
        tag: ["#슬빛", "#div 🙅‍♀️", "#웹 접근성 !important"],
      },
      {
        name: "범쌤",
        description: ["현) EUID(이듬) 강사", "현) 멀티캠퍼스 사외강사", "현) 인프런 지식 공유자", "전) SI 디자인 & 개발", "전) 디자인나스 전임강사"],
        src: "/src/assets/teacher/tigerTeacher.png",
        picture: "https://d35ai18pny966l.cloudfront.net/course/kdt/kdt-frontend-12th/teacher_img2.png",
        tag: ["#굿쌤", "#범쌤", "#new kindTiger()", "#핸드폰", "#경비 아저씨 👮‍♀️"],
      },
      {
        name: "야무쌤",
        description: ["현) EUID(이듬) 강사", "현) NIA, K-MOOC 웹접근성 자문위원", "현) Samsung, LG, SK, 신세계 등 기업 사외강사"],
        src: "/src/assets/teacher/image.png",
        picture: "https://d35ai18pny966l.cloudfront.net/course/kdt/kdt-frontend-12th/teacher_img3.png",
        tag: ["#ChatYMT", "#Comming Soon"],
      },
    ];
    this.src = "";
    this.tag = [];
  }

  log(e) {
    console.log(e);
  }

  handleGetData(data) {
    console.log("a");
    const teacher = this.teacher.find((t) => t.name === data);
    if (teacher) {
      console.log("b");
      this.src = teacher.picture;
      this.tag = teacher.tag;
    }
  }

  render() {
    return html`

    <style>
        h2 {
          margin-left: 60px;
        }
        .flex{
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .card-view{
          margin-right:60px
        }

        img{
          margin: 60px;
          margin-left: 0px;
          display: block;
        }

        .tag-item{
          background-color: rgba(135, 131, 120, .15);
          padding: 5px 8px;
          border-radius: 5px;
          margin: 5px;
          font-size: 0.9em;
          color: #EB5757;
        }

    </style>
      <div class="flex">
        <div class="card-view">
          <h2>강사 소개 🎓</h2>
          <ul>
            ${this.teacher.map((teacher) => html` <teacher-item .name="${teacher.name}" .src="${teacher.src}" .description="${teacher.description}" @getData=${(e) => this.handleGetData(e.detail.data)}> </teacher-item> `)}
          </ul>
        </div>

          <div>
            <img src="${this.src}" alt="" />
            ${this.tag.map((t) => html`<span class="tag-item">${t}</span>`)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("teacher-list", TeacherList);
