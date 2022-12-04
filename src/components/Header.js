import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import AuthService  from '../auth/auth'



const Header = () => {
  let userLoggedIn = AuthService.getCurrentUser()
  return (
    <div>
      <header>
      <h1>Easy Tickets</h1>
      <nav>
        <ul>
          { userLoggedIn && <li><Link   to='/events'>EVENTS</Link></li>}
          { userLoggedIn && <li><Link   to='/mybookings'>MY TICKETS</Link></li>}
          { userLoggedIn && <li><Link   to='/profile'>PROFILE</Link></li>}
          {!userLoggedIn && <li><Link   to='/signup'>SignUp</Link></li>}
          {!userLoggedIn && <li><Link   to='/login'>login</Link></li>}
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
