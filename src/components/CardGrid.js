import React, { useState } from "react";
import Card from './Card';
import PropTypes from 'prop-types';
import Astra from '../images/astra.jpeg';
import Brimstone from '../images/brimstone.jpeg';
import Cypher from '../images/cypher.jpeg';
import Jett from '../images/jett.jpeg';
import KillJoy from '../images/killjoy.jpeg';
import Omen from '../images/omen.jpeg';
import Phoenix from '../images/phoenix.jpeg';
import Raze from '../images/raze.jpeg';
import Reyna from '../images/reyna.jpeg';
import Sage from '../images/sage.jpeg';
import Skye from '../images/skype.jpeg';
import Sova from '../images/sova.jpeg';
import Viper from '../images/viper.jpeg';
import Yoru from '../images/yoru.jpeg';
import './CardGrid.css';

const CardGrid = (props) => {
    const cards = [
       {image: Astra, name: 'Astra'},
       {image: Brimstone, name: 'Brimstone'},
       {image: Cypher, name: 'Cypher'},
       {image: Jett, name: 'Jett'},
       {image: KillJoy, name: 'KillJoy'},
       {image: Omen, name: 'Omen'},
       {image: Phoenix, name: 'Phoenix'},
       {image: Raze, name: 'Raze'},
       {image: Reyna, name: 'Reyna'},
       {image: Sage, name: 'Sage'},
       {image: Skye, name: 'Skye'},
       {image: Sova, name: 'Sova'},
    //    {image: Viper, name: 'Viper'},
    //    {image: Yoru, name: 'Yoru'},
    ];

    const [positions, setPositions] = useState(
        cards.map((value, index) => index)
    );

    const shuffleArray = (array) => {
        let shuffledArray = array.slice(0);
        for (let i = 0; i < shuffledArray.length; i++) {
            const j = Math.floor(Math.random() * shuffledArray.length);
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }

    const randomizeCards = () => {
        setPositions(shuffleArray(positions));
    };

    return (
        <div id="card-grid">
            {positions.map((position) => {
                return (
                    <Card 
                        key={cards[position].name}
                        image={cards[position].image}
                        name={cards[position].name}
                        reset={props.reset}
                        endCurrentStage={props.endCurrentStage}
                        incrementScore={props.incrementScore}
                        randomizeCards={randomizeCards}
                    />
                );
            })}
        </div>
    );
};

CardGrid.propTypes = {
    reset: PropTypes.bool,
    endCurrentStage: PropTypes.func,
    incrementScore: PropTypes.func,
};

export default CardGrid;