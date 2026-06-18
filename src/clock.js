import React from "react";
export const Plus=()=>{
    let a = document.getElementById("Num");
    a.innerText = parseInt(a.innerText) + 1;
}
export const Minus=()=>{
    var a = document.getElementById("Num");
    a.innerText = parseInt(a.innerText) - 1;
}
function Clock(){
    return(
        <div>
            <h1 id="Num">0</h1>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
        </div>
    )
}
export default Clock;