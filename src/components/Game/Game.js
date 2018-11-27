/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import Numbers from '../Numbers/Numbers';

class Game extends Component {
    state = {
        selectedNumbers: [],
        noOfStars: 1 + Math.floor(Math.random()*9)
};
    selectNumber = (clickedNumber)=>{
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0){return;}
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };
    unselectNumber = (clickedNumber)=>{
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }));
    };
    render(){
        const {selectedNumbers, noOfStars} = this.state;
        return (
            <div className="container">
                <h1>Play 9</h1>
                <hr/>
                <div className="row">
                    <Stars noOfStars={noOfStars}/>
                    <Button selectedNumbers = {selectedNumbers}/>
                    <Answer selectedNumbers = {selectedNumbers} onUnselectNumber={this.unselectNumber}/>
                </div>
                <br />
                <Numbers selectedNumbers = {selectedNumbers} onSelectNumber={this.selectNumber}/>
            </div>
        )
    }
};

export default Game;
