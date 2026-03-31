import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import Start1 from './Start1'; // ⭐ 여기서 이름을 Start1으로 딱 맞췄죠!
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 1. 처음에 보여줄 화면 (루트 경로) */}
          <Route path="/" element={<FirstPage />} />

          {/* 2. 버튼 누르면 이동할 화면 (Start1 페이지) */}
          <Route path="/start" element={<Start1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;