import React from "react";
import { NavLink } from "react-router-dom";
import "./EventCard.css";
const EventCard = (props) => {
  let { name, poster } = props.event;

  return (

    <div className='child'>
      <div className="movie-card">
        <div
          class="movie-header babyDriver"
          style={{
            backgroundImage: `url(${poster})`,
          }}
        >

        </div>
      </div>

      <div className="movie-content">
        
        <button className="event">
          <NavLink to={"/event/" + props.event._id} className="button-32">
            {name}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
