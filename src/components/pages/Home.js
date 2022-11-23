import React from "react";
import "../../App.css"
import { FaGithub , FaLinkedinIn, FaEnvelope} from "react-icons/fa"
import { motion as m } from "framer-motion"; 


function Home() {
    return (

<m.div id="home-text"
initial ={{ opacity: 0}}
animate={{ opacity: 1 }}
transition={{duration: 0.75, ease: "easeOut"}}
>   

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
 
</m.div>


)}

export default Home;