import React from 'react';
import './Start1.css'; // CSS 파일도 같이 있다면 연결!

function Start1() {
  return (
    <div className="Start1Container">
      <h1>돌솥 비빔밥 만들기 화면</h1>
      <p>여기에 아까 그린 돌솥이랑 재료들이 들어갈 거예요!</p>
      
      {/* 나중에 여기에 그림들을 넣을 겁니다 */}
      <div className="DolsotSection">
        {/* <img src={DolsotImg} alt="돌솥" /> */}
      </div>
    </div>
  );
}

// ⭐ 이 줄이 제일 중요해요! 이래야 App.jsx가 이 파일을 알아봅니다.
export default Start1;