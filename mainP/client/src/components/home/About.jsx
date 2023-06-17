import React from 'react'
import BannerIMG from '../../Assets/images/about-us.png'
import '../Styles/home_styles/About.css'

const About = () => {
  return (
    
      <>
      
    <div className="about-section" id="AboutUs">
        <div className="row mt-5 ">
            <div className="image col-lg-6">
            <img className='wd-2' src={BannerIMG} alt="about-us-banner-img" />
            </div>
            <div className="about col-lg-6 py-10">
                <p className="aboutUs">
                <div className="intro text-3xl">About Us </div>
                <div className = "para mt-3">
                Welcome to No Queue! We are revolutionizing queue management in the food industry by eliminating traditional queues. Our web application offers a seamless and efficient experience, allowing you to conveniently order food remotely and receive a unique token for hassle-free collection of your packed orders. Join us in transforming the way food orders are managed and say goodbye to waiting in queues. 
                </div>
                <div className="para mt-3">
                Our solution not only benefits customers but also empowers restaurant staff by reducing their workload and enhancing overall customer satisfaction. With our system in place, restaurants can optimize operations, improve service quality, and create memorable dining experiences.
                </div>
                <div className="para  mt-3">
                Thank you for choosing No Queue. Together, let's make waiting in queues a thing of the past!
                </div>
                </p>
            </div>
          </div>
        </div>
      </>
    
    
  )
}

export default About;
