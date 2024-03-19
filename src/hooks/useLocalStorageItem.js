import { useEffect, useState } from "react";

export function useLocalStorageItem(key) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storageItem = localStorage.getItem(key);

      if (storageItem) setItem(storageItem);
    }
  }, [key]);

  return item;
}
