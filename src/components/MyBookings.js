import React, { useEffect, useState } from 'react'
import authService from '../auth/auth';
import axios from 'axios';
import './MyBookings.css'






const MyBookings = () => {

  const [tickets,setTickets] = useState([])

  const eventsApi = "https://drab-language-production.up.railway.app/bookings";
  const user = authService.getCurrentUser()


  useEffect(() => {
      if (tickets.length < 1) {
        axios.get(eventsApi,{ headers: {"Authorization" : `${user.accessToken}`}}).then((response) => {
        
          setTickets(response.data.myBookings);
         
        });
      }
    },[]);

  let allTickets = tickets.map((ticket)=>{
    return(
      <div className='booked-ticket'>
        <p class="movie-title">{'Event name   :  ' + ticket.eventId.name}</p>
        <p>{"Ticket Id  :  " + ticket._id}</p>
        <p>{"Price  :  " +ticket.total_price}</p>
        <p>{ "Date   :  " + ticket.eventId.start_date }</p>
      </div>
    )
  })
  return (
      <div>{allTickets}</div>
  )
}

export default MyBookings
