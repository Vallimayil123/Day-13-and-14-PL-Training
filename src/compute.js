import React from 'react';
import logo from './logo.svg';
import './App.css';
const v = 3;
export const  handleClick=()=>{
    alert("Total Events : " + v);
    // document.getElementById("res").innerText="Button Clicked"
    const b = document.getElementById("bt");
    b.textContent = "ALTERED BUTTON";
    const msg = document.getElementById("result");
    msg.textContent = "ALTERED MESSAGE";
    msg.style.color= "red";
}
export const handleText =()=>{
    const t = document.getElementById("res");
    t.textContent = "ALTERED TEXT";
    t.style.color="blue";
}
function Compute(){
    const n = 300
    return (
        <div>
        <h1>{n}</h1>
        <button onClick={handleClick} id='bt'> CLICK ME</button>
        <h3 onClick={handleText} id='res'>TEXT</h3>
        <h3 id='result'>MESSAGE</h3>
        </div>
    )
}
export default Compute;