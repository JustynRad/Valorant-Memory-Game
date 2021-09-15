import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const [ wasClicked, setWasClicked ] = useState(false);

    const handleClick = () => {
        setWasClicked(!wasClicked);
        if (wasClicked) {
            props.endCurrentStage();
        } else {
            props.incrementScore();
        }
        props.randomizeCards();
    };

    useEffect(() => {
        if (props.reset) {
            setWasClicked(false);
        }
    }, [props.reset]);

    return (
        <div className="card" key={props.image} onClick={handleClick}>
            <img src={props.image} alt={props.name}></img>
        </div>
    )
};

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    reset: PropTypes.bool,
    endCurrentStage: PropTypes.func,
    incrementScore: PropTypes.func,
    randomizedCards: PropTypes.func,
};

export default Card; 