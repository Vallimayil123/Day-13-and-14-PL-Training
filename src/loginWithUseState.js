import React, { useState } from "react";

export const Loginhook = () => {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [resultUser, setResultUser] = useState("");
  const [resultPswd, setResultPswd] = useState("");

  const myUser = "valli";
  const myPs = "1234";

  const handleClick = () => {
    setResultUser(user);
    setResultPswd(pswd);

    if (user === myUser && pswd === myPs) {
      alert("Login Successful !!!");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)", // soft background
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        width: "350px",
        margin: "60px auto",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2 style={{ color: "#5c6bc0", marginBottom: "20px" }}>Login Form</h2>

      <label
        style={{
          fontWeight: "bold",
          color: "#5c6bc0",
          display: "block",
          marginBottom: "8px",
        }}
      >
        Enter User Name :
      </label>
      <input
        type="text"
        placeholder="User Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
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

      <label
        style={{
          fontWeight: "bold",
          color: "#4db6ac",
          display: "block",
          marginBottom: "8px",
        }}
      >
        Enter Password :
      </label>
      <input
        type="password"
        placeholder="Password"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
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

      <button
        onClick={handleClick}
        style={{
          background: "linear-gradient(90deg, #a5d6a7, #81d4fa)", // pastel green-blue
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

      <div style={{ marginTop: "20px", color: "#444" }}>
        <h3>{resultUser}</h3>
        <h3>{resultPswd}</h3>
      </div>
    </div>
  );
};
