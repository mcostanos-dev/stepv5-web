"use client";

import { useGeolocation } from "@/hooks/Geolocation.js";
import { Button } from "./Button";
import useUserAgent from "@/hooks/useUserAgentHook";
import useIpFromApi from "@/hooks/useIpFromApi";

const CookieConsent = () => {
  const storageData = global?.localStorage?.getItem("harvest");

  // const { currentPosition, geolocationError } = useGeolocation();
  const { userAgent } = useUserAgent();
  const { ipAddress, referrer, error } = useIpFromApi();
  // const {
  //   location: { latitude, longitude },
  // } = useGeolocation();
  const data = { userAgent, ipAddress, referrer };

  function SetLocalStorage() {
    localStorage.setItem("harvest", JSON.stringify(data));
  }

  return (
    <form>
      <Button variant="default" onClick={SetLocalStorage}>
        Allow Device Information
      </Button>
      <p></p>
    </form>
  );
};

export default CookieConsent;
