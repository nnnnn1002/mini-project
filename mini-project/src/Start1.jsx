import React, { useState } from 'react';
import './Start1.css';
import dolsot from './assets/dolsot.png';
import { useNavigate } from 'react-router-dom';

const INGREDIENTS = [
      { id: 'rice', name: '밥', top: '25%', left: '36%', size : '200px' },
      { id: 'pasta', name: '스파게티', top: '29%', left: '39%', size: '200px'},
      { id: 'vietnamNoodle', name: '쌀국수면', top: '32%', left: '42%', size: '200px' },
      { id: 'egg', name: '계란후라이', top: '32%', left: '45%',size: '200px' },
      { id: 'sweetpotato', name: '고구마', top: '31%', left: '48%', size : '200px' },
      { id: 'pumpkin', name: '애호박', top: '32%', left: '53%', size : '150px' },
      { id: 'carrot', name: '당근', top: '28%', left: '55%', size : '150px' },
      { id: 'meat', name: '돈까스', top: '21%', left: '52%', size : '180px' },
      { id: 'mushroom', name: '표고버섯', top: '19%', left: '48%', size : '170px' },
      { id: 'kimchi', name: '볶음 김치', top: '18%', left: '44%', size : '170px' },
      { id: 'spinach', name: '시금치', top: '20%', left: '41%', size : '150px' },
      { id: 'salmon', name: '연어', top: '25%', left: '40%', size : '130px' },
      { id: 'bean', name: '콩나물', top: '26%', left: '43%', size : '130px' },
      { id: 'sauce', name: '고추장', top: '30%', left: '45%' , size : '140px'},
      { id: 'cheese', name: '체다치즈', top: '24%', left: '45%', size : '130px' },
      { id: 'brown', name: '고사리', top: '27%', left: '47%' , size : '150px'},
      { id: 'raddish', name: '무생채', top: '26%', left: '50%' , size : '140px'},
      { id: 'green', name: '파', top: '28%', left: '50%' , size : '180px'},
];

function Start1() {
      const [activeItems, setActiveItems] = useState([]);

      const toggleItem = (id) => {
        setActiveItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
      };

      const getImageUrl = (id) => {
        return new URL(`./assets/${id}.png`, import.meta.url).href;
      };

      const navigate = useNavigate();

      const handleNextPage = () => {
      navigate('/Tools', { state: { activeItems: activeItems } });
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
                  style={{ position: 'absolute', top: item.top, left: item.left, width: item.size, maxWidth: '22%' }}
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
          <div className="goToMain" onClick={() => navigate('/')}> { "<" } </div>
          <div className="goToNext" onClick={() => navigate('/tools', { state: { activeItems } })}> { ">" } </div>
        </div>
  );
}

export default Start1;