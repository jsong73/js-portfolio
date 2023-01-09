import React from "react";
import "../../App.css";
import { motion as m } from "framer-motion";

export default function Projects() {

 return (
    <div id= "project-container"> 
    <m.div className= "tracking-tighter"
    initial ={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{duration: 0.75, ease: "easeOut"}}
    >
 

    <div id="project-text"> 
    <div>
    <h1> Social Network Thoughts //</h1>
    <a className="underline" href="https://social-network-thoughts.herokuapp.com/">Website //</a> 
    <a className="underline" href="https://github.com/jsong73/social-network-thoughts"> GitHub Repo</a>
    <br></br>
    Social network thoughts is a simple social media website that allows <br></br> users to exchange thoughts 
    and comments with other registered users. <br></br> This was built using the MERNG stack.</div>
    </div>
    </m.div>
    </div>
)}
