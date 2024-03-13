import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(
    function () {
      const el = ref?.current;

      const callback = (e) => {
        if ("key" in e) {
          if (e.key === "Escape") {
            handler(e);
          }
        }
        if (el && el.contains(e.target)) {
          return;
        }

        handler();
      };

      document.addEventListener("keydown", callback);
      document.addEventListener("mousedown", callback);
      document.addEventListener("touchstart", callback);

      return () => {
        document.removeEventListener("keydown", callback);
        document.removeEventListener("mousedown", callback);
        document.removeEventListener("touchstart", callback);
      };
    },
    [ref, handler]
  );
};

export default useClickOutside;
