import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import './ticketCard.scss'
const TicketCard = (props) => {
    console.log(props.ticket)
    let {name,
    purchase_date,
    description,
    price,
    total_quantity,
    available_quantity,_id} = props.ticket
    
   //<input type="radio"   name="ticket" onClick={props.clickHander(_id)}></input>

    return ( 
        
         <div className='tickets-list'>
            <div className='ticket-card'>
           
                <div className='ticket'>
                <button className="button1" onClick={()=>{props.clickHander(props.ticket._id)}}>  <p> price :{price}
                  "   " available :  {available_quantity}
                  "   "   time : {description}
                  
                 </p>
                </button>
               
                </div>
            
            </div>
        </div>
  
     
      )
  
}

export default TicketCard