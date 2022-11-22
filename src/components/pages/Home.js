import * as React from "react";
import "../../App.css"
import { motion } from "framer-motion";
import styled from "styled-components";
import Background from "../../images/background.jpg";

const Image1 = styled(motion.img)`
margin-left: auto;
margin-right: auto;
`;



function Home() {
    // const [move, setMove] = React.useState(false);
    return (
    <div className="text-[200px] font-bold" id= "home-text">
        <Image1 src= {Background} alt="background-img" 
        />
        <motion.div id="first-name"
        animate={{ x: -0}}
        transition={{ type: "inertia", velocity: 50}}> Jessica </motion.div>

        <motion.div id="last-name"
        animate={{ x: -0, y: 0 }}
        transition={{ type: "inertia", velocity: 50}}> Song. </motion.div>


</div>
 )}

export default Home;