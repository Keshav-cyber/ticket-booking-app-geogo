import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import authService from "../auth/auth";
import Ticket from "./ticketCard";
import "./EventDetails.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {

  const [event, setEvent] = useState({event:{},tickets:[]});
  const [Quantity, setQuantity] = useState(0);
  const [ticketId, setTicketId] = useState(undefined);
  const { id } = useParams();
  
  let user = authService.getCurrentUser();
  const navigate = useNavigate();
  const eventsApi = `https://drab-language-production.up.railway.app/tickets/${id}`;

  useEffect(() => {
    (async () => {
      let tickets = await axios.get(eventsApi, {
        headers: { Authorization: `${user.accessToken}` },
      });
       setEvent({event:tickets.data.event,tickets:tickets.data.event.tickets});
       console.log(event.event.name)
    })();
  }, []);

  const deleteConactHandler = (key) => {
  
    setTicketId(key);
    
  };

  
  const ticketList = event.tickets.map((ticket) => {
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
        "https://drab-language-production.up.railway.app" + "/ticket",
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
              src = {event.event.poster}
            />
            
            <div>{event.event.name}</div>
            
            
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
        <div class="blur_back">
        <img
              className="background-img"
              src = {event.event.poster}
            />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
