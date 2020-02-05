import React, { Component } from 'react';
import Coin from './Coin'

const heads = "https://tinyurl.com/react-coin-heads-jpg"
const tails = "https://tinyurl.com/vynycy9"

class CoinFace extends Component {
    state = { 
        flips: 0,
        headCount: 0,
        tailCount: 0,
        coinDisplay: ''
    }

    generateFlip = () => {
        console.log('i am clicked')
        let random = Math.floor(Math.random() * 2)
        random === 0 ? this.setState(
            { 
                flips: this.state.flips + 1,
                headCount: this.state.headCount + 1,
                coinDisplay: heads
            })
            : this.setState(
                { 
                    flips: this.state.flips + 1,
                    tailCount: this.state.tailCount + 1,
                    coinDisplay: tails
                })
    }

    render() { 
        return ( 
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin coinDisplay={this.state.coinDisplay}/>
                <button onClick={this.generateFlip}>Flip Me!!</button>
                <p>Out of {this.state.flips}, there have been {this.state.headCount} heads and 
                {' ' + this.state.tailCount} tails.</p>
            </div>
        );
    }
}

export default CoinFace;