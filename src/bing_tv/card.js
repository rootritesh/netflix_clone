import React from 'react';
import Data from './data';


function Card(props) { 
    return(
        <div className="pop_nef">
            <div className="pop_item">

            <div className="pop_link">
            <a href={props.link} target="_blank">
                <img src={props.imgs} alt="test"></img>
            </a>
            </div>
            <div className="pop_name">
            <h1>{props.name}</h1>
            </div>
            </div>
        </div>

    );
}




export default Card;