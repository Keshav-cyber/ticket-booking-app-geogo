import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import './ticketCard.css'
const TicketCard = (props) => {
   
    let {name,
    purchase_date,
    description,
    price,
    total_quantity,
    available_quantity,_id} = props.ticket
    
   //<input type="radio"   name="ticket" onClick={props.clickHander(_id)}></input>

    return ( 
        
         <div >
            <div className='ticket-card'>
           
                <div className='ticket'>
                <button className="button1  " onClick={()=>{props.clickHander(props.ticket._id)}}>  <p> price :{price}
                available :  {available_quantity}
                 time : {description}
                 </p>
                </button>
               
                </div>
            
            </div>
        </div>
    //      <input
    //      type="radio"
    //      name="site_name"
    //      value={result.SITE_NAME}
    //      checked={this.state.site === result.SITE_NAME}
    //      onChange={this.onSiteChanged}
    //    />
     
      )
  
}

export default TicketCard