import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function PortfolioContainer(){
    return (
        // <m.div
        // initial ={{ opacity: 0}}
        // animate={{ opacity: 1 }}
        // transition={{duration: 0.75, ease: "easeOut"}}
        // >
<div>
        <nav className="text-center text-[150px] cursor-grab" id="nav">
            <ul>
                <li> 
                    <Link className="hover:italic" id="home" to="/"> Home </Link> 
                </li>
                <li> 
                    <Link className="hover:italic" id="about" to="/about"> About </Link> 
                </li>
                <li> 
                    <Link className="hover:italic" id="projects" to="/projects"> Projects </Link> 
                </li>
                <li> 
                    <Link className="hover:italic" id= "contact" to="/contact"> Contact </Link> 
                </li>
            </ul>
        </nav>

        

        <Routes>
             <Route path="/" element = {<Home />} />
             <Route path="/about" element ={<About />} />
             <Route path="/projects" element ={<Projects />} />
             <Route path="/contact" element ={<Contact />} />
         </Routes>

 {/* </m.div> */}
    </div>
    )};
