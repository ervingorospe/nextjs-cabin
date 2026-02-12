import { useRef, useEffect, useCallback } from "react";

export default function useClickOutside(handler: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e?.target as Node)) {
        handler();
      }
    },
    [handler],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return { ref };
}
