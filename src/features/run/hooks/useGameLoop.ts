import { useEffect, useRef, useState } from "react";

export function useGameLoop(
  isActive: boolean,
  speedMultiplier: 0 | 1 | 2 | 4 | "SKIP",
  tickCallback: () => void
) {
  const savedCallback = useRef(tickCallback);
  const [isVisible, setIsVisible] = useState(
    typeof document !== "undefined" ? !document.hidden : true
  );

  useEffect(() => {
    savedCallback.current = tickCallback;
  }, [tickCallback]);

  // Handle visibility changes to prevent Alt+Tab crashes
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isActive || !isVisible || speedMultiplier === 0) return; // Pause loop when tab is hidden or paused

    if (speedMultiplier === "SKIP") {
      const id = setInterval(() => {
        savedCallback.current();
      }, 50); // Fast forward tick
      return () => clearInterval(id);
    }

    const intervalMs = speedMultiplier === 4 ? 500 : (speedMultiplier === 2 ? 1000 : 2000);
    const id = setInterval(() => {
      savedCallback.current();
    }, intervalMs);

    return () => clearInterval(id);
  }, [isActive, speedMultiplier, isVisible]);
}
