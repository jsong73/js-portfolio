import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";



export default function PortfolioContainer(){
    return (
    <div>
        <nav className="text-center font-medium text-[25px]" id="nav">
            <ul>
                <li> 
                    <Link to="/"> Home </Link> 
                </li>
                <li> 
                    <Link to="/about"> About me </Link> 
                </li>
                <li> 
                    <Link to="/projects"> Projects </Link> 
                </li>
                <li> 
                    <Link to="/contact"> Contact </Link> 
                </li>
            </ul>
        </nav>

        <Routes>
             <Route path="/" element = {<Home />} />
             <Route path="/about" element ={<About />} />
             <Route path="/projects" element ={<Projects />} />
             <Route path="/contact" element ={<Contact />} />
         </Routes>

    </div>

    )};
