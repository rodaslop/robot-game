import React from "react";

export default function useTimer(initialTime) {
  const [time, setTime] = React.useState(initialTime);

  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const reset = () => {
    setTime(initialTime);
  };

  const toggleStart = () => {
    setIsRunning(!isRunning);
  };

  return {
    time,
    isRunning,
    reset,
    toggleStart,
  };
}
