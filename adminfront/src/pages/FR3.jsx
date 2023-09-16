// import React from 'react'
// //  import Speedo from '../Component/Speedo'
// import bg from "../images/bg.jpg"
// import Table from 'react-bootstrap/Table';
// import Map from "../Component/Map"

//  import {Routes} from '../pages/Routesinfo'
// // import Path from "../Component/Path"
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Bus3() {
//   return (
    
//     <div className='card-inner'>
//       <div className='card-heading'>
     
//       <h3 className="cards-title">  FR 3</h3>

//        <div className='Routes'   ></div>
//       <div className='bus_number'  ></div>
//       <div  className='Route' ></div>
//       <div className='Total_stops'  ></div>
//       <div className='All_stops'  ></div> 
//        {/* <Speedo/>  */}

//       {/* <Path/> */}
//       </div>

// <div className='card-content' >
//   <div className='content-block'>
//   {/* <img src={bg} alt=''  className='bg' /> */}
    




      
//   </div>





// </div>

// <Table className='lgg' striped bordered hover variant="dark" size="sm">
// <thead>
  
//   <tr>
    
//     <th>Bus Number</th>
//     <th>All stops</th>
//     <th>Route</th>
//     <th>Total stops</th>
//     <th></th>
//   </tr>
// </thead>
// <tbody>
  
//   <tr>
    
//     <td>{Routes[0].bus_number3}</td>
//     <td>{Routes[0].All_stops3}</td>
//     <td>{Routes[0].Route3}</td>
//     <td>{Routes[0].Total_stops3}</td>
//   </tr>
 


 




// </tbody>
// </Table>




//     <Map/>



//     </div>
//   )
// }

// export default Bus3







import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Routes } from './Routesinfo';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

const MyMap = () => {
  const laptopPositions = [
    { position: [31.5056504, 74.3837572], text: 'R.A bazar' },
    { position: [31.481649, 74.3550832], text: 'Defence morr' },
  ]; // Laptop GPS coordinates

  const [androidPosition, setAndroidPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    if (L) {
      const androidLatLng = L.latLng(31.4505007, 74.3532971);
      if (androidLatLng) {
        setAndroidPosition(androidLatLng);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const androidLatLng = L.latLng(31.4505007, 74.3532971);
          if (androidLatLng) {
            setAndroidPosition(androidLatLng);

            const calculatedDistance = androidLatLng.distanceTo(L.latLng(laptopPositions[0].position));
            setDistance(calculatedDistance);

            const walkingSpeed = 5; // km/h
            const remainingTimeInHours = calculatedDistance / (walkingSpeed * 1000);
            const remainingTimeInMinutes = Math.ceil(remainingTimeInHours * 60);
            setRemainingTime(remainingTimeInMinutes);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const polylinePositions = laptopPositions.map((position) => position.position);

  return (
    <div>
      <div className='card-inner'>
        <div className='card-heading'>
          <h3 className='cards-title'>FR 3</h3>
          <div className='Routes'></div>
          <div className='bus_number'></div>
          <div className='Route'></div>
          <div className='Total_stops'></div>
          <div className='All_stops'></div>
        </div>
        <div className='card-content'>
          <div className='content-block'></div>
        </div>
        <Table className='lgg' striped bordered hover variant='dark' size='sm'>
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
              <td>{Routes[0].bus_number3}</td>
              <td>{Routes[0].All_stops3}</td>
              <td>{Routes[0].Route3}</td>
              <td>{Routes[0].Total_stops3}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div>
        <MapContainer center={laptopPositions[0].position} zoom={14} style={{ height: '100vh' }}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          {laptopPositions.map((position, index) => (
            <Marker key={index} position={position.position}>
              <Popup>{position.text}</Popup>
            </Marker>
          ))}

          {androidPosition && (
            <Marker position={androidPosition}>
              <Popup>Chungi amar sidhu</Popup>
            </Marker>
          )}

          <Polyline positions={polylinePositions} color='red' />
        </MapContainer>

        {distance && <p>Distance: {distance.toFixed(2)} meters</p>}
        {remainingTime && <p>Remaining Time: {remainingTime} minutes</p>}
      </div>
    </div>
  );
};

export default MyMap;







