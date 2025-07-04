import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);

      return () => {
        clearInterval(interval);
      };
    }, 10);
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
