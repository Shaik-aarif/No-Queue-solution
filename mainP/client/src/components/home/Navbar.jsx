import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase.config';
import { useState } from 'react';
import { useStateValue } from "../../context/StateProvider";
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
import '../Styles/home_styles/Navbar.css'
import avatar from '../../Assets/images/avatar.png'
import { actionType } from "../../context/reducer";
const Navbar = () => {
  // const { loginWithRedirect , isAuthenticated , logout  /*,user*/ } = useAuth0();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);



  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };



  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };




  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar_fixed" id = "navbar">
  <a className="navbar-brand" href="/">NoQ</a>
     
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
      

      {/* //auth 0 authentication code */}
    {/* {
      isAuthenticated ? (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
        </li>) : (
        <li>
        <button className="btn btn-outline-success my-2 my-sm-0 mr-10" onClick={() => loginWithRedirect()}>Log In/Sign Up</button>
        </li>
      )
    } */}

    {/* <li>
    {
      isAuthenticated&&<p>
        Hello  , {user.name}
      </p>
    }
    </li> */}
    
    
    </ul>
    <div className="userAvatar relative">
      <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : avatar}  className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full " alt="userProfile" 
        onClick={login}

      />
    </div>
    {/* dropdown menu */}
    {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "0222learning.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}

             {/* mobile */}



{/* 
 */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          // onClick={showCart}
        >
          {/* <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )} */}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          {/* <img src={Logo} className="w-8 object-cover" alt="logo" /> */}
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "0222learning@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
