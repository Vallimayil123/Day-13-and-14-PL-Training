import React,{useState}  from "react";

export const SignUp = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if(!name || !email || !user || !password || !confirm || !dob){
        alert("Please fill the required fields!");
    }
    else if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must contain exactly 10 digits!");
    }
    else if (!/^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/.test(password)) {
      alert("Password must be 8–15 characters long, include at least one digit and one special character!");
    }

    else if (password !== confirm) {
      alert("Passwords do not match!");
    } else {
      alert("Sign Up Successful!");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        width: "400px",
        margin: "50px auto",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <h1 style={{ color: "#5c6bc0", marginBottom: "20px" }}><center>SIGN UP FORM</center></h1>

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your name :
        </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your Phone number :
        </label>
        <input
          type="tel"
          placeholder="Ph.No"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your Email ID :
        </label>
        <input
          type="email"
          placeholder="Mail id"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your User Name :
        </label>
        <input
          type="text"
          placeholder="User Name"
          value={user}
          onChange={(e)=>setUser(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your Password :
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onInput={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        
        <label style={{ fontWeight: "bold", color: "#333" }}>
          Confirm Password :
        </label>
        <input
          type="password"
          placeholder="Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
           onInput={(e) => setConfirm(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <label style={{ fontWeight: "bold", color: "#333" }}>
          Enter your Date Of Birth :
        </label>
        <input
          type="date"
          placeholder="D.O.B"
          value={dob}
          onChange={(e)=>setDob(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <br />

        <button
        type="submit"
          style={{
            background: "linear-gradient(90deg, #81d4fa, #29b6f6)",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};
