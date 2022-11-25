import React from "react";
import "../../App.css"
import { motion as m } from "framer-motion"; 

function Contact() {
    return (
<m.div className= "tracking-tighter" id="contact-text"
initial ={{ opacity: 0}}
animate={{ opacity: 1 }}
transition={{duration: 0.75, ease: "easeOut"}}
>   
    <h1 id="contact-info">
       You can find me at any of my below socials.
    </h1>

<div id="social-links">
    <a href="https://github.com/jsong73" aria-label="github" target="_blank" rel="noopener noreferrer"> github // </a>
    <a href="https://www.linkedin.com/in/jessica-jin-song/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"> linkedin //  </a>
    <a href="mailto:jessicajinsong@gmail.com" aria-label="email" target="_blank" rel="noopener noreferrer"> email </a>
</div>


</m.div>
)} 

export default Contact;