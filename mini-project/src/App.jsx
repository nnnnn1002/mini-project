import { Routes, Route } from 'react-router-dom';
import FirstPage from './FirstPage';
import HowTo from './HowTo';
import Start1 from './Start1';
import Tools from './tools';
import Loading from './Loading';
import Result from './Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Start1" element={<Start1 />} />
          <Route path="/HowTo" element={<HowTo />} /> 
          <Route path="/tools" element={<Tools/>}/>
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;