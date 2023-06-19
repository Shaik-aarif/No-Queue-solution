import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import {Link} from 'react-router-dom'
import '../Styles/home_styles/Navbar.css'

const Navbar = () => {
  const { loginWithRedirect , isAuthenticated , logout  /*,user*/ } = useAuth0();

  // const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_fixed" id = "navbar">
  <a className="navbar-brand" href="/">NoQ</a>
      {/* <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button> */}
      {/* <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09"> */}
    <ul className="navbar-nav ml-auto gap-8">
      <li className="nav-item active">
        <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#AboutUs">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#Services">Services</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/">Order now</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Order Status</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/">How it Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact Us</a>
      </li>
      
    {
      isAuthenticated ? (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
        </li>) : (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => loginWithRedirect()}>Log In/Sign Up</button>
        </li>
      )
    }

    {/* <li>
    {
      isAuthenticated&&<p>
        Hello  , {user.name}
      </p>
    }
    </li> */}
    
    
    </ul>
    {/* </div> */}
</nav>
    </div>
  )
}

export default Navbar
