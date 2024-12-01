import { LitElement, html } from "lit";
import s from "/src/style/faceBook.css?inline";

console.log(s);
class FaceBook extends LitElement {
  static properties = {
    teacher: { type: Array },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>
      <article class="contents">
        <header>
          <div class="profile_container">
            <div class="profile_img"><img src="/src/assets/part04/tigerr.png" alt="" /></div>
            <div>
              <div class="name"><a href="#">심심</a></div>
              <div class="time">1시간 전</div>
            </div>
            <div class="more" data-name="more">
              <span class="icon--more"></span>
              <ul class="hidden_menu" data-name="contextMenu">
                <li class="friendRequest"><button type="button">친구요청</button></li>
                <li class="save"><button type="button">저장하기</button></li>
                <li class="edit"><a href="edit.html">수정</a></li>
                <li class="delete" data-name="delete"><button type="button" value="삭제">삭제</button></li>
              </ul>
            </div>
          </div>
        </header>
        <div class="main_article">사자의 위엄보다 더 멋진 그들은 멋쟁이 사자 그 자체였다.</div>

        <div class="img_section">
          <a href="#"><img src="/src/assets/part04/visual.png" alt="" /></a>
        </div>

        <div class="ajax_field">
          <div class="like">
            좋아요
            <span class="like_count" id="like-count-37">1</span>
            개
          </div>
          <div class="comment">
            댓글
            <span class="comment_count">2</span>
            개
          </div>
        </div>

        <div class="btn_container">
          <button class="like_btn" data-name="like">
            <span class="icon icon--like-line"></span>
            좋아요
          </button>
          <button class="comment_btn" data-name="comment">
            <span class="icon icon--comment-line"></span>
            댓글
          </button>
        </div>

        <div class="comment_container">
          <div class="id">
            <div class="profile_img border_over"><img src="/src/assets/part04/jo.png" alt="프로필사진" /></div>
            <div class="comment_field">
              <div class="text_container">
                <div class="name"><a href="#">조수현</a></div>
                <div class="text_field">먹을 수 있지 않나요?</div>
              </div>
            </div>
          </div>

          <div class="id">
            <div class="profile_img border_over"><img src="/src/assets/part04/no.png" alt="프로필사진" /></div>
            <div class="comment_field">
              <div class="text_container">
                <div class="name"><a href="#">노종국</a></div>
                <div class="text_field">수현님 손절 하겠습니다..</div>
              </div>
            </div>
          </div>

          <div class="id">
            <div class="profile_img border_over"><img src="/src/assets/part04/min.png" alt="프로필사진" /></div>
            <div class="comment_field">
              <div class="text_container">
                <div class="name"><a href="#">조영민</a></div>
                <div class="text_field">다들 저랑 같은 포즈 하시죠??</div>
              </div>
            </div>
          </div>
        </div>

        <div class="comment_input">
          <div class="profile_img"><img src="/src/assets/part04/tigerr.png" alt="" /></div>
          <div class="input_container">
            <form>
              <label for="comment37"></label>
              <input type="text" id="comment37" placeholder="댓글을 입력하세요..." />

              <button type="submit" class="send" data-name="send">
                <span class="icon--send"></span>
              </button>
            </form>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("face-book", FaceBook);
