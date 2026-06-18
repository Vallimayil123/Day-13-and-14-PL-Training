import React from "react";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App2(){
    return(
        <BrowserRouter>
        <div style={{textAlign: "center", marginTop: "40px"}}>
            <h1>Simple Routing Demo</h1>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/contact">Contact</Link>|
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={ <About />} />
                <Route path="/contact" element={ <Contact />}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default App2;