import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NavLink ,useParams} from "react-router-dom";

import authService from '../auth/auth'
import Ticket from './ticketCard';
 import  './EventDetails.css'
import './ticketCard.css'
import EventCard from './EventCard';
import axios from 'axios';
import { useNavigate } from "react-router-dom";





const EventDetails = () => {

//   const [[details] ,setDetails] = useState([null,null]);
  const [event,setEvent] = useState([]);
  const [Quantity,setQuantity] = useState(0)
  const [ticketId,setTicketId] = useState(undefined)
   const { id } = useParams();
  console.log(id)
  let user = authService.getCurrentUser()
  const navigate = useNavigate();
  const eventsApi  =`http://localhost:5000/tickets/${id}`;

  useEffect(() => {
    
     ( async () => {

        let tickets = await axios.get(eventsApi,{ headers: {"Authorization" : `${user.accessToken}`}})
        let eventDet = await axios.get(`http://localhost:5000/events/${id}`,{ headers: {"Authorization" : `${user.accessToken}`}})

        // console.log(tickets.data)
        // console.log(eventDet.data.event)

        setEvent(tickets.data.allTickets)
        // setDetails (eventDet.data.event)
        

      })()
    
   
  },[]);

  const deleteConactHandler = (key)=>{
    console.log('onclick',key)
      setTicketId(key)
      console.log(ticketId)
  }
  
  
//   let {name,description,slug,start_date,end_date,poster} = details
  const ticketList = event.map((ticket)=>{
    return(
       <Ticket 
       ticket={ticket}
       clickHander={deleteConactHandler}
       key={ticket._id}
       />
    )
  })
  const bookTicket = ()=>{
    console.log("bookTicket",ticketId,Quantity)
     axios
    .post("http://localhost:5000" + "/ticket", 
    {
        ticketId :ticketId,
        quantity:Quantity
    },
    
    { headers: {"Authorization" : `${user.accessToken}`}}
    
   )
    .then((response) => {
        navigate("/myBookings");
        window.location.reload();
      console.log(response)
      
    });
  }
   
  return(
    <div className="card">
            <div class="card_background_img"></div>
            
            <div className="user_details">
                {/* <h3>{name}</h3>
                <>{'details:'+ description}</>
                <>{start_date}</>
                <>{end_date}</> */}
               
             </div>
             <div className='container'>{ticketList}</div>
             <div className = 'item'>
                <label> Quantity : </label>
                <input type="number" name="Quantity" placeholder="Quantity"
                  value = {Quantity}
                  onChange ={(e)=>setQuantity(e.target.value)}/>
             </div>
             <button onClick={bookTicket} className="book-btn">
                  Book 
             </button>
        </div>
    
    
  )
}

export default EventDetails