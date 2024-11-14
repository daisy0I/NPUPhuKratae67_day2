// ChartComponents.js
import React , { useState,useEffect } from 'react';
import './App.css'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from 'recharts';

export const EnergyChart = ({ data }) =>  {
    const [isPaused, setIsPaused] = useState(false);
    const [displayData, setDisplayData] = useState(data);
    const togglePause = () => setIsPaused(!isPaused);

    useEffect(()=>{
        if (!isPaused){
            const updatedData = data.length > 200 ? data.slice(-200) : data;
            setDisplayData(updatedData);
        }},[data, isPaused]);
return (
  <div className="chart-container">
    <h3 className="chart-title" style={{ borderColor: '#8884d8' }}>Energy Consumption</h3>
    <button  onClick={togglePause} style={{
          backgroundColor: isPaused ? 'red' :'green' ,
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>STATUS {isPaused ? '◎STOP ◎' : '◉START◉'}</button>
    <LineChart width={300} height={200} data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="energy" stroke="#8884d8" />
      <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
    </LineChart>
  </div>
); };

export const PressureChart = ({ data }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [displayData, setDisplayData] = useState(data);
    const togglePause = () => setIsPaused(!isPaused);

    useEffect(()=>{
        if (!isPaused){
            const updatedData = data.length > 200 ? data.slice(-200) : data;
            setDisplayData(updatedData);
        }},[data, isPaused]);
return (
  <div className="chart-container">
    <h3 className="chart-title" style={{ borderColor: '#82ca9d' }}>Pressure</h3>
    <button  onClick={togglePause} style={{
          backgroundColor: isPaused ? 'red' :'green' ,
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>STATUS {isPaused ? '◎STOP ◎' : '◉START◉'}</button>
    <LineChart width={300} height={200} data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
      <Brush dataKey="timestamp" height={30} stroke="#82ca9d" />
    </LineChart>
  </div>
); };

export const ForceChart = ({ data }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [displayData, setDisplayData] = useState(data);
    const togglePause = () => setIsPaused(!isPaused);

    useEffect(()=>{
        if (!isPaused){
            setDisplayData(data);
        }},[data, isPaused]);
return(
  <div className="chart-container">
    <h3 className="chart-title" style={{ borderColor: '#8884d8' }}>Force</h3>
    <button  onClick={togglePause} style={{
          backgroundColor: isPaused ? 'red' :'green' ,
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>STATUS {isPaused ? '◎STOP ◎' : '◉START◉'}</button>
    <BarChart width={300} height={200} data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="force" fill="#8884d8" />
      <Brush dataKey="timestamp" height={30} stroke="#8884d8" />
    </BarChart>
  </div>
);};

export const CycleCountChart = ({ data }) =>  {
    const [isPaused, setIsPaused] = useState(false);
    const [displayData, setDisplayData] = useState(data);
    const togglePause = () => setIsPaused(!isPaused);

    useEffect(()=>{
        if (!isPaused){
            setDisplayData(data);
        }},[data, isPaused]);
return(
  <div className="chart-container">
    <h3  className="chart-title" style={{ borderColor: '#82ca9d' }}>Cycle Count</h3>
    <button  onClick={togglePause} style={{
          backgroundColor: isPaused ? 'red' :'green' ,
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>STATUS {isPaused ? '◎STOP ◎' : '◉START◉'}</button>
    <BarChart width={300} height={200} data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="cycle_count" fill="#82ca9d" />
      <Brush dataKey="timestamp" height={30} stroke="#82ca9d" />
    </BarChart>
  </div>
);};

export const PositionChart = ({ data }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [displayData, setDisplayData] = useState(data);
    const togglePause = () => setIsPaused(!isPaused);

    useEffect(()=>{
        if (!isPaused){
            setDisplayData(data);
        }},[data, isPaused]);
return(
  <div className="chart-container">
    <h3 className="chart-title" style={{ borderColor: '#ffc658' }} >Punch Position</h3>
    <button  onClick={togglePause} style={{
          backgroundColor: isPaused ? 'red' :'green' ,
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>STATUS {isPaused ? '◎STOP ◎' : '◉START◉'}</button>
    <LineChart width={600} height={200} data={displayData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="position" stroke="#ffc658" />
      <Brush dataKey="timestamp" height={30} stroke="#ffc658" />
    </LineChart>
  </div>
);};
