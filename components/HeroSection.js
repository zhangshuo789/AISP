import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom'; // 导入useNavigate

function HeroSection() {
  const navigate = useNavigate(); // 获取navigate函数

  const handleGoClick = () => {
    navigate('/模型训练板块'); // 页面导航到模型训练板块
  }

  return (
    <div className='hero-container'>
        <video src='/videos/video1.mp4' autoPlay loop muted/>
        <h1>开启皮影之旅</h1>
        <p>你还在等什么？</p>
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleGoClick} // 点击Go按钮时触发handleGoClick函数
        >
          Go
        </Button>
    </div>
  )
}

export default HeroSection;


