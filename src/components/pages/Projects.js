import {React, useRef} from "react";
import { motion , useScroll } from "framer-motion";
import "../../App.css";


export default function projects() {
    const ref = useRef(null);
    const { scrollXprogress } = useScroll({container:ref});
 return (
    <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
        </svg>
 
        <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>


)}
