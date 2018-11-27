/**
 * Created by Raphael Karanja on 27/11/2018.
 */
import React from 'react';
const DoneFlame = (props)=>{
    return (
        <div className="text-center">
            <h2>
                {props.doneStatus}
            </h2>

            <button className="btn btn-outline-secondary" onClick={props.onResetGame}>
                Play Again
            </button>
        </div>
    )
}
export default DoneFlame;