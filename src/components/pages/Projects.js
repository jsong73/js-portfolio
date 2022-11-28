import React from "react";
import { motion as m} from "framer-motion";
import { useRef, useEffect, useState} from "react";
import "../../App.css";
import images from "../../images"



export default function projects() {
 return (
    <div className="projects">
        <m.div className="carousel">
            <m.div className="inner-carousel">
            {images.map(image => {
                return(
                    <m.div className= "item">
                        <img src ={image} alt="" />
                    </m.div>
                )
            })}
            </m.div>
        </m.div>
    </div>

)}
