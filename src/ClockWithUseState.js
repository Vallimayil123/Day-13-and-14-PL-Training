import React, { useState } from "react";

function CounterClock() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)", // soft peach gradient
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        margin: "60px auto",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ color: "#6a1b9a", marginBottom: "20px" }}>COUNTER CLOCK</h1>
      <h2
        style={{
          fontSize: "40px",
          color: "#2e7d32",
          marginBottom: "30px",
        }}
      >
        {count}
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: "linear-gradient(90deg, #81d4fa, #29b6f6)", // blue gradient
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          margin: "5px",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        +
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          background: "linear-gradient(90deg, #ff8a65, #ff7043)", // orange gradient
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          margin: "5px",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        -
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          background: "linear-gradient(90deg, #a5d6a7, #66bb6a)", // green gradient
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          margin: "5px",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        RESET
      </button>
    </div>
  );
}

export default CounterClock;
