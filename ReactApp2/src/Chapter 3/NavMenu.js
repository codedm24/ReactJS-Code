import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Login from "./Login";
import * as Chapter06 from '../Chapter 6';
function NavMenu() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/" activeStyle={{backgroundColor:'black',color:'white'}}>Home</NavLink></li>
            <li><NavLink exact to="/Login" activeStyle={{backgroundColor:'black',color:'white'}}>Login</NavLink></li>
            <li><NavLink to="/aboutUs" activeStyle={{backgroundColor:'black',color:'white'}}>About Us</NavLink>
              <ul>
                <li><NavLink to="/aboutUs/team" activeStyle={{backgroundColor:'black',color:'white'}}>Meet the Team</NavLink></li>
                <li><NavLink to="/aboutUs/history" activeStyle={{backgroundColor:'black',color:'white'}}>Company History</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contactUs" activeStyle={{backgroundColor:'black',color:'white'}}>Contact Us</NavLink></li> 
            
            <li><NavLink to={Chapter06.CounterClass2} activeStyle={{backgroundColor:'black',color:'white'}}>CounterClass2</NavLink></li> 
          </ul>
  
          
          <Routes>
          <Route path="/" />
          <Route exact path="/Login" element={<Login/>}>
          </Route>
           <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/aboutUs/team"/>
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default NavMenu;

  function AboutUs(){
    return (
        <p>Home Route</p>
    )
}

// function Login(){
//     return (
//         <p>Login Route</p>
//     )
//}