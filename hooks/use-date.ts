"use client"

import * as React from "react";

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
      const timer = setInterval(() => { 
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

  const time = {
    "12": today.toLocaleTimeString(locale, {   hour: 'numeric', hour12: true, minute: 'numeric',second: 'numeric' }),
    "24": today.toLocaleTimeString(locale, {   hour: 'numeric', hour12: false, minute: 'numeric',second: 'numeric' })
  };

  return {
    today,
    time,
    wish,
  };
};
