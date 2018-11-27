/**
 * Created by Raphael Karanja on 27/11/2018.
 */
import React from 'react';
const Stars =  ()=> {
    const noOfStars = 8;
    let stars = [];
    for(let i = 0; i<noOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"> </i>)
    }
    return (
        <div className="col-5">
            {stars}
        </div>
    )
};

export default Stars;
