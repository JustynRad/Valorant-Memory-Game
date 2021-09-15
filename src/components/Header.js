import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div id="header">
            <div id="header-left-section">
                <div id="header-title">
                    <h1>Agent Memory Game</h1>
                </div>
                <span>
                    Get points by click on an image once!
                </span>
            </div>
            <div id="header-right-section">
                <span>Score: {props.score}</span>
                <span>Best Score: {props.bestScore}</span>
            </div>
        </div>
    );
};

Header.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number,
};

export default Header;