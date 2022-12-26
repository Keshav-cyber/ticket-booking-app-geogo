import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./EventCard.scss";
const EventCard = (props) => {
  console.log(props);
  let { name, description, slug, start_date, end_date, poster } = props.event;

  return (
    <div class="container">
      <div class="movie-card">
        <div
          class="movie-header babyDriver"
          style={{
            backgroundImage: `url(${poster})`,
          }}
        >
          <div class="header-icon-container">
            {/* <a href="#">
        <i class="material-icons header-icon">&#xE037;</i>
      </a> */}
          </div>
        </div>
        <div class="movie-content">
          <div class="movie-content-header">
            <button className="event">
              <NavLink to={"/event/" + props.event._id} className="button-32">
                {name}
              </NavLink>
            </button>
            <div class="imax-logo"></div>
          </div>
          <div class="movie-info">
            <div class="info-section">
              <label>Date &amp; Time</label>
              <span>{start_date}</span>
            </div>
            <div class="info-section">
              <label>Screen</label>
              <span>01</span>
            </div>
            <div class="info-section">
              <label>Row</label>
              <span>H</span>
            </div>
            <div class="info-section">
              <label>Seat</label>
              <span>15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
