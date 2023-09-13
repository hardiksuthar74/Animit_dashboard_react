import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listeningCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listeningCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listeningCapturing);
  }, [handler, listeningCapturing]);

  return ref;
};
