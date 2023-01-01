import React from 'react'

import './ticketCard.scss'
const TicketCard = (props) => {
    
    let {
    description,
    price,
    available_quantity} = props.ticket

    return ( 
        
         <div className='tickets-list'>
            <div className='ticket-card'>
           
                <div className='ticket'>
                <button className="button1" onClick={()=>{props.clickHander(props.ticket._id)}}> 
                 <div>price : {price} time : {description} </div>
                 <div> Available : {available_quantity}</div>
                </button>
               
                </div>
            
            </div>
        </div>
  
     
      )
  
}

export default TicketCard