"use client";

import { useState, useEffect } from "react";

export default function useIpFromApi() {
  const [ipAddress, setIpAddress] = useState(null);
  const [error, setError] = useState(null);
  const [referrer, setReferrer] = useState(null);
  useEffect(() => {
    const storageData = global?.localStorage?.getItem("harvest");

    if (storageData) return;
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

    fetchData();
  }, []);

  return { ipAddress, referrer, error };
}
