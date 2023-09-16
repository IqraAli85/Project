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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const polylinePositions = laptopPositions.map((position) => position.position);

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
};

function Products() {
  return null; // Placeholder for the Products component

  // Rest of the component code
}

export default MyMap;
export { Products };











// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import { SetLoader } from '../../src/redux/loaderSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchStop, deleteStop } from '../../src/apicall/businfo';
// import moment from 'moment';
// import { message, Button } from 'antd';
// import ProductsForm from "../../src/pages/Profile/Products/ProductsForm";

// const MyMap = () => {
//   const laptopPositions = [
//     { position: [31.5056504, 74.3837572], text: 'R.A bazar' },
//     { position: [31.481649, 74.3550832], text: 'Defence morr' },
//   ]; // Laptop GPS coordinates

//   const [androidPosition, setAndroidPosition] = useState(null);
//   const [distance, setDistance] = useState(null);
//   const [remainingTime, setRemainingTime] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [showProductForm, setShowProductForm] = useState(false);
//   const { user } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   const polylinePositions = laptopPositions.map((position) => position.position);

//   const fetchData = async () => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await fetchStop();
//       dispatch(SetLoader(false));
//       console.log('Response:', response.data);
//       if (response.success) {
//         setProducts(response.data);
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   const deleteStopHandler = async (id) => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await deleteStop(id);
//       dispatch(SetLoader(false));
//       if (response.success) {
//         message.success(response.message);
//         fetchData();
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (L) {
//       const androidLatLng = L.latLng(31.4505007, 74.3532971);
//       if (androidLatLng) {
//         setAndroidPosition(androidLatLng);
//       }
//     }

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const androidLatLng = L.latLng(31.4505007, 74.3532971);
//           if (androidLatLng) {
//             setAndroidPosition(androidLatLng);

//             const calculatedDistance = androidLatLng.distanceTo(L.latLng(laptopPositions[0].position));
//             setDistance(calculatedDistance);

//             const walkingSpeed = 5; // km/h
//             const remainingTimeInHours = calculatedDistance / (walkingSpeed * 1000);
//             const remainingTimeInMinutes = Math.ceil(remainingTimeInHours * 60);
//             setRemainingTime(remainingTimeInMinutes);
//           }
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     } else {
//       console.log('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   return (
//     <div>
//       <div>
//         <MapContainer center={laptopPositions[0].position} zoom={14} style={{ height: '100vh' }}>
//           <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

//           {laptopPositions.map((position, index) => (
//             <Marker key={index} position={position.position}>
//               <Popup>{position.text}</Popup>
//             </Marker>
//           ))}

//           {androidPosition && (
//             <Marker position={androidPosition}>
//               <Popup>Chungi amar sidhu</Popup>
//             </Marker>
//           )}

//           <Polyline positions={polylinePositions} color='red' />
//         </MapContainer>

//         {distance && <p>Distance: {distance.toFixed(2)} meters</p>}
//         {remainingTime && <p>Remaining Time: {remainingTime} minutes</p>}
//       </div>

//       <div className="flex justify-end mb-4">
//         <Button
//           variant="default"
//           className="Button"
//           onClick={() => {
//             setSelectedProduct(null);
//             setShowProductForm(true);
//           }}
//         >
//           Add New Product
//         </Button>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Bus Number</th>
//             <th>All Stops</th>
//             <th>Route</th>
//             <th>Total Stops</th>
//             <th>Added On</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products ?? [] /* Provide a default empty array if products is undefined */
//             .map((product) => (
//               <tr key={product._id}>
//                 <td>{product.busnumber}</td>
//                 <td>{product.allstops}</td>
//                 <td>{product.route}</td>
//                 <td>{product.totalstops}</td>
//                 <td>{moment(product.CreatedAt).format('DD/MM/YYYY hh:mm:ss A')}</td>
//                 <td>
//                   <div className="flex gap-5">
//                     <i
//                       className="ri-pencil-line purple"
//                       onClick={() => {
//                         setSelectedProduct(product);
//                         setShowProductForm(true);
//                       }}
//                     ></i>
//                     <i
//                       className="ri-delete-bin-line red"
//                       onClick={() => {
//                         deleteStopHandler(product._id);
//                       }}
//                     ></i>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       {showProductForm && (
//         <ProductsForm
//           showProductForm={showProductForm}
//           setShowProductForm={setShowProductForm}
//           selectedProduct={selectedProduct}
//           fetchData={fetchData}
//         />
//       )}
//     </div>
//   );
// };

// function Products() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [showProductForm, setShowProductForm] = useState(false);
//   const { user } = useSelector((state) => state.users);
//   const dispatch = useDispatch();

//   const fetchData = async () => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await fetchStop();
//       dispatch(SetLoader(false));
//       console.log('Response:', response.data);
//       if (response.success) {
//         setProducts(response.data);
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   const deleteStopHandler = async (id) => {
//     try {
//       dispatch(SetLoader(true));
//       const response = await deleteStop(id);
//       dispatch(SetLoader(false));
//       if (response.success) {
//         message.success(response.message);
//         fetchData();
//       }
//     } catch (error) {
//       dispatch(SetLoader(false));
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="flex justify-end mb-4">
//         <Button
//           variant="default"
//           className="Button"
//           onClick={() => {
//             setSelectedProduct(null);
//             setShowProductForm(true);
//           }}
//         >
//           Add New Product
//         </Button>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Bus Number</th>
//             <th>All Stops</th>
//             <th>Route</th>
//             <th>Total Stops</th>
//             <th>Added On</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products ?? [] /* Provide a default empty array if products is undefined */
//             .map((product) => (
//               <tr key={product._id}>
//                 <td>{product.busnumber}</td>
//                 <td>{product.allstops}</td>
//                 <td>{product.route}</td>
//                 <td>{product.totalstops}</td>
//                 <td>{moment(product.CreatedAt).format('DD/MM/YYYY hh:mm:ss A')}</td>
//                 <td>
//                   <div className="flex gap-5">
//                     <i
//                       className="ri-pencil-line purple"
//                       onClick={() => {
//                         setSelectedProduct(product);
//                         setShowProductForm(true);
//                       }}
//                     ></i>
//                     <i
//                       className="ri-delete-bin-line red"
//                       onClick={() => {
//                         deleteStopHandler(product._id);
//                       }}
//                     ></i>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       {showProductForm && (
//         <ProductsForm
//           showProductForm={showProductForm}
//           setShowProductForm={setShowProductForm}
//           selectedProduct={selectedProduct}
//           fetchData={fetchData}
//         />
//       )}
//     </div>
//   );
// }

// export default MyMap;
// export { Products };
