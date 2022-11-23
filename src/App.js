import React from "react";
import PortfolioContainer from "./components/PortfolioContainer"
import { AnimatePresence } from "framer-motion";

function App () {
    return(
    <AnimatePresence>
    <PortfolioContainer />
    </AnimatePresence>
    
    )}
    
export default App;

