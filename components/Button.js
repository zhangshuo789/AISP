import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    buttonStyle,
    buttonSize,
    destination,
    onClick // 新增onClick prop
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];


    // eslint-disable-next-line
    const navigate = useNavigate(); // 获取navigate函数

    const handleButtonClick = () => {
        if (destination="/AiQa") {
            navigate(destination); // 页面导航到指定的目标界面
        }
        if (onClick) {
            onClick(); // 调用传入的点击事件处理函数
        }
    }

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={handleButtonClick}
            type={type}
        >
            {children}
        </button>
    );
};





