import React, { useState } from "react";
function CounterClock(){
    const[count,setCount] = useState(0);
    // function handleDecrease(){
    //     setCount(count-1);
    // }
    // function handleIncrease(){
    //     setCount(count+1);
    // }
    // function handleReset(){
    //     setCount(10);
    // }
    return(
            <div style={{textAlign:"center",marginTop:"50px"}}>
                <h1>COUNTER CLOCK</h1>
                <h2>{count}</h2>
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>setCount(count-1)}>-</button>
                <button onClick={()=>setCount(0)}>RESET</button>
            </div>
        )

}
export default CounterClock;