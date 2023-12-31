import { useEffect, useState } from "react";

export const useCountdown = (
  initialTime: number,
  callback: () => void,
  interval: number = 1000
) => {
  const [time, setTime] = useState(initialTime);
  useEffect(() => {
    const customInterval = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - interval);
      }
    }, interval);

    if (time === 0) callback();

    return () => clearInterval(customInterval);
  }, [callback, interval, time]);

  return time;
};
