import React, {useRef, useEffect, useState} from "react";
import { motion as m } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
import "../../App.css";
import images from "../../images"



export default function Projects() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

 return (
    <div className="projects">
        <m.div ref={carousel} 
        className="carousel" 
        whileTap={{cursor: "grabbing"}}>
            <m.div drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel">
            {images.map(image => {
                return(
                    <m.div className= "item" key={image}>
                        <img src ={image} alt="" />
                    </m.div>
                )
            })}
            </m.div>
        </m.div>
    </div>

)}
