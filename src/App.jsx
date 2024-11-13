// App.jsx (React)

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';
function App() {
    const [apiKey, setApiKey] = useState('');
    const [data, setData] = useState(null);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        if (ws) {
            ws.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);
                setData(parsedData);
            };
        }
    }, [ws]);

    const connect = (event) => {
        event.preventDefault();
        const socket = new WebSocket('ws://technest.ddns.net:8001/ws');
        socket.onopen = () => {
            socket.send(apiKey);
        };
        setWs(socket);
    };

    return (
        <div>
            <h1>WebSocket Real-time Data</h1>
            <form onSubmit={connect}>
                <label>API Key:</label>
                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    autoComplete="off"
                />
                <button type="submit">Connect</button>
            </form>
            <pre id="messages">{data && JSON.stringify(data, null, 2)}</pre>

            {data && (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={[data]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Cycle Count" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Energy Consumption.Power" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Pressure" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Force" stroke="#ff7300" />
                        <Line type="monotone" dataKey="Position of the Punch" stroke="#387908" />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}

export default App;
