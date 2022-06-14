import React from 'react'
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div>
            <h2>Welcome to My Store</h2>
           <Link to="/counterone">Click Here to Counter</Link> <br/>
           <Link to="/service/all">Get All Services</Link> <br/>
           <Link to="addCustomer">Add Customer</Link>
        </div>
    )

} export default Home;