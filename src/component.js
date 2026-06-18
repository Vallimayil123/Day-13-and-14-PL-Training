import React from "react";
export const Greeting =(props)=>{
    return(
        <div>
            <center>
                <h1>Hello,{props.name}!!</h1>
                <p>Are you a potter head ?</p>
            </center>
        </div>
    );
}