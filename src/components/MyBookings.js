import React, { useEffect, useState } from 'react'
import authService from '../auth/auth';
import axios from 'axios';
import './MyBookings.css'






const MyBookings = () => {

  const [tickets,setTickets] = useState([])

  const eventsApi = "http://localhost:5000/bookings";
  const user = authService.getCurrentUser()


  useEffect(() => {
      if (tickets.length < 1) {
        axios.get(eventsApi,{ headers: {"Authorization" : `${user.accessToken}`}}).then((response) => {
         // console.log(response);
          setTickets(response.data.myBookings);
         // console.log(tickets)
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
