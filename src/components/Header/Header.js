import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <ul className="item">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{ float: 'right' }}><a href="#about">About</a></li>
            </ul>
        </div>
    );
};

export default Header;