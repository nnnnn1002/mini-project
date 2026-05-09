import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './result.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSuccess = location.state?.isSuccess ?? false;

  const [phase, setPhase] = useState('init');
  // 성공: init → ascend → arrive
  // 실패: init → explode → bubble

  useEffect(() => {
    if (isSuccess) {
      const t1 = setTimeout(() => setPhase('ascend'), 100);
      const t2 = setTimeout(() => setPhase('arrive'), 2800);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      const t1 = setTimeout(() => setPhase('explode'), 100);
      const t2 = setTimeout(() => setPhase('bubble'), 900);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isSuccess]);

  if (isSuccess) {
    return (
      <div className="ResultContainer success-bg">

        {/* 구름들 배경 */}
        <div className={`clouds-wrap ${phase === 'ascend' || phase === 'arrive' ? 'clouds-show' : ''}`}>
          <div className="cloud c1">☁️</div>
          <div className="cloud c2">☁️</div>
          <div className="cloud c3">☁️</div>
          <div className="cloud c4">☁️</div>
          <div className="cloud c5">☁️</div>
        </div>

        {/* 비빔밥 그릇이 구름 타고 올라감 */}
        <div className={`bowl-ascend ${phase === 'ascend' ? 'go-up' : ''} ${phase === 'arrive' ? 'arrived' : ''}`}>
          <span className="bowl-emoji">🥣</span>
          {(phase === 'ascend') && <span className="riding-cloud">☁️</span>}
        </div>

        {/* 짠! 도착 카드 */}
        {phase === 'arrive' && (
          <div className="arrive-card">
            <div className="sparkles">✨🌟✨🌟✨</div>
            <h1 className="arrive-title">최고의 비빔밥입니다!</h1>
            <p className="arrive-sub">진정한 고향의 맛을 완성했습니다 🎉</p>
            <p className="arrive-sub2">당신은 비빔밥 장인입니다 👑</p>
            <button className="retry-btn" onClick={() => navigate('/Start1')}>
              다시 하기
            </button>
          </div>
        )}

      </div>
    );
  }

  // 실패
  return (
    <div className="ResultContainer fail-bg">

      {/* 쟁반 */}
      <div className={`tray-wrap ${phase === 'explode' ? 'exploding' : ''}`}>
        <span className="tray-emoji">🍽️</span>
        {phase === 'explode' && (
          <>
            <span className="particle p1">💥</span>
            <span className="particle p2">🔥</span>
            <span className="particle p3">💥</span>
            <span className="particle p4">🔥</span>
            <span className="particle p5">⚡</span>
          </>
        )}
      </div>

      {/* 말풍선 */}
      {phase === 'bubble' && (
        <div className="speech-bubble">
          <p className="bubble-text">이게 고향 비빔밥이라고????</p>
          <p className="bubble-text2">다시 생각해봐. 🤨</p>
          <button className="retry-btn fail-retry" onClick={() => navigate('/Start1')}>
            다시 하기
          </button>
        </div>
      )}

    </div>
  );
}

export default Result;