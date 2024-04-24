import React from 'react';
import './Footer.css';
import { Link } from'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          联系QQ：1990849832
        </p>
        <p className='footer-subscription-text'>
          联系邮箱：zhangshuo_0823@qq.com
        </p>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              AISP皮影体验馆 <i className='fab fa-typo3'/>
            </Link>
          </div>
          <small className='website-rights'>皮影体验馆 ☆ 2024</small>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;

