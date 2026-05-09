import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './tools.css';

// 1. 사용할 이미지들을 모두 import 합니다.
import dolsotKit from './assets/dolsotKit.png';
import korImg from './assets/kor.png';
import frenchImg from './assets/french.png';
import indiaImg from './assets/india.png';
import sikhyeImg from './assets/sikhye.png';
import sujeonggwaImg from './assets/sujeonggwa.png';
import maesilImg from './assets/maesil.png';
import misutgaruImg from './assets/misutgaru.png';

function Tools() {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeItems } = location.state || { activeItems: [] };

  const [activeTool, setActiveTool] = useState(null);
  const [activeDrink, setActiveDrink] = useState(null);

  // 2. ID값과 import한 이미지를 매핑합니다.
  const toolImages = {
    kor: korImg,
    french: frenchImg,
    india: indiaImg
  };

  const drinkImages = {
    sikhye: sikhyeImg,
    sujeonggwa: sujeonggwaImg,
    maesil: maesilImg,
    misutgaru: misutgaruImg
  };

  return (
    <div className="Tools">
      <h1 className="Title4">비빔밥 한상 완성하기</h1>

      <div className="tray-layout">
        <div className="bowl-wrap">
          <img src={dolsotKit} alt="돌솥 키트" className="dolsotKit" />
          
          {/* 3. 문자열 경로 대신 매핑된 객체에서 이미지를 가져옵니다. */}
          {activeTool && (
            <img src={toolImages[activeTool]} className="placed-tool" alt="수저" />
          )}
          
          {activeDrink && (
            <img src={drinkImages[activeDrink]} className="placed-drink" alt="음료" />
          )}
        </div>

        <div className="right-panel">
          {/* 수저 선택 */}
          <div className="selection-container">
            <p className="selection-label">수저 선택하기</p>
            <div className="slot-buttons">
              {[
                { id: 'kor', label: '숟가락' },
                { id: 'french', label: '포크' },
                { id: 'india', label: '손' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  className={`choice-btn ${activeTool === id ? 'active' : ''}`}
                  onClick={() => setActiveTool(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 음료 선택 */}
          <div className="selection-container">
            <p className="selection-label">음료 선택하기</p>
            <div className="slot-buttons">
              {[
                { id: 'sikhye', label: '식혜' },
                { id: 'sujeonggwa', label: '수정과' },
                { id: 'maesil', label: '매실차' },
                { id: 'misutgaru', label: '미숫가루' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  className={`choice-btn ${activeDrink === id ? 'active' : ''}`}
                  onClick={() => setActiveDrink(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="Back-button" onClick={() => navigate('/Start1')}>{'<'}</button>
      <button 
        className="goforloading" 
        onClick={() => navigate('/loading', { state: { activeItems, activeTool, activeDrink } })}
      >
        {'>'}
      </button>
    </div>
  );
}

export default Tools;