import React, { Component } from 'react'
import './LotBall.css'

class LotBall extends Component {
    render() {
        return (
            <div className="LotBall">
                {this.props.num}
            </div>
        );
    }
}


export default LotBall;