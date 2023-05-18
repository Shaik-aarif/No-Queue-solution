
import React from "react";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

// importing all the 
import Home from "./components/home/Home";
import Password from "./components/Authentication/Password";
import Recovery from "./components/Authentication/Recovery";
import Register from "./components/Authentication/Register";
import Reset from "./components/Authentication/Reset";
import Username from "./components/Authentication/Username";


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
  },
  {
    path : "/Password",
    element : <div>Password route</div>
  },
  {
    path : "/Recovery",
    element : <div>recovery route</div>
  },
  {
    path : "/Reset",
    element : <div>reset route</div>
  },
  {
    path : "/Username",
    element : <div><Username></Username></div>
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
