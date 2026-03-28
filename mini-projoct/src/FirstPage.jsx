import React from 'react';
import './FirstPage.css';
function FirstPage() {
    return (
        <div className="FirstPageContainer">
            <h1 className="Title">고향 비빔밥</h1>
            <p className="Description">고향에서 만들어 먹던 레시피를 맞혀보세요!</p>
            <button className="Howtodo">게임 설명</button>
            <button className="Start">게임 시작</button>
        </div>
    );
}
export default FirstPage;