"use client";
// useUserAgent.js
import { useEffect, useState } from "react";

export default function useUserAgent() {
  const [userAgent, setUserAgent] = useState(null);

  useEffect(() => {
    const storageData = global?.localStorage?.getItem("harvest");
    if (storageData) return;

    if (navigator.userAgent) {
      setUserAgent(navigator.userAgent);
    }
  }, []);

  return { userAgent };
}
