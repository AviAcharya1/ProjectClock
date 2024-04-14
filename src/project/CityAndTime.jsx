import React, { useState, useEffect } from "react";

export default function CityTime({ city }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = formatTimeForTimezone(time, city.timezone);

  return (
    <>
      <h3>{city.name}</h3>
      <p>{formattedTime}</p>
    </>
  );
}

function formatTimeForTimezone(time, timezone) {
  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const timezoneTime = new Date(
    time.toLocaleString("en-US", {
      timeZone: timezone,
    })
  );

  return timezoneTime.toLocaleTimeString("en-US", options);
}