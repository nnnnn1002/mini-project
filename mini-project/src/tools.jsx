import React from 'react';
import { useNavigate } from 'react-router-dom';
import './tools.css'; 

function Tools() {
  const navigate = useNavigate();

  return (
    <div className="Tools">
      <h1 className="Title4"> 도구 선택 </h1>
    
      
      <button className="Back-button" onClick={() => navigate('/Start1')}>
        { "<" }
      </button>
      <button className="Drink" onClick={() => navigate(('/Drink'))}>
        { ">" }
      </button>
    </div>
  );
}

export default Tools;