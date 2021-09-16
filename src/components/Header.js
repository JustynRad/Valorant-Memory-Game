import React from 'react';
import PropTypes from 'prop-types';
import ValLogo from '../images/val-log.png';
import './Header.css'

const Header = (props) => {
    return (
        <div id="header">
            <div id="header-title">
                <h1>Valorant Memory</h1>
            </div>
            <p>Get points by clicking on an image once!</p>
            <span>Score: {props.score} Best Score: {props.bestScore}</span>
        </div>
    );
};

Header.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number,
};

export default Header;