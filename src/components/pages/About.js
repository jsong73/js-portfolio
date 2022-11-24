import React from "react";
import { motion as m } from "framer-motion";
import "../../App.css"

export default function About() {
    return (
    <m.div 
    initial ={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{duration: 0.75, ease: "easeOut"}}
    id="aboutme"
    >

        <div className= "tracking-tighter" id= "summary">
            Hello, my name is Jessica Song. I'm a 25 year old (F) from Atlanta, Georgia. I enjoy building and designing things. 
        </div>
        
            <h1 className= "tracking-tighter" id="skills-h1"> Skills. </h1>
            <p className= "tracking-tighter" id="skills">  
            MERN (MongoDB, Express, React, Node.js) | 
            JavaScript ES6 |
            HTML5 |
            CSS3 |
            jQuery |
            OOP |
            Bootstrap |
            <br></br>
            SQL |
            NoSQL | 
            ORM |
            NoSQL | 
            MVC |
            PWA |
            Unit Testing | 
            GraphQL | 
            Full-Stack | 
            English, Korean 
            </p>
  
        <h1 className= "tracking-tighter" id="tech-h1"> Technology. </h1>
        <p className= "tracking-tighter" id="tech">
        Git | Heroku Deployments | Github Deployments | PWA | MongoDB | MySQL | VSCode
        </p> 
    </m.div>

)};