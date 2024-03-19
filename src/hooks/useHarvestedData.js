import { date } from "@/lib/utils";
import { useState, useEffect } from "react";

function useHarvestData() {
  const [currentStorage, setCurrentStorage] = useState(null);
  const [location, setLocation] = useState(null);
  const [geolocationError, setGeolocationError] = useState(null);
  const [ipAddress, setIpAddress] = useState(null);
  const [referrer, setReferrer] = useState(null);
  const [userAgent, setUserAgent] = useState(null);
  const [error, setError] = useState(null);
  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storageData = localStorage.getItem("harvest");

      if (storageData) {
        setCurrentStorage(storageData);
        return;
      }

      const getLocation = async () => {
        if (navigator.geolocation) {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          } catch (error) {
            setGeolocationError(error.message);
          }
        } else {
          setGeolocationError("Geolocation is not supported by this browser.");
        }
      };

      const fetchData = async () => {
        try {
          const response = await fetch("/api");
          const data = await response.json();
          setIpAddress(data.ip || null);
          setReferrer(data.referer || null);
        } catch (error) {
          setError(error.message);
        }
      };

      if (navigator.userAgent) {
        setUserAgent(navigator.userAgent);
      }

      getLocation();
      fetchData();
    }
  }, []);

  function saveLocalStorage() {
    const { formattedDate } = date();

    if (typeof window !== "undefined" && window.localStorage) {
      global?.localStorage.setItem(
        "harvest",
        JSON.stringify([
          { ip: ipAddress },
          { referrer: referrer },
          { userAgent: userAgent },
          { location: location },
          { date: formattedDate },
        ])
      );
    }
  }

  function handleAcceptConsent() {
    saveLocalStorage();
    setIsClose(true);
  }

  return {
    currentStorage,
    location,
    geolocationError,
    ipAddress,
    referrer,
    userAgent,
    error,
    isClose,
    setIsClose,
    handleAcceptConsent,
  };
}

export default useHarvestData;
