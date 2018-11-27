/**
 * Created by Raphael Karanja on 27/11/2018.
 */

import React from 'react';

const Button = (props) => {
    let button;
    switch (props.answerIsCorrect) {
        case true:
            button =
                <button className="btn btn-sm btn-success" onClick={props.onAcceptAnswer}>
                    <i className="fa fa-check"> </i>
                </button>;
            break;
        case false:
            button =
                <button className="btn btn-sm btn-danger">
                    <i className="fa fa-times"> </i>
                </button>;
            break;
        default:
            button =
                <button
                    onClick={props.onCheckAnswer}
                    className="btn btn-sm btn-secondary"
                    disabled={props.selectedNumbers.length === 0}>
                    =
                </button>;
            break
    }
    return (
        <div className="col-2">
            {button}
            <br/><br/>
            <button className="btn btn-sm btn-outline-warning"
                    onClick={props.onRedraw}
                    disabled={props.redraws === 0}>
                <i className="fa fa-refresh"> </i> {props.redraws}
            </button>
        </div>
    )
};

export default Button;