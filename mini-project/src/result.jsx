import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSuccess = location.state?.isSuccess ?? false;

  return (
    <div className={`ResultContainer ${isSuccess ? 'success' : 'fail'}`}>
      <div className="ResultCard">
        <h1>{isSuccess ? '🍲 성공!' : '🚨 삐삐-!'}</h1>
        <p>{isSuccess ? '완벽한 고향의 맛입니다!' : '재료나 도구가 잘못되었어요.'}</p>
        <button onClick={() => navigate('/Start1')}>다시 하기</button>
      </div>
    </div>
  );
}
export default Result;