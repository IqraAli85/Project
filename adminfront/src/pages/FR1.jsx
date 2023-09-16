import React from 'react'
//  import Speedo from '../Component/Speedo'
import bg from "../images/bg.jpg"
import Table from 'react-bootstrap/Table';
import Map from "../Component/Map"

 import {Routes} from './Routesinfo'
// import Path from "../Component/Path"
import 'bootstrap/dist/css/bootstrap.min.css';

function Bus1() {
  return (
    
    <div className='card-inner'>
      <div className='card-heading'>
     
      <h3 className="cards-title">  FR 1</h3>

       <div className='Routes'   ></div>
      <div className='bus_number'  ></div>
      <div  className='Route' ></div>
      <div className='Total_stops'  ></div>
      <div className='All_stops'  ></div> 
       {/* <Speedo/>  */}

      {/* <Path/> */}
      </div>

<div className='card-content' >
  <div className='content-block'>
  {/* <img src={bg} alt=''  className='bg' /> */}
    




      
  </div>





</div>

<Table className='lgg' striped bordered hover variant="dark" size="sm">
<thead>
  
  <tr>
    
    <th>Bus Number</th>
    <th>All stops</th>
    <th>Route</th>
    <th>Total stops</th>
    <th></th>
  </tr>
</thead>
<tbody>
  
  <tr>
    
    <td>{Routes[0].bus_number}</td>
    <td>{Routes[0].All_stops}</td>
    <td>{Routes[0].Route}</td>
    <td>{Routes[0].Total_stops}</td>
  </tr>
 


 




</tbody>
</Table>




    <Map/>



    </div>
  )
}

export default Bus1
