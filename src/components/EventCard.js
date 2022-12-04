import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const EventCard = (props) => {
   console.log(props)
    let {name,description,slug,start_date,end_date,poster} = props.event
    
   

    return (
        <div class="card">
            <div class="card_background_img">
            <img src={poster} alt="abc" width="450px" height="180px" />
            </div>
            
            <div class="user_details">
                <h3>{name}</h3>
                <>{'details:'+ description}</>
                <>{start_date}</>
                <>{end_date}</>
             </div>
             <button className="event">
                    <NavLink to={"/event/" + props.event._id} className="button-32">
                      Book Tickets
                    </NavLink>
             </button>
        </div>
      )
  
}

export default EventCard
