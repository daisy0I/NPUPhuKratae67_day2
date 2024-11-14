// App.js
import React, { useState, useEffect } from 'react';
import {
  EnergyChart,
  PressureChart,
  ForceChart,
  CycleCountChart,
  PositionChart
} from './ChartComponents';
import './App.css'
// ฟังก์ชันเพื่อสร้างข้อมูลจำลอง
const generateMockData = (index) => {
    const power = 90 + Math.random() * 20;
    const voltageL1 = 230 + Math.random() * 5;
    const voltageL2 = 230 + Math.random() * 5;
    const voltageL3 = 230 + Math.random() * 5;
    const pressure = index % 2 === 0 ? 1 + Math.random() * 0.1 : -1 + Math.random() * 0.1;
    const force = index % 2 === 0 ? 1 + Math.random() * 0.1 : -1 + Math.random() * 0.1;
    const cycleCount = index % 20000;
    const position = (index % 200) * 0.5;
  
    return {
      timestamp: new Date().toISOString(),
      energy: power,
      voltage: { "L1-GND": voltageL1, "L2-GND": voltageL2, "L3-GND": voltageL3 },
      pressure: pressure,
      force: force,
      cycle_count: cycleCount,
      position: position
    };
  };
  
  const App = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setData((prevData) => {
          const newData = generateMockData(prevData.length);
          return [...prevData, newData].slice(-20);
        });
      }, 10);
  
      return () => clearInterval(intervalId);
    }, []);
  

  return (
    <div className="dashboard">
      <h2>Real-Time Machine Dashboard</h2>
      <div className="chart-row">
        <EnergyChart data={data} />
        <PressureChart data={data} />
      </div>
      <div className="chart-row">
        <ForceChart data={data} />
        <CycleCountChart data={data} />
      </div>
      <div className="chart-row">
        <PositionChart data={data} />
      </div>
    </div>
  );
}

export default App;
