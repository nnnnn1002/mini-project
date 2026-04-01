import React from 'react';
import './Start1.css';
import dolsot from './assets/dolsot.png';

function Start1() {
  return (
    <div className="Start1Container">
      <p className="Title2">재료 선택하기</p>

        <div className="bowl">
          <img src={dolsot} alt="돌솥" className="dolsot-img" />
        </div>

        <div className ="button-container">
          <button className ="rice">밥</button>
          <button className ="pasta">파스타면</button>
          <button className="vietnamNoodle">쌀국수면</button>
          <button className="egg">계란후라이</button>
          <button className="sweetpotato">고구마</button>
          <button className="pumpkin">애호박</button>
          <button className="carrot">당근</button>
          <button className="meat">돈까스</button>
          <button className="mushromm">표고버섯</button>
          <button className="kimchi">볶음 김치</button>
          <button className="spinach">시금치</button>
          <button className="salmon">연어</button>
          <button className="bean">콩나물</button>
          <button className="sauce">고추장</button>
          <button className="cheese">체다치즈</button>
          <button className="brown">고사리</button>
          <button className="raddish">무생채</button>
          <button className="green">파</button>
        </div>
    </div>
  );
}





export default Start1;