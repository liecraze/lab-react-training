import React from 'react';
import "./CreditCard.css"; 

const CreditCard = (props) => {
    let secretNum = `**** **** **** ` + props.number.slice(-4);

    return (
        <div className = "box">
        <div className="creditCard" style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}`, width: 300}}>
            <div className="cardType">
                <p><b>{props.type}</b></p>
            </div>
            <div className="cardNumber">
                <p>{secretNum}</p>
            </div>

            <div className="cardInfo">
                <p>Expires: {props.expirationMonth}/{props.expirationYear}<span>{props.bank}</span></p>
                <p>{props.owner}</p>
            </div>
        </div>
        </div>
    )
}

export default CreditCard; 