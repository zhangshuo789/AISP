import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import PsBlock from './components/pages/PsBlock'; // 修改为PsBlock
import AiQa from './components/pages/AiQa';
import ModelTrainingBlock from './components/pages/ModelTrainingBlock';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ps板块" element={<PsBlock />} />  {/* 将路由路径改为/Ps板块 */}
      <Route path="/模型训练板块" element={<ModelTrainingBlock />} />
      <Route path="/AiQa" element={<AiQa />} />

    </Routes>
  </Router>
  );
}

export default App;






