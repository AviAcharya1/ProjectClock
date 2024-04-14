import React from 'react'
import CityTime from './CityAndTime'

export default function ClockDashboard() {
    const cities = [
        { name: "New York", timezone: "America/New_York" },
        { name: "London", timezone: "Europe/London" },
        { name: "Bengaluru", timezone: "Asia/Kolkata"},
        { name: "New Delhi", timezone: "Asia/Kolkata"},
    ];
  return (
      <div className='dashboard'>
        <h1 className='head'>CLOCK-BOARD</h1>
        <div className="clock-dashboard">
            {cities.map((city, index) => (
            <div className="city-time" key={index}>
                <CityTime city={city} />
            </div>
            ))}
        </div>
      </div>
  )
}
