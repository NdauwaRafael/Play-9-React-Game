/**
 * Created by Raphael Karanja on 27/11/2018.
 */

import React from 'react';
const Button =  (props)=> {
    return (
        <div className="col-2">
            <button className="btn btn-sm btn-secondary" disabled={props.selectedNumbers.length ===0}>=</button>
        </div>
    )
};

export default Button;