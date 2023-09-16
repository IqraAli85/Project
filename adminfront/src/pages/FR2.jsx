import React from 'react';
import Table from 'react-bootstrap/Table';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { Routes } from './Routesinfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bus2 = () => {
  const position = [31.6088041, 74.3031637];
  const markers = [
    { position: [31.6088041, 74.3031637], text: 'Marker 1' },
    { position: [31.5443047, 74.2946408], text: 'Marker 2' },
  ];

  const createPolyline = (map) => {
    const latlngs = markers.map((marker) => marker.position);

    const polyline = L.polyline(latlngs, { color: 'red' });
    const geojson = polyline.toGeoJSON();
    const url = `https://example.com/?polyline=${encodeURIComponent(JSON.stringify(geojson))}`;
    console.log(url);

    polyline.addTo(map);
  };

  const AddMarkersToMap = () => {
    const map = useMap();

    return (
      <>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.text}</Popup>
          </Marker>
        ))}
        <button onClick={() => createPolyline(map)}>Create polyline</button>
      </>
    );
  };

  return (
    <div>
      <div className='card-inner'>
        <div className='card-heading'>
          <h3 className='cards-title'>FR 2</h3>
          <div className='bus_number2'></div>
          <div className='Route2'></div>
          <div className='Total_stops2'></div>
        </div>

        <div className='card-content'>
          <div className='content-block'>{/* <img src={bg} alt='' className='bg' /> */}</div>
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
              <td>{Routes[0].bus_number2}</td>
              <td>{Routes[0].All_stops2}</td>
              <td>{Routes[0].Route2}</td>
              <td>{Routes[0].Total_stops2}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <MapContainer center={position} zoom={14} style={{ height: '100vh' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <AddMarkersToMap />
      </MapContainer>
    </div>
  );
};

export default Bus2;
