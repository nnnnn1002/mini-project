import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import dolsotKit from './assets/dolsotKit.png';
import './tools.css'; 

function Tools() {
  const navigate = useNavigate();
  const location = useLocation();

  const { activeItems } = location.state || { activeItems: [] };

  const [activeTool, setActiveTool] = useState(null);

  const toggleTool = (id) => {
    setActiveTool(activeTool === id ? null : id);
  };

  return (
    <div className="Tools">
      <h1 className="Title4"> 도구 선택 </h1>

      <div className="bowl" style={{ position: 'relative' }}>
        <img src={dolsotKit} alt="돌솥 키트" className="dolsotKit" />
        
        
        {activeTool === 'kor' && <img src="/assets/kor.png" className="selected-tool" alt="숟가락" />}
        {activeTool === 'french' && <img src="/assets/french.png" className="selected-tool" alt="포크" />}
        {activeTool === 'india' && <img src="/assets/india.png" className="selected-tool" alt="손" />}
      </div>

      <div className="button-container">
        <button className="spoon" onClick={() => toggleTool('kor')}>숟가락</button>
        <button className="fork" onClick={() => toggleTool('french')}>포크</button>
        <button className="hand" onClick={() => toggleTool('india')}>손</button>
      </div>
      
      {/* 이동 버튼 */}
      <button className="Back-button" onClick={() => navigate('/Start1')}>
        { "<" }
      </button>
      <button classname="Drink" onClick={() => navigate('/loading', { state: { activeItems, activeTool } })}>
        { ">" }
      </button>
    </div>
  );
}

export default Tools;