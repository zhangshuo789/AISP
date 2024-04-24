import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            AISP皮影体验馆 <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                首页
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/Ps板块" className="nav-links" onClick={closeMobileMenu}>
                ps板块
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/模型训练板块" className="nav-links" onClick={closeMobileMenu}>
                模型训练板块
              </Link>
            </li>
            <li className='nav-links-mobile'>
              <Link to="/AiQa" className="nav-links" onClick={closeMobileMenu}>
                AI问答
              </Link>
            </li>
            </ul>
          {button && <Button buttonStyle='btn--outline'>AI问答</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

