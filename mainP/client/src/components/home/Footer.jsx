import React from "react";
import "../Styles/home_styles/Footer.css";
// import { IoLogoLinkedin } from "react-icons/io";
// import { BsInstagram} from "react-icons/bs";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div>
        {/* <footer class="footer-section">
  <div class="container">
          <div class="social text-center">
              <h5 class="text-uppercase ">Follow Us On</h5>
          </div>
          <div className="icons">
          <a  href="/"><IoLogoLinkedin></IoLogoLinkedin></a>
          <a  href="/"><BsInstagram></BsInstagram> </a>
          </div>
         
  </div>
</footer> */}
        <footer className="footer-section">
            <div className="footer-container">

          <div class="social text-center intro text-3xl">
            <h5 class=" ">Follow Us On</h5>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <FaInstagram className="icon" />
            </a>
            <a href="https://github.com">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="copyright">&copy; {new Date().getFullYear()} NOq</div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
