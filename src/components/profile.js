import React from 'react'
import './profile.css'
import AuthService from '../auth/auth'
import { useNavigate } from "react-router-dom";


const Profile = () => {
  let user = AuthService.getCurrentUser()
  let navigate = useNavigate()
  let {fullName , mobileNumber} = user
 
  
  const handleLogout = ()=>{
          AuthService.logout();
          navigate("/login");
          window.location.reload();
  }

  return (
    <div className='card'>
        <div className="card_background_img"></div>
        <div className="card_profile_img"></div>
        <div className="user_details">
            <p>{'Name     :   '+fullName}</p>
            <p>{"Mobile Number    :   " +mobileNumber}</p>
            
        </div>
        <div className="card_count">
             <div className="btn" onClick={handleLogout}>log out</div>
        </div>
    </div>
  )
}

export default Profile

