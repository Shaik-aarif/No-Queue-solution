import React from 'react'

const Services = () => {
  return (
    <>
        <div className="Services mt-12" id= "Services">

        <div className="intro  flex items-center justify-center text-3xl ">
          <p>
            Services We provide
          </p>
        </div>

        {/* <p>Are You a </p> */}
        <div className="row mt-9">
            <div className="btn-1 col-lg-6">
            <p>
              For Merchant
            </p>
            <button className="btn btn-dark my-2 my-sm-0 mr-10" >Merchant</button>
            </div>
            <div className="btn-2 col-lg-6">
            <button className="btn btn-dark my-2 my-sm-0 mr-10" >Customer</button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Services
