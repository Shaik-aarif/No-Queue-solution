
import React from "react";
import {createBrowserRouter , RouterProvider } from 'react-router-dom'

// importing all the 
import Home from "./components/home/Home";





// root routes
const router = createBrowserRouter([
  {
    path : "/",
    element : <div><Home></Home></div>
  },
 
 
  
  
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
