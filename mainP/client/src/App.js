
import React from "react";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

import Home from "./components/home/Home";

// root routes
const router = createBrowserRouter([
  {
    path : "/",
    element : <div><Home></Home></div>
  },
  {
    path : "/register",
    element : <div>register route</div>
  },
  {
    path : "/login",
    element : <div>login route</div>
  }
  
])
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
