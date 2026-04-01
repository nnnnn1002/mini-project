import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HowTo.css'; // CSS 파일도 연결해두면 좋아요!

function HowTo() {
  const navigate = useNavigate();

  return (
    <div className="HowToContainer">
      <h1>[ 게임 설명 ]</h1>
      <div className="Content">
        <p>1. 시작 버튼을 눌러 게임을 시작하세요.</p>
        <p>2. 화면에 나오는 재료들 중 비빔밥에 꼭 필요한 재료를 선택하세요.</p>
        <p>3. 고향의 맛을 재현하면 성공!</p>
      </div>
      
      {/* 다시 메인 화면으로 돌아가는 버튼 */}
      <button className="Back-button" onClick={() => navigate('/')}>
        뒤로 가기
      </button>
    </div>
  );
}

export default HowTo;