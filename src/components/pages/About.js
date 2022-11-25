import React from "react";
import { motion as m } from "framer-motion";
import "../../App.css"
import self from "../../images/self.jpg"

export default function About() {
    return (
    <div id= "about-container"> 
    <m.div className= "tracking-tighter"
    initial ={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{duration: 0.75, ease: "easeOut"}}
    id="aboutme"
    >
        <img src={self} alt="Jessica Song" width="600px" id="self" draggable="false"/>

        <h1 id="hello">HELLO,</h1>
        
        <div className= "text-left " id= "summary">
        my name is Jessica Song. I'm a 25 year old (F) residing in Atlanta, Georgia. 
        <br></br> 
        I'm a self taught developer whose joy consists of sitting in front of her computer all day. 
        <br></br> 
        I have a background in art and a love for technology and decided to pour them both
        <br></br> 
        into a career in software development.
    
        </div>
        
            <h1 className="hover:underline font-bold" id="skills-h1"> Skills. </h1>
            <p id="skills">  
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
  
        <h1 className="hover:underline font-bold"id="tech-h1"> Technology. </h1>
        <p id="tech">
        Git | Heroku Deployments | Github Deployments | PWA | MongoDB | MySQL | VSCode
        </p> 

        <h1 className="hover:underline font-bold "id="resume-h1"> Resume. </h1>
        <p id="resume"> Interested in my professional background? Click
        <a className= "font-bold" href="https://docs.google.com/document/d/1KtbFgZj_dZ6uu4P9ycTLqT_DTbnaB5PlaWuuW88YAuc/edit" aria-label="email" target="_blank" rel="noopener noreferrer"> here </a> to view my resume. </p>

    </m.div>
    </div>   
)};