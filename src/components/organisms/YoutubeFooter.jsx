import React from "react";

function youtubeFooter() {
  return (
    <div className="youtube-footer page-tit">
      <div className="section-main-youtube">
        <div className="sec-youtube-contents">
          <div className="section-main-youtube-video-tit">제주완니TV</div>
          <div className="section-main-youtube-contents">여전히 꽃잎 같고,</div>
          <div className="section-main-youtube-contents">
            여전히 꿈을 꾸는 당신에게
          </div>
          <div className="btn-red btn-55">유튜브 구독하러가기</div>
        </div>
        <div className="section-main-youtube-contentsDisplayArea">
          <a href="#">
            <img src="../assets/main/youtube-footer_re.png"
              alt="유튜브 사진" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default youtubeFooter;
