import React from 'react';
import { useState } from 'react';
import './login.css'
import { useNavigate } from "react-router-dom";
import AuthService  from '../auth/auth'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        if(email === '' || password ==='' ){
         
            alert("all fields are mandatory")
            return
         }
        await AuthService.login(email, password).then(
          (val) => {
            navigate("/events");
            window.location.reload();
          },
          (error) => {
            alert("email or password is wrong")
            navigate("/login");
            window.location.reload();
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  
    return(
      <div className="card">
        <h2>login</h2>
        <form onSubmit={handleLogin}> 
          <div className = 'item'>
           <label> email : </label>
           <input type="text" name="email" placeholder="email"
           value = {email}
           onChange ={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className = 'item'>
              <label>password : </label>
              <input type="text" name="password" placeholder="password"
              value ={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
          
          <button style={{backgroundColor:'blue',color:"white"}} > Submit </button>
        </form>
      </div>
      
    )
  
}

export default Login;