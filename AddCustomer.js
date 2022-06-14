import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function AddCustomer() {

    const [cName, setCName] = useState("");
    const [cPhone, setCPhone] = useState("");
    const [cEmail, setCEmail] = useState("");
    const [cAddress, setCAddress] = useState("");       
    const [cUserName, setCUserName] = useState("");
    const [cPassword, setCPassword] = useState(""); 

    const handleSubmit = () => {
        const payload = {
            customerName: cName,
            customerPhone: cPhone,
            customerEmail: cEmail,
            customerAddress:cAddress,
            customerUserName:cUserName,
            customerPassword:cPassword
        }
        Axios.post("http://localhost:8080/customer/save", payload).then(resp =>
            alert("Customer saved with id:" + resp.data.customerId));
    }

    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor='cName'>customerName:</label>
                
                    <input type="text" className="form-control" name="cName" value={cName} onChange={e=> setCName(e.target.value)} />
                
            </div>
            <div className="form-group">
                <label htmlFor='cPhone'>customerPhone:</label>
                
                    <input type="text" className="form-control" name="cPhone" value={cPhone} onChange={e=>setCPhone(e.target.value)} />
                
            </div>
            <div className="form-group">
                <label htmlFor='cEmail'>customerEmail:</label>
                
                    <input type="text" className="form-control" name="cEmail" value={cEmail} onChange={e=>setCEmail(e.target.value)} />
                
            </div>
            <div className="form-group">
                <label htmlFor='cAddress'> customerAddress: </label>
               
                    <input type="text" className="form-control" name="cAddress" value={cAddress} onChange={e=>setCAddress(e.target.value)} />
               
            </div>
            <div className="form-group">
                <label htmlFor='cUserName'>customerUserName:</label>
                
                    <input type="text" className="form-control" name="cUserName" value={cUserName} onChange={e=>setCUserName(e.target.value)} />
                
            </div>
            <div className="form-group">
                <label htmlFor='cPassword'>customerPassword:</label>
                
                    <input type="text" className="form-control" name="cPassword" value={cPassword} onChange={e=>setCPassword(e.target.value)} />
                
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            <div style={{float:"right"}} className="form-group">
            
            <button className="btn btn-dark" ><Link to="/"><label style={{color:"white"}}>Back To Home</label></Link></button>
                
            </div>
        </div>
        
    )
}

export default AddCustomer;