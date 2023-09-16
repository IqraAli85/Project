import React from 'react'
import Table from 'react-bootstrap/Table';
import {Routes} from '../pages/Routesinfo'
function Speedo() {
  return (
    <div>
    <div className='Routes'>
     <div className='bus_number' >
      
     <div className='Route' >
     <div className='Total_stops' >
     <div className='All_stops' ></div>
     </div>
     <br/>
  
        
        </div> 
</div>

<div className='bus_number2'></div>
<div className='Route2'></div>
<div className='Total_stops2'></div>
    </div>


<Table className='lgg' striped bordered hover size="sm">
<thead>
  
  <tr >
    
     <th>Bus Number</th>
    <th>All stops</th>
    <th>Route</th>
    <th>Total stops</th>
  </tr> 
</thead>
<tbody>
  
  <tr className='tr'>
    
    <td >{Routes[0].bus_number}</td>
    <td>{Routes[0].All_stops}</td>
    <td>{Routes[0].Route}</td>
    <td>{Routes[0].Total_stops}</td>
  </tr>
 

  <tr>
    
    <td>{Routes[0].bus_number2}</td>
    <td>{Routes[0].All_stops2}</td>
    <td>{Routes[0].Route2}</td>
    <td>{Routes[0].Total_stops2}</td>
  </tr>
 




</tbody>
</Table>

</div>
  )
}

export default Speedo
