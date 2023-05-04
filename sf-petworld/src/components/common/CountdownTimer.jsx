import React, { useEffect, useState } from "react";

function CounterTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = new Date(endDate) - currentTime;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        return setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [endDate]);

  return (
    <div>
      <ul>
        <li>
          {timeLeft.days} <span>days</span>
        </li>
        <li>
          {timeLeft.hours} <span>Hours</span>{" "}
        </li>
        <li>
          {timeLeft.minutes} <span>Mins</span>
        </li>
        <li>
          {timeLeft.seconds} <span>Secs</span>
        </li>
      </ul>
    </div>
  );
}

export default CounterTimer;
