import React, { Children } from "react";
import "../../App.css"
import { motion } from "framer-motion";
import styled from "styled-components";
import CircleTwo from "../../images/CircleTwo.jpg"
import CircleThree from "../../images/CircleThree.png"
import CircleFour from "../../images/CircleFour.png"


const Image1 = styled(motion.img)`
position: absolute;
opacity: 0.8;
`;

const Image2= styled(motion.img)`
position: absolute;
top: 50px;
right: 80px;
opacity: 0.9;
`;

const Image3= styled(motion.img)`
position: absolute;
bottom: 20px;
right: 190px;
opacity: 0.9;
`;

const Image4= styled(motion.img)`
position: fixed;
left: 40%;
bottom: 120px;
transform: translate(-50%, -50%);
margin: 0 auto;
opacity: 0.7;
`;

const Image5= styled(motion.img)`
position: fixed;
top: 0px;
left: 400px;
`;

function Home() {

    return (
    <div className=" text-[200px] font-bold text-center" id= "home-text">
        <h1 id= "first-name"> Jessica </h1>
        <h1 className="leading-3 indent-[30%]" id="last-name"> Song. </h1>

        <Image1 src= {CircleTwo} alt="circleimg" 
        whileTap={{scale: 0.9}} 
        drag={true}
        dragConstraints={{left:0, right:250, top:0, bottom: 50 }}
        initial={{ x: -100, y: -100 }}e
        animate={{ x: 100, y: 100 , transition: { duration: 8, ease: "easeOut" } }}
        />

        <Image2 src={CircleTwo} alt="circleimg" 
        whileTap={{scale: 0.9}}
        drag={true}
        dragConstraints={{left:200, right:0, top:0, bottom: 50 }}
        initial={{ x: 100, y: 100 }}
        animate={{ x: -100, y: -100, transition: { duration: 8, ease: "easeOut" } }}
        />

        <Image3 src={CircleThree} alt="circleimg" 
        whileTap={{scale: 0.9}} 
        drag={true}
        dragConstraints={{left:70, right:0, top:30, bottom: 20 }}
        initial={{ x: 100, y: -120 }}
        animate={{ x: -120, y: -70, transition: { duration: 8, ease: "easeOut" } }}
        />

        <Image4 src={CircleFour} alt="circleimg" 
        whileTap={{scale: 0.9}} 
        drag={true}
        dragConstraints={{left:70, right:0, top:30, bottom: 20 }}
        initial={{ x: 50, y: 200 }}
        animate={{ x: -70, y: -200, transition: { duration: 8, ease: "easeOut" } }}
        />

        <Image5 src={CircleThree} alt="circleimg" 
        whileTap={{scale: 0.9}}  
        drag={true}
        dragConstraints={{left:70, right:0, top:30, bottom: 20 }}
        initial={{ x: 50, y: 1 }}
        animate={{ x: -200, y: 0, transition: { duration: 8, ease: "easeOut" } }}
        />

    </div>

    
)} 



export default Home;