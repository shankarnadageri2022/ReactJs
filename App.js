import logo from './logo.svg';
import './App.css';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';
import Axiof from 'axios';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';
import Home from './Home';
import FetchAllServices from './FetchAllServices';
import AddCustomer from './AddCustomer';
import NavBar from './NavBar';
import Login from './Login';
import AboutUs from './AboutUs';

function Apps() {
  return (
    <div className="App">
     {/* <CounterOne></CounterOne> */}
     {/* <CounterTwo></CounterTwo> */}
     {/* <FetchAllServices/> */}
     <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counterone" element={<CounterOne />}/>
        <Route path="/service/all" element={<FetchAllServices />}/>
        <Route path="/addCustomer" element={<AddCustomer/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
     </Router>
    
    </div>
  );
}

export default Apps;
