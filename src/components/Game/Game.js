/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import Numbers from '../Numbers/Numbers';

class Game extends Component {
    static radomNumber = ()=> 1 + Math.floor(Math.random() * 9);
    state = {
        selectedNumbers: [],
        usedNumbers: [],
        noOfStars: Game.radomNumber(),
        answerIsCorrect: null,
        redraws: 5
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber),
            answerIsCorrect: null
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber),
            answerIsCorrect: null
        }));
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.noOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            noOfStars: Game.radomNumber()
        }));
    };

    redraw = () => {
        if (this.state.redraws === 0){return;}
        this.setState(prevState => ({
            noOfStars: Game.radomNumber(),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1
        }))
    };

    render() {
        const {selectedNumbers, noOfStars, answerIsCorrect, usedNumbers, redraws} = this.state;
        return (
            <div className="container">
                <h1>Play 9</h1>
                <hr/>
                <div className="row">
                    <Stars noOfStars={noOfStars}/>
                    <Button
                        selectedNumbers={selectedNumbers}
                        onCheckAnswer={this.checkAnswer}
                        onAcceptAnswer={this.acceptAnswer}
                        onRedraw={this.redraw}
                        answerIsCorrect={answerIsCorrect}
                        redraws={redraws}/>
                    <Answer selectedNumbers={selectedNumbers} onUnselectNumber={this.unselectNumber}/>
                </div>
                <br/>
                <Numbers
                    selectedNumbers={selectedNumbers}
                    onSelectNumber={this.selectNumber}
                    usedNumbers={usedNumbers}/>
            </div>
        )
    }
};

export default Game;
