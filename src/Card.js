import React from 'react';

const Card = props => {
    return (
        <div className="card">
            <div className="card_img">
                <img alt="cat" src={props.img}></img>
            </div>
            <div className="card_info">
                <h3>{props.catName}</h3>
                <p>{props.desc}</p>
                <button>Ver mas</button>
            </div>
        </div>
    )
}

export default Card;