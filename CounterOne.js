import React from 'react';
import { Link } from 'react-router-dom';
class CounterOne extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })

    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })

    }
    render() {
        return (
            <div>
                <h1>Counter:{this.state.counter}</h1>
                <button onClick={this.increment}>+</button> <button onClick={this.decrement}>-</button>

                <div style={{ float: "none" }} className="form-group">

                    <button className="btn btn-dark" ><Link to="/"><label style={{color:"white"}}>Back To Home</label></Link></button>

                </div>
            </div>
        )
    }

} export default CounterOne;