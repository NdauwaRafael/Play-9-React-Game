/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React, {Component} from 'react';

import Answer from '../Answer/Answer';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import Numbers from '../Numbers/Numbers';
import DoneFrame from '../Done/DoneFrame'
var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
        var combinationSum = 0;
        for (var j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
};

class Game extends Component {
    static radomNumber = () => 1 + Math.floor(Math.random() * 9);
    static initialState = ()=>({
        selectedNumbers: [],
        usedNumbers: [],
        noOfStars: Game.radomNumber(),
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null

    });
    state = Game.initialState();

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
        }), this.updateDoneStatus);
    };

    redraw = () => {
        if (this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            noOfStars: Game.radomNumber(),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus)
    };

    possibleSolution = ({noOfStars, usedNumbers})=> {
        let possibleNumbers = Array.from(Array(9).keys(), n=>n+1).filter(number => usedNumbers.indexOf(number) === -1);
        return possibleCombinationSum(possibleNumbers, noOfStars);
    };

    updateDoneStatus = ()=>{
        this.setState(prevState => {
            if(prevState.usedNumbers.length === 9){
                return {doneStatus: 'Done! Nice!'};
            }
            if(prevState.redraws===0 && !this.possibleSolution(prevState)){
                return {doneStatus: 'Game Over!'};
            }
        })
    };

    resetGame = ()=>{
        this.setState(Game.initialState())
    };

    render() {
        const {selectedNumbers, noOfStars, answerIsCorrect, usedNumbers, redraws, doneStatus} = this.state;
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

                {doneStatus ?
                        <DoneFrame doneStatus={doneStatus} onResetGame={this.resetGame}/>
                        :
                        <Numbers
                            selectedNumbers={selectedNumbers}
                            onSelectNumber={this.selectNumber}
                            usedNumbers={usedNumbers}/>
                }
            </div>
        )
    }
};

export default Game;
