import React from 'react'
import { useState ,useEffect} from 'react'
import Event from './EventCard'
import axios from 'axios'
import authService from '../auth/auth'

const Events = () => {
  
  let [events,setEvents] = useState([])
  let user = authService.getCurrentUser()
  console.log(user)
  const eventsApi = "http://localhost:5000/events";
 


    useEffect(() => {
        if (events.length < 1) {
          axios.get(eventsApi,{ headers: {"Authorization" : `${user.accessToken}`}}).then((response) => {
            console.log(response);
            setEvents(response.data.events);
            console.log(events)
          });
        }
      },[]);
      const EventList = events.map((event)=>{
        return(
          <Event event= {event} key={event._id}/>
        )
      })
      return(
        <div className='event-list'>{EventList}</div>
      )
}

export default Events
