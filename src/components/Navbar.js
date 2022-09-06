import { NavLink, useNavigate } from "react-router-dom";
import "../components/styles/navbar.css";
import logo from '../assets/logo.jpg'




export default function Navbar() {
  

  return (
   
    <div  className="Navbar">
      <div>
        <img src={logo}/>

      </div>
      <div className="nav">
              <div className= ''>
                <NavLink  to="" >
                  Home
                </NavLink>
              </div>
              <div className= 'nav'>
                <NavLink   to="" >
                  About
                </NavLink>
              </div>
              <div className= 'nav'>
                <NavLink  to="" >
                  Rooms
                </NavLink>
              </div>
              <div className= 'nav'>
                <NavLink  to="" >
                  Contact us
                </NavLink>
              </div>
            
              
             
             
      </div>


    </div>
  );
}
