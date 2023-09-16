// // import React from 'react'
// // //  import Speedo from '../Component/Speedo'
// // import bg from "../images/bg.jpg"
// // import Table from 'react-bootstrap/Table';
// // import Map from "../Component/Map"

// //  import {Routes} from '../pages/Routesinfo'
// // // import Path from "../Component/Path"
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // function Bus3() {
// //   return (
    
// //     <div className='card-inner'>
// //       <div className='card-heading'>
     
// //       <h3 className="cards-title">  FR 3</h3>

// //        <div className='Routes'   ></div>
// //       <div className='bus_number'  ></div>
// //       <div  className='Route' ></div>
// //       <div className='Total_stops'  ></div>
// //       <div className='All_stops'  ></div> 
// //        {/* <Speedo/>  */}

// //       {/* <Path/> */}
// //       </div>

// // <div className='card-content' >
// //   <div className='content-block'>
// //   {/* <img src={bg} alt=''  className='bg' /> */}
    




      
// //   </div>





// // </div>

// // <Table className='lgg' striped bordered hover variant="dark" size="sm">
// // <thead>
  
// //   <tr>
    
// //     <th>Bus Number</th>
// //     <th>All stops</th>
// //     <th>Route</th>
// //     <th>Total stops</th>
// //     <th></th>
// //   </tr>
// // </thead>
// // <tbody>
  
// //   <tr>
    
// //     <td>{Routes[0].bus_number3}</td>
// //     <td>{Routes[0].All_stops3}</td>
// //     <td>{Routes[0].Route3}</td>
// //     <td>{Routes[0].Total_stops3}</td>
// //   </tr>
 


 




// // </tbody>
// // </Table>




// //     <Map/>



// //     </div>
// //   )
// // }

// // export default Bus3



import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { SetLoader } from '../redux/loaderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStop, deleteStop } from '../apicall/businfo';
import moment from 'moment';
import { message, Button } from 'antd';
import ProductsForm from "./Profile/Products/ProductsForm";

const MyMap = () => {
  const laptopPositions = [
    { position: [31.5056504, 74.3837572], text: 'R.A bazar' },
    { position: [31.481649, 74.3550832], text: 'Defence morr' },
  ]; // Laptop GPS coordinates

  const [androidPosition, setAndroidPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  const polylinePositions = laptopPositions.map((position) => position.position);

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

  return (
    <div>
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

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await fetchStop();
      dispatch(SetLoader(false));
      console.log('Response:', response.data);
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const deleteStopHandler = async (id) => {
    try {
      dispatch(SetLoader(true));
      const response = await deleteStop(id);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        fetchData();
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          variant="default"
          className="Button"
          onClick={() => {
            setSelectedProduct(null);
            setShowProductForm(true);
          }}
        >
          Add New Product
        </Button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>All Stops</th>
            <th>Route</th>
            <th>Total Stops</th>
            <th>Added On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products ?? [] /* Provide a default empty array if products is undefined */
            .map((product) => (
              <tr key={product._id}>
                <td>{product.busnumber}</td>
                <td>{product.allstops}</td>
                <td>{product.route}</td>
                <td>{product.totalstops}</td>
                <td>{moment(product.CreatedAt).format('DD/MM/YYYY hh:mm:ss A')}</td>
                <td>
                  <div className="flex gap-5">
                    <i
                      className="ri-pencil-line purple"
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowProductForm(true);
                      }}
                    ></i>
                    <i
                      className="ri-delete-bin-line red"
                      onClick={() => {
                        deleteStopHandler(product._id);
                      }}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showProductForm && (
        <ProductsForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
          selectedProduct={selectedProduct}
          fetchData={fetchData}
        />
      )}
    </div>
  );
}

export default MyMap;
export { Products };

   
