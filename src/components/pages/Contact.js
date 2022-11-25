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
    <p id="contact-info">
       Keep up with me at any of the below links.
    </p>

<div id="social-links">

    <a className="hover:animate-pulse" href="https://github.com/jsong73" aria-label="github" target="_blank" rel="noopener noreferrer"> github // </a>

    <a className="hover:animate-pulse" href="https://www.linkedin.com/in/jessica-jin-song/" aria-label="linkedin" target="_blank" rel="noopener noreferrer"> linkedin //  </a>

    <a className="hover:animate-pulse" href="mailto:jessicajinsong@gmail.com" aria-label="email" target="_blank" rel="noopener noreferrer"> email </a> 
</div>

</m.div>
)} 

export default Contact;