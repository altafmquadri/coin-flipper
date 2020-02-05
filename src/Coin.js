import React from 'react';
import './Coin.css'

const Coin = (props) => {
    console.log(props)
    return (
        <div className="Coin">
            <img alt={props.coinDisplay} src={props.coinDisplay}/>
        </div>
    )
}

export default Coin