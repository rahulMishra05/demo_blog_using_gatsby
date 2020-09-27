import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import { FaTwitterSquare, FaLinkedin, FaTelegram, FaInstagram, FaGithubSquare } from "react-icons/fa";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
    <p>A tech blog developed by an enthusiast <span className="icon -love"><RiHeart2Line/></span> </p>

<p>Social Media 
   <a href="https://twitter.com/r_mishra10"><FaTwitterSquare color="DodgerBlue" size="20px" style={{ paddingLeft: '5px', paddingRigth: '5px' }} /></a>
   <a href="https://github.com/rahulMishra05"><FaGithubSquare color="Grey" size="20px" style={{ paddingLeft: '5px', paddingRigth: '5px' }} /></a>
   <a href="https://t.me/rahul_mishra10"><FaTelegram color="LightSkyBlue" size="20px" style={{ paddingLeft: '5px', paddingRigth: '5px' }} /></a>
   <a href="https://www.instagram.com/rahul_mishra10/?hl=en"><FaInstagram color="Tomato" size="20px" style={{ paddingLeft: '5px', paddingRigth: '5px' }} /></a>
   <a href="https://www.linkedin.com/in/rahul-mishra-66210b185"><FaLinkedin color="RoyalBlue" size="20px" style={{ paddingLeft: '5px', paddingRigth: '5px' }} /></a>
</p>
    </div>
  </footer>
)

export default Footer