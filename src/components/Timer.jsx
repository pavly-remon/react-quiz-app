import { useState, useEffect } from "react";
const Timer = ({ timeout, onTimeout }) => {
  const [time, setTime] = useState(timeout);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);
  return <progress value={time} max={timeout} />;
};

export default Timer;
