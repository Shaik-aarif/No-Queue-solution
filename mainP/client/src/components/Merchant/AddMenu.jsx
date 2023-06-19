import React, { useState } from 'react'
import "../Styles/Merchant_styles/AddMenu.css"
import Navbar from '../home/Navbar'
import Loader from './Loader'
import {MdFastfood , MdCloudUpload , MdDelete , MdAccessTimeFilled  , MdCurrencyRupee} from 'react-icons/md'
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
    

    const uploadImage  = () =>{}
    const deleteImage  = () =>{}



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
                <p className={`w-[95%] text-center rounded-lg p-2   ${alertStatus === 'danger' ? 
                'bg-red-400 text-red-800' : 'bg-green-400 text-green-800'
                }`}>{msg}Error message</p>
            )
        }
        
       <div className="item-name w-[90%] py-2 border-b border-gray-300 flex  items-center justify-start ml-2  gap-2">
          <MdFastfood  className="text-xl icons text-grey-400"/>
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
              {isLoading ? <Loader/> : <>
                {
                  !imageAsset ? (<>
                    <label className="w-full h-full flex items-center flex-col justify-center cursor-pointer">
                        <div className="w-full h-full flex items-center flex-col justify-center gap-2">
                            <MdCloudUpload className=" icons text-3xl"></MdCloudUpload>
                            <p className="text-grey-300  md:text-2xl icons  hover:text-grey-700">Click here to upload image</p>
                        </div>
                        <input type="file"
                              name = "uploadimage"
                              accept="image/*"
                              onChange={uploadImage}
                              className="w-0 h-0"
                         />
                    </label>
                  </>) :  (<>
                    <div className="relative h-full">
                    <img src = {imageAsset} alt = "uploadedimage" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none
                      hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={deleteImage}
                    />
                    <MdDelete className ="text-white" 
                    />
                    </div>
                  </> 
                )}
              </>}
        </div>
            
            {/* price section */}
            <div className="item-name w-[90%] py-2 border-b border-gray-300 flex  items-center justify-start ml-2  gap-2">
          <MdCurrencyRupee  className="text-xl icons text-grey-400"/>
          <input
            type = "text"
            required
            value = {price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the item price...."
            className="w-[90%] h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-grey-300 
            text-grey-800"
          />
       </div>
       {/* time */}
       <div className="item-name w-[90%] py-2 border-b border-gray-300 flex  items-center justify-start ml-2  gap-2">
          <MdAccessTimeFilled  className="text-xl icons text-grey-400"/>
          <input
            type = "text"
            required
            value = {timeTaken}
            onChange={(e) => setTimeTaken(e.target.value)}
            placeholder="Enter average time to prepare item...."
            className="w-[90%] h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-grey-300 
            text-grey-800"
          />
       </div>
       
       </div>

    </div>
    </div>
    </>
  )
}

export default AddMenu
