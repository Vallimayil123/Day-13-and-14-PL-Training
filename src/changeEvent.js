import React from "react";
export const OnchangeEvent =()=>{
    const handlechange=(e)=>{
        console.log(e.target.value);
    }
    return(
        <div>
            <input
            type="text"
            onChange={handlechange}></input>
        </div>
    )
    
}

// import React, { useState } from 'react';

// export const Textboxstate = () => {
//       const [text, setText] = useState("");
//     return (
//         <div>
//                 <input type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)} />
//             <h1>{text}</h1>
//         </div>
//     );
// };