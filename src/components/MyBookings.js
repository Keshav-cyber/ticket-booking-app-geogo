import React, { useEffect, useState } from 'react'
import authService from '../auth/auth';
import axios from 'axios';
import './MyBookings.css'






const MyBookings = () => {

  const [tickets,setTickets] = useState([])

  const eventsApi = "https://ticket-booking-app-server-production.up.railway.app/bookings";
  const user = authService.getCurrentUser()


  useEffect(() => {
      if (tickets.length < 1) {
        axios.get(eventsApi,{ headers: {"Authorization" : `${user.accessToken}`}}).then((response) => {
          console.log(response);
          setTickets(response.data.myBookings);
          console.log(tickets)
        });
      }
    },[]);

  let allTickets = tickets.map((ticket)=>{
    return(
      <div className='booked-ticket'>
        <p>{'Event name  :' + ticket.eventId.name}</p>
        <p>{"trnId  :" + ticket._id}</p>
        <p>{"price  :" +ticket.total_price}</p>
      </div>
    )
  })
  return (
      <div>{allTickets}</div>
  )
}

export default MyBookings
