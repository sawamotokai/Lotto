import React, { Component } from 'react';
import LotBall from './LotBall';
import './Lottery.css';

class Lottery extends Component{

    static defaultProps = { ball_num: 6, max_num: 40 };

    constructor(props) {
        super();
        this.state = { nums: [] };
        this.gen_nums = this.gen_nums.bind(this);
    }

    gen_nums() {
        let nums = [];
        while (nums.length < this.props.ball_num) {
            let temp_num = Math.floor(Math.random() * this.props.max_num + 1);
            if (nums.indexOf(temp_num) === -1){
                nums.push(temp_num);
            }
        }
        this.setState({ nums: nums });
    }

    render() {
        return (
            <div className="Lottery">
                <div>
                <h1 className="Lottery-title">{this.props.title}</h1>
                {this.state.nums.map((num) => {
                    return <LotBall num={num} />
                })}
                </div>
                <button onClick={this.gen_nums}>Generate</button>
            </div>
        );
    }
}

export default Lottery;
