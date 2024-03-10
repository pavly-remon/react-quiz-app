import { useState, useEffect } from "react";
const Timer = ({ timeout, onTimeout }) => {
  const [time, setTime] = useState(timeout);
  useEffect(() => {
    console.log("interval");
    const timer = setInterval(() => {
      setTime((prev) => prev - 100);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    console.log("timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <progress value={time} max={timeout} />;
};

export default Timer;
