import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from './images/img2.png'

function FetchAllServices() {
    const [services, setServices] = useState([])
    FetchAllServices = () => {
        Axios.get("http://localhost:8080/serviceList/all").then(resp => setServices(resp.data))
    }
    useEffect(FetchAllServices, []);
    return (
        <div class="row">
            {
                services.map((p, index) =>

                    <div key={index} className="col-sm-3 mb-5">

                        {/* {p.serviceId}

                        {p.serviceName}
                        {p.price} */}
                        <Link to="#" >
                            <div className="card h-100" style={{ width: "300px",height:"300px" }}>
                                <img className="card-img-top" src={img1} alt="Card image" />
                                <div class="card-body">
                                    <h4 className="card-title">{p.serviceName }</h4>
                                    <p className="card-text">{p.price}</p>

                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
            

            <div style={{ float: "none" }} className="form-group">
           
                <button className="btn btn-dark" style={{marginTop:"100px",marginLeft:"500px"}}><Link to="/"><label style={{ color: "white" }}>Back To Home</label></Link></button>

            </div>
        </div>
    )
}
export default FetchAllServices;