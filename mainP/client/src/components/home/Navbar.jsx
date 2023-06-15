import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../Styles/Navbar.css'

const Navbar = () => {
  const { loginWithRedirect , isAuthenticated , logout , user } = useAuth0();


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Arif</a>
  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Action</a>
          <a className="dropdown-item" href="/">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/"tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    <button className="btn btn-outline-success my-2 my-sm-0 mr-10" type="submit">Register</button>
    {
      isAuthenticated ? (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
        </li>) : (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => loginWithRedirect()}>Log In</button>
        </li>
      )
    }

    <li>
    {
      isAuthenticated&&<p>
        Hello  , {user.name}
      </p>
    }
    </li>
    
    
    </ul>
</nav>
    </div>
  )
}

export default Navbar
