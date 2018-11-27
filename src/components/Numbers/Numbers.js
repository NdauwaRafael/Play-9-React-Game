/**
 * Created by Raphael Karanja on 27/11/2018.
 */
import React from 'react';
const Numbers = (props) => {
    let arrayOfNumbers = Array.from(Array(9).keys(), n=>n+1);
    let checkNumber = number => {
            if(props.selectedNumbers.indexOf(number) >= 0){
                return 'selected';
            }
    };
    return (
        <div className="card text-center">
            <div>
                {
                    arrayOfNumbers.map((number, i) =>
                        <span onClick={()=> props.onSelectNumber(number)} className={checkNumber(number)}  key={i}>{number}</span>
                    )
                }
            </div>
        </div>
    )
};
export default Numbers;