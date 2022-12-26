
import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route,Routes} from 'react-router'
import Home from './components/Home';

import Login from './components/login';
import Events from './components/Events'
import MyBookings from './components/MyBookings'
import  Profile from './components/profile'
import SignUp from './components/SignUp';


import EventDetails from './components/EventDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
       <Route path='/' element ={<Home />}></Route>
       <Route path = "login" element = {<Login />} ></Route>
       <Route path='events' element = {<Events />}></Route>
       <Route path='mybookings' element = {<MyBookings />}></Route>
       <Route path='profile' element = {<Profile />}></Route>
       <Route path='signup' element= {<SignUp />}></Route>
       <Route path='event/:id' element= {<EventDetails />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
