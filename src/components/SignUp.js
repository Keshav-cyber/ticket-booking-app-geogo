import React from 'react'
import { useState } from 'react';
import './profile.css'
import './login.css'
import AuthService from '../auth/auth'
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(fullName, email, password,mobileNumber).then(
        (response) => {
          // check for token and user already exists with 200
          //   console.log("Sign up successfully", response);
          console.log(response)
          navigate("/login");
          window.location.reload();
        },
        (error) => {
          alert(error.response.data.msg)
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

 
    return(
      <div className="card">
       
        <div className="card_count">
        <h2>SignUp</h2>
        <form onSubmit={handleSignup}> 
          <div className = "item">
           <label> Full Name : </label>
           <input type="text" name="fullName" placeholder="full name"
           value = {fullName}
           onChange ={(e)=>setfullName(e.target.value)}/>
          </div>
          <div className = "item">
           <label> email : </label>
           <input type="text" name="email" placeholder="email"
           value = {email}
           onChange ={(e)=>setEmail(e.target.value)}/>
          </div>
          
          <div className = "item">
           <label> mobile number : </label>
           <input type="text" name="mobileNumber" placeholder="mobile number"
           value = {mobileNumber}
           onChange ={(e)=>setmobileNumber(e.target.value)}/>
          </div>

          <div className = "item">
              <label>password : </label>
              <input type="password" name="password" placeholder="password"
              value ={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
          </div>
          
          <button style={{backgroundColor:'blue',color:"white"}} > Submit </button>
        </form>
        </div>
    
      </div>
      
    )
  
}

export default Signup;