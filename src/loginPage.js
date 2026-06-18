import React from "react";
export const LoginValidation =()=>{
    const orgUser = "valli";
    const orgPass = "1234";
    const handleClick=()=>{
        const u = document.getElementById("userId").value;
        const p = document.getElementById("pass").value;
        if(u===orgUser){
            if(p===orgPass){
                alert("Login successful !!");
            }
            else{
                alert("Wrong Password");
            }
            
        }
        else{
            alert("Wrong User Name");
        }    
    }
    return(
    <div
      style={{
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)", // soft gray-white gradient
        padding: "35px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        width: "320px",
        margin: "60px auto",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
        color: "#444",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          color: "#5c6bc0", // mild lavender-blue
          display: "block",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        Enter Your Name :
      </label>
      <input
        type="text"
        id="userId"
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #b0bec5", // soft gray border
          borderRadius: "6px",
          fontSize: "14px",
          outline: "none",
        }}
      />
      <br />
      <br />
      <label
        style={{
          fontWeight: "bold",
          color: "#4db6ac", // mild teal
          display: "block",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        Enter Your Password :
      </label>
      <input
        type="password"
        id="pass"
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #b0bec5",
          borderRadius: "6px",
          fontSize: "14px",
          outline: "none",
        }}
      />
      <br />
      <br />
      <button
        id="bt"
        onClick={handleClick}
        style={{
          background: "linear-gradient(90deg, #a5d6a7, #81d4fa)", // soft green-blue gradient
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        LOGIN
      </button>
    </div>

    );
}