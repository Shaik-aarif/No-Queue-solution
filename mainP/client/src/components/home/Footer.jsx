import React from 'react'
import "../Styles/Footer.css"
import { IoLogoLinkedin } from "react-icons/io";
const Footer = () => {
  return (
    <>

    <div>
    <footer class="footer-section">
  <div class="container">
      
          <div class="social text-center">
              <h5 class="text-uppercase ">Follow Us On</h5>
          </div>
          <div className="icons">
            <IoLogoLinkedin></IoLogoLinkedin>
          </div>
         
  </div>
</footer>
    </div>
    </>
  )
}

export default Footer
