import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


export default function PortfolioContainer(){
    return (
    <div className= "grid grid-cols-5 md:grid-cols-4 lg:grid-cols-6">

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

    </div>

    )};
