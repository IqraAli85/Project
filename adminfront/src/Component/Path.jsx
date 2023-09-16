// import ReactMapGL from 'react-map-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import { useState } from 'react';


// function Path() {
//   const MAPBOX_ACCESS_TOKEN = '1d0bcede7868849525f8ed288';

//   const [viewport, setViewport] = useState(
//     {
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   }
//   );

//   // Set up the Mapbox Directions API
//   const directions = new MapboxDirections({
//     accessToken: MAPBOX_ACCESS_TOKEN,
//     unit: 'metric',
//     profile: 'mapbox/driving'
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="18%"
//       height="18%"
//       mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
//       onViewportChange={setViewport}
//     >
//       {directions && <directions />}
//     </ReactMapGL>
//   );
// }

// export default Path;
