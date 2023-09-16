import React from 'react'
import Slider from '../Component/Slider'
import Footer from '../Component/Footer'
 import Testimonial from '../Component/Testimonial'


function Home() {
  return (
    <div>
<Slider/>
<div className='pp'>
  <br/> <br/> <br/>
<b><p>Punjab Masstransit Authority (PMA) is a statutory body established by Government of the Punjab with the purpose of planning, construction, operation and 
maintenance of mass transit systems in the major cities of the Punjab. <br/>The services we provide for the betterment of people . Many major routes are covered by the Punjab Masstransit Authority vehiccles.
Orange Train Station , Lahore Metrobus System, , Lahore Feeder Routes , Pakistan Metrobus System  provide conveniences for the people.<br/><br/>  This website will help you locate your desire route and it will also help you to save your time by giving you exact time for the arrival of your feeder bus
The Metrobus Cards are durable and based on secure RFID technology. These cards can be purchased from the Ticket Office at each Metrobus Station for a refundable security deposit of Rs. 130 provided that the card is returned in proper working condition. 
The Metrobus Card can also be purchased via TVM in Pakistan Metrobus System. <br/>
<br/>
People with Metrobus Cards having adequate balance, can proceed directly to the platforms at each station. Metrobus Card and its balance has no expiry. Metrobus Cards are to be tapped at the entry turnstile on the platform, retained during the journey and tapped again into the exit turnstile while exiting the platform.
 Travellers can recharge Metrobus Cards up to a maximum balance of Rs. 1,000 via the self-service Ticket Vending Machine installed at each station, or from the ticket offices. In case of malfunctioning of Metrobus Card, the balance is transferable in new card. 
Please contact nearest Metrobus Station for malfunctioning of the Metrobus Card.

 </p> </b>

</div>
  
     <Testimonial/>  
      
    <Footer/>   
    </div>
  )
}

export default Home
