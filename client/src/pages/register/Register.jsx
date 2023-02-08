import "./register.css"
import { useState} from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';






export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
    
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(username, email, password, message);
      let res = await fetch("http://localhost:1234/api/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {
          username: username,
          email: email,
          password: password,
        }),
      });
      if (res.status === 200) { 
        setUsername("");
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
      } else if (res.status === 400){
        setMessage("Such email already registered");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    
    <div  className="register">
        <span className="registerTitle">Register</span>
      <form  onSubmit={handleSubmit} className="registerForm">
        <label >Username</label>
        <input value={username} className="registerInput" type="text" placeholder="Enter your username.." onChange={(e) => setUsername(e.target.value)} />
        <label >Email</label>
        <input value={email} className="registerInput" type="text" placeholder="Enter your Email.."onChange={(e) => setEmail(e.target.value)} />
        <label >Password</label>
        <input value={password} className="registerInput" type="password" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)}/>
        <button className="registerButton">Register</button>
        <div className="message">{message  ? (message === "User created successfully" ?<Navigate to="/" />: <p>{message}</p>): null}</div>
        
      </form>
      <button className="registerLoginButton">
      <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  )
}
