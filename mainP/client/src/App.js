
import React from "react";
import {createBrowserRouter , RouterProvider  } from 'react-router-dom'

// importing all the 
import Home from "./components/home/Home";
import Search from "./components/Customer/Search"
import Registration from "./components/Merchant/Registration";
import AddMenu from "./components/Merchant/AddMenu";
import Payment from "./components/Payment/Payment";
import CustomerPage from "./components/Customer/CustomerPage";
import { AnimatePresence } from "framer-motion";






// root routes
const router = createBrowserRouter([
  {
    path : "/",
    element : <div><Home></Home></div>
  },
  {
    path : "/Search",
    element : <div><Search></Search></div>
  },  
  {
    path : "/Registration",
    element : <div><Registration></Registration></div>
  }, 
  {
    path : "/AddMenu",
    element : <div><AddMenu></AddMenu></div>
  },
  {
    path : "/Payment",
    element : <div><Payment></Payment></div>
  },
  {
    path : "/CustomerPage",
    element : <div><CustomerPage></CustomerPage></div>
  },


])

// app function
function App() {
  return (
    <AnimatePresence >
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
    </AnimatePresence>
  );
}

export default App;


