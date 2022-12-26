import React from "react";
import { useState, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";

import authService from "../auth/auth";
import Ticket from "./ticketCard";
import "./EventDetails.css";

import EventCard from "./EventCard.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  //   const [[details] ,setDetails] = useState([null,null]);
  const [event, setEvent] = useState([]);
  const [Quantity, setQuantity] = useState(0);
  const [ticketId, setTicketId] = useState(undefined);
  const { id } = useParams();
  console.log(id);
  let user = authService.getCurrentUser();
  const navigate = useNavigate();
  const eventsApi = `http://localhost:5000/tickets/${id}`;

  useEffect(() => {
    (async () => {
      let tickets = await axios.get(eventsApi, {
        headers: { Authorization: `${user.accessToken}` },
      });
      let eventDet = await axios.get(`http://localhost:5000/events/${id}`, {
        headers: { Authorization: `${user.accessToken}` },
      });

      // console.log(tickets.data)
     // console.log(eventDet.data.event);

      setEvent(tickets.data.allTickets);
      // setDetails (eventDet.data.event)
    })();
  }, []);

  const deleteConactHandler = (key) => {
   // key.preventdefault()
    console.log("onclick", key);
    setTicketId(key);
    console.log(ticketId);
  };

  //   let {name,description,slug,start_date,end_date,poster} = details
  const ticketList = event.map((ticket) => {
    return (
      <Ticket
        ticket={ticket}
        clickHander={deleteConactHandler}
        key={ticket._id}
      />
    );
  });
  const bookTicket = () => {
    console.log("bookTicket", ticketId, Quantity);
    axios
      .post(
        "http://localhost:5000" + "/ticket",
        {
          ticketId: ticketId,
          quantity: Quantity,
        },

        { headers: { Authorization: `${user.accessToken}` } }
      )
      .then((response) => {
        navigate("/myBookings");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };

  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            {/* <h1>{event[0].eventId.name}</h1> */}
            <h4>2017, David Ayer</h4>
            <span class="minutes">117 min</span>
            <p class="type">Action, Crime, Fantasy</p>
          </div>
          <div class="movie_desc">
            <div>{ticketList}</div>
          </div>
          <div >
            <label> Quantity : </label>
            <input
              type="number"
              name="Quantity"
              placeholder="Quantity"
              value={Quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button onClick={bookTicket} className="book-btn">
            Book
          </button>
        </div>
        <div class="blur_back bright_back"></div>
      </div>
    </div>
  );
};

export default EventDetails;
