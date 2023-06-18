
import React from "react";
import {createBrowserRouter , RouterProvider  } from 'react-router-dom'

// importing all the 
import Home from "./components/home/Home";
import Search from "./components/Customer/Search"
import Registration from "./components/Merchant/Registration";
import AddMenu from "./components/Merchant/AddMenu";






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

])

// app function
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
