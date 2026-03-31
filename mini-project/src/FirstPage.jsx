import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';
import './Start1';
import './HowTo';


function FirstPage() {
    const navigate = useNavigate();

    return (
        <div className="FirstPageContainer">
            <h1 className="Title">고향 비빔밥</h1>
            <p className="Description">고향에서 만들어 먹던 레시피를 맞혀보세요!</p>
            <button className="Howtodo-button" onClick={()=>navigate('/HowTo')}>게임 설명</button>
            <button className="Start-button" onClick={()=>navigate('/Start1')}>게임 시작</button>
        </div>
    );
}
export default FirstPage;