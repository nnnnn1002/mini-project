import React, { useState } from 'react';
import './Start1.css';
import dolsot from './assets/dolsot.png';

const INGREDIENTS = [
      { id: 'rice', name: '밥', top: '165px', left: '240px', size : '200px' },
      { id: 'pasta', name: '스파게티', top: '180px', left: '270px', size: '200px'},
      { id: 'vietnamNoodle', name: '쌀국수면', top: '200px', left: '290px', size: '200px' },
      { id: 'egg', name: '계란후라이', top: '215px', left: '320px',size: '200px' },
      { id: 'sweetpotato', name: '고구마', top: '220px', left: '355px', size : '200px' },
      { id: 'pumpkin', name: '애호박', top: '240px', left: '410px', size : '150px' },
      { id: 'carrot', name: '당근', top: '228px', left: '460px', size : '150px' },
      { id: 'meat', name: '돈까스', top: '200px', left: '495px', size : '180px' },
      { id: 'mushroom', name: '표고버섯', top: '160px', left: '495px', size : '170px' },
      { id: 'kimchi', name: '볶음 김치', top: '140px', left: '450px', size : '170px' },
      { id: 'spinach', name: '시금치', top: '120px', left: '400px', size : '170px' },
      { id: 'salmon', name: '연어', top: '200px', left: '170px', size : '200px' },
      { id: 'bean', name: '콩나물', top: '240px', left: '250px', size : '200px' },
      { id: 'sauce', name: '고추장', top: '180px', left: '195px' , size : '200px'},
      { id: 'cheese', name: '체다치즈', top: '165px', left: '155px', size : '200px' },
      { id: 'brown', name: '고사리', top: '270px', left: '180px' , size : '200px'},
      { id: 'raddish', name: '무생채', top: '235px', left: '215px' , size : '200px'},
      { id: 'green', name: '파', top: '155px', left: '245px' , size : '200px'},
];

function Start1() {
      const [activeItems, setActiveItems] = useState([]);

      const toggleItem = (id) => {
        setActiveItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
      };

      const getImageUrl = (id) => {
        return new URL(`./assets/${id}.png`, import.meta.url).href;
      };

      return (
        <div className="Start1Container">
          <p className="Title2">재료 선택하기</p>
          <div className="bowl" style={{ position: 'relative' }}>
            <img src={dolsot} alt="돌솥" className="dolsot-img" />
            {INGREDIENTS.map(item => (
              activeItems.includes(item.id) && (
                <img 
                  key={item.id}
                  src={getImageUrl(item.id)}
                  style={{ position: 'absolute', top: item.top, left: item.left, width: item.size }}
                  alt=""
                />
              )
            ))}
          </div>
          <div className="button-container">
            {INGREDIENTS.map(item => (
              <button key={item.id} className={item.id} onClick={() => toggleItem(item.id)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
  );
}

export default Start1;