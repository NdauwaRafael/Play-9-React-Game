/**
 * Created by Raphael Karanja on 27/11/2018.
 */
import React from 'react';
const Answer =  (props)=> {
    return (
        <div className="col-5">
            {
                props.selectedNumbers.map((number, i)=> <span key={i}>{number}</span>)
            }
        </div>
    )
};

export default Answer;