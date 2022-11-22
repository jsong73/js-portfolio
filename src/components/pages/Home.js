import React from "react";
import "../../App.css"
import { FaGithub , FaLinkedinIn, FaEnvelope} from "react-icons/fa"
// import { motion } from "framer-motion";
// import styled from "styled-components";
// import Background from "../../images/background.jpg";

// const Image1 = styled(motion.img)`
// width: 100%;
// height: 100%;
// top: 0;
// left: 0;
// `;

function Home() {
    return (
<div id="home-text">     
<div id="name"> Jessica Song.</div>
<div id="location"> Based in Atlanta, GA.</div>

<ul id= "github-icon" className="hover:animate-spin cursor-pointer">
    <a href="https://github.com/jsong73" aria-label="github" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
</ul>

<ul id= "linkedin-icon" className="hover:animate-spin cursor-pointer">
    <a href="https://www.linkedin.com/in/jessica-jin-song/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /></a>
</ul>

<ul id= "email-icon" className="hover:animate-spin cursor-pointer">
    <FaEnvelope /> 
</ul>

<div id= "email"> jessicajinsong@gmail.com </div>


</div>  
)}

export default Home;