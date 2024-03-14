// "use client";
// import { useEffect, useState } from "react";

// function getUserLocation(setLocation, setError) {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         if (position.coords) {
//           setLocation(`${position.coords}`);
//           console.log(position.coords);
//         }
//       },
//       (error) => {
//         console.error(`Geolocation error: ${error.message}
// `);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }
// }

// export const useGeolocation = () => {
//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storageData = global?.localStorage?.getItem("harvest");
//     console.log(JSON.parse(storageData));
//     if (storageData) return;
//     getUserLocation(setLocation, setError);
//   }, []);

//   return { location };
// };
