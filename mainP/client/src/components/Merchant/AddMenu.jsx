import React, { useState } from 'react'
import "../Styles/Merchant_styles/AddMenu.css"
import Navbar from '../home/Navbar'
import {MdFastfood} from 'react-icons/md'
import {motion} from "framer-motion"
const AddMenu = () => {

    const [title , setTitle] = useState("");
    const [price , setPrice] = useState("");
    const [timeTaken , setTimeTaken] = useState("");
    const [fields , setFields] = useState(false);
    const [alertStatus , setAlertStatus] = useState("danger");
    const [msg , setMsg] = useState(null);
    const [isLoading , setIsLoading] = useState(false);
    const [imageAsset , setImageAsset] = useState(null);
    



  return (
    <>
        <div className="navbar">
            <Navbar></Navbar>
        </div>
    <div  className="addmenu-section">
    <div className="addmenu-content h-auto min-h-screen flex items-center justify-center">
      <div className="item-border w-[90%] md:w-[75%]  rounded-lg py-3 flex items-center justify-center flex-col ">
        {
            fields && (
                <p className={`w-[95%] text-center rounded-lg p-2  font-semibold ${alertStatus === 'danger' ? 
                'bg-red-400 text-red-800' : 'bg-green-400 text-green-800'
                }`}>{msg}</p>
            )
        }
       <div className="item-name w-[90%] py-2 border-b border-gray-300 flex  items-center justify-start ml-2  gap-2">
          <MdFastfood  className="text-xl text-grey-700"/>
          <input
            type = "text"
            required
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the item name...."
            className="w-[90%] h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-grey-300 
            text-grey-800"
          />
       </div>

        {/* imgae laoding area */}
        <div className="group flex items-center justify-center flex-col border-2 border-dotted  my-5
        border-red-300 w-[90%] h-225 md:h-390 cursor-pointer rounded-lg">

        </div>

       </div>

    </div>
    </div>
    </>
  )
}

export default AddMenu
