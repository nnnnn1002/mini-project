import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Loading.css';

const CORRECT_ITEMS = ['rice', 'egg', 'pumpkin', 'carrot', 'mushroom', 'spinach', 'bean', 'sauce', 'brown', 'raddish'];
const CORRECT_TOOL  = 'kor';
const CORRECT_DRINK = 'maesil';

function Loading() {
  const [pct, setPct] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { activeItems = [], activeTool = null, activeDrink = null } = location.state || {};

  const checkSuccess = () => {
    console.log('activeItems:', activeItems);
    console.log('activeTool:', activeTool);
    console.log('activeDrink:', activeDrink);

    const itemsCorrect =
      activeItems.length === CORRECT_ITEMS.length &&
      CORRECT_ITEMS.every(id => activeItems.includes(id));
    const toolCorrect  = activeTool  === CORRECT_TOOL;
    const drinkCorrect = activeDrink === CORRECT_DRINK;

    console.log('itemsCorrect:', itemsCorrect);
    console.log('toolCorrect:', toolCorrect);
    console.log('drinkCorrect:', drinkCorrect);

    return itemsCorrect && toolCorrect && drinkCorrect;
  };

  const msgs = ["재료를 고루 섞는 중...", "테이블 정돈 중...", "수저 세팅 중...", "음료 세팅 중...", "거의 다 됐어요!"];

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
    }, 20); // 40ms → 20ms 로 반으로 줄임
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="LoadingContainer">
      <div className={`bowl-anim ${isDone ? '' : 'spinning'}`}>🥄</div>
      {!isDone ? (
        <>
          <p className="loading-title">조금만 기다려주세요!</p>
          <div className="bar-bg"><div className="bar-fill" style={{ width: `${pct}%` }} /></div>
          <p className="pct">{pct} / 100</p>
          <p className="msg">{msgs[Math.floor(pct / 20)] || msgs[4]}</p>
        </>
      ) : (
        <>
          <p className="done-title">고향 비빔밥 완성</p>
          <button
            className="result-btn"
            onClick={() => navigate('/result', { state: { isSuccess: checkSuccess() } })}
          >
            결과 보기
          </button>
        </>
      )}
    </div>
  );
}

export default Loading;