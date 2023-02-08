import "./login.css"
import { Link } from "react-router-dom";
import { useState } from "react";


function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password, message);
      let res = await fetch("http://localhost:1234/api/signin", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
          email: email,
          password: password,
        }),
      });
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        setMessage("User logged in");
        //Navigate("/")
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <div  className="login">
          <span className="loginTitle">Login</span>
        <form  onSubmit={handleSubmit} className="loginForm">
          <label >Email</label>
          <input  value={email} className="loginInput" type="text" placeholder="Enter your Email.." onChange={(e) => setEmail(e.target.value)}/>
          <label >Password</label>
          <input value={password} className="loginInput" type="password" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="loginButton">Login</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>

        </form>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
        
        
      </div>
    )
  
}

export default Login;