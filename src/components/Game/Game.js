/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import Numbers from '../Numbers/Numbers';

class Game extends Component {
    render(){
        return (
            <div className="container">
                <h1>Play 9</h1>
                <hr/>
                <div className="row">
                    <Stars/>
                    <Button/>
                    <Answer/>
                </div>
                <br />
                <Numbers />
            </div>
        )
    }
};

export default Game;
