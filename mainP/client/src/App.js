
import React, { useEffect } from "react";
import {createBrowserRouter , RouterProvider  } from 'react-router-dom'


import Home from "./components/home/Home";
import Search from "./components/Customer/Search"
import Registration from "./components/Merchant/Registration";
import AddMenu from "./components/Merchant/AddMenu";
import Payment from "./components/Payment/Payment";
import CustomerPage from "./components/Customer/CustomerPage";
import { AnimatePresence } from "framer-motion";

import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";





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

  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence >
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
    </AnimatePresence>
  );
}

export default App;


