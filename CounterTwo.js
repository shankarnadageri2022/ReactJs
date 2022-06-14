import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CounterTwo() {
    const [counter,setCounter] = useState(100);
    const increment = function() {
        setCounter(counter+1);
    }
    const decrement = function() {
        setCounter(counter-1);
    }
    return(
        <div>
            <h1>Counter Demo using Functional Component with Hooks</h1>
            <h3>Counter : {counter}</h3>
            <button  className="btn btn-success" onClick={increment}>+</button>  <button className="btn btn-success" onClick={decrement}>-</button>

            <div style={{float:"none"}} className="form-group">
            
            <button className="btn btn-dark" ><Link to="/"><label style={{color:"white"}}>Back To Home</label></Link></button>
                
            </div>

        </div>
        
    )
}
export default CounterTwo;