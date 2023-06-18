import React from 'react'
import '../Styles/home_styles/SelectService.css'

const SelectService = () => {
  return (
    <>

    <div className="SelectService" id="selectservice">
      <div className="intro">
        <p className="text-3xl text-center mb-3">Select which service You want to continue with..</p>
      </div>
      <div className="areYou">
        <p className="text-2xl are">Are You a </p>
      </div>

      <div className="buttons">
      <div className="row">
        <div className="col-lg-6  col-md-12 flex items-center justify-end">
      <button className="btn btn-dark " >Merchant</button>
        </div>
        <div className="col-lg-6 col-md-12 flex items-center justify-start">
      <button className="btn btn-dark" >Customer</button>
        </div>
      </div>
      </div>

    </div>
    </>
  )
}

export default SelectService
