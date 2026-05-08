import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Loading.css';

function Loading() {
  const [pct, setPct] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { activeItems, activeTool } = location.state || { activeItems: [], activeTool: null };

  const msgs = [
    "재료를 고루 섞는 중...",
    "테이블 정돈 중...",
    "수저 세팅 중...",
    "음료 세팅 중",
    "거의 다 됐어요!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPct(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          return 100;
        }
        return prev + 1;
      });
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="LoadingContainer">
      <div className={`bowl-anim ${isDone ? '' : 'spinning'}`}>🥄</div>

      {!isDone ? (
        <>
          <p className="loading-title">
            조금만 기다려주세요!<span className="dots"><span>.</span><span>.</span><span>.</span></span>
          </p>
          <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="pct">{pct} / 100</p>
          <p className="msg">{msgs[Math.floor(pct / 20)] || msgs[4]}</p>
        </>
      ) : (
        <>
          <p className="done-title">고향 비빔밥 완성</p>
          <p className="done-title-result">과연 고향에서 먹던 비빔밥을 잘 흉내내었을까요??</p>
          <button
            className="result-btn"
            onClick={() => navigate('/result', { state: { activeItems, activeTool } })}
          >
            결과 보기
          </button>
        </>
      )}
    </div>
  );
}

export default Loading;