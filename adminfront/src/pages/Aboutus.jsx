import React from 'react'
// import { useState } from 'react'
import logo  from "../images/download.jpg"
import { Container,Button } from 'react-bootstrap'
function Aboutus() {
  // const bang = ()=>{
  //   setText("dont scream if i bangg!!!")
  //   }

  // const [text,setText]=useState('hello')

  return (
    <div>
      <br /><br />
{/* <Button className='btn btn-primary' onClick={bang}  ></Button> */}




      <h2 className='para' > Lahore Feeder Routes (Phase I)   </h2>
   <Container   href="" className='igg' >
        <img className='lo' src={logo}  alt="" />
        </Container>
        <div className='para'>
      <p>
    The PMA is operating masstransit line in Lahore known as Lahore Metrobus system (LMBS) since February 10, 2013. In order to increase the coverage area of LMBS, the PMA has planned to operate integrated public transport routes with Metrobus Line. The Integrated Public Transport Network / Route has broadly three components i.e. physical, operational and fare integration.

    <br/>
    <br/>

The physical aspect of integration deals with convenient transfer of passengers from feeder buses to Metrobus Line and within feeder buses. The convenient transfer will allow shortest walking distance from bus stop to Metrobus Station and vice versa.
<br/>
<br/>

The operational integration aspect of planned system will ensure that headway (successive interval between buses) and operation hours matched between feeder buses and Metrobus line.

An integrated fare is the fare charge for an amount of travel between two points in a public transport system, irrespective of the number of modes / services and operators involved in making the journey. This means that a passenger travelling from point A to C via B using two different operators / routes is charged a single fare for the journey as distinct from the alternative of charging two fares A to B + B to C. Integration of fare has social and financial objective; whose design utilizes Automated Fare Collection technologies for implementation of the plan.  

The Phase I of the project has 200 buses which includes 162 Standard Buses (12-meter) and 38 Mini Buses (8-meter).

<br/>
<br/>

PMA has engaged an independent service provider, for provisioning of Automated Fare Collection and Bus Scheduling System (AFC-BSS) system which serves as a Management Information System (MIS). The AFC-BSS coupled with necessary hardware and software authenticate entry / exit of passengers into buses, and to monitor adherence to bus schedules. Each 12-meter long feeder bus have two on-board validators for authentication of entry / exit of passengers whereas each 8-meter long feeder bus is to have one on-board validator. Passengers shall use one stored value rechargeable Smart Cards for their journey in the Integrated Public Transport routes. These feeder buses have On-Board E-ticketing System and passenger will tap cards on Validator for fare authentication / deduction. One person is positioned in the bus to facilitate / guide the passengers.

The Driver Console / On-Board Unit installed on buses shall be used to track buses accurately and reliably. The PMA receive live passenger data, financial data, and Automatic Vehicle Location data in Control Center.

Efficient surveillance system is designed for the operation management of public transport system. PMA has installed cameras along the road at intersection, and at critical points for better operational management of buses, and bringing cost and operation efficiency. The surveillance system will also help in implementation of Service Level Agreement. The overall system is designed to be controlled and monitored from the Lahore Metrobus Command & Control Center. The buses have wireless communication system to connect with Control Center in case of emergency and broadcast information from Control Center to buses.

The Feeder Routes started their operations on March 20, 2017.
</p>
</div>
    </div>
  )
}

export default Aboutus
