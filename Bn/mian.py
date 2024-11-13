# main.py (FastAPI)

from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import json
import random
import asyncio
import math

app = FastAPI()

def generate_data():
    # จำลองข้อมูลพร้อมเสียงรบกวน
    power = 93.25792203358323 + random.uniform(-1, 1)  # Energy Consumption
    voltage = {
        "L1-GND": 226.85822912416634 + random.uniform(-1, 1),
        "L2-GND": 235.208836731602 + random.uniform(-1, 1),
        "L3-GND": 228.62184471230876 + random.uniform(-1, 1)
    }
    pressure = math.sin(random.uniform(0, 2 * math.pi)) + random.uniform(-0.1, 0.1)  # Square wave
    force = math.sin(random.uniform(0, 2 * math.pi)) + random.uniform(-0.1, 0.1)  # Square wave
    cycle_count = random.randint(0, 20000)
    position_of_punch = (math.sin(cycle_count / 100) + 1) * 50  # Triangular wave

    return {
        "Energy Consumption": {"Power": power},
        "Voltage": voltage,
        "Pressure": pressure,
        "Force": force,
        "Cycle Count": cycle_count,
        "Position of the Punch": position_of_punch
    }

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = generate_data()
        await websocket.send_text(json.dumps(data))
        await asyncio.sleep(1)  # อัปเดตข้อมูลทุกๆ 1 วินาที
        
# ตั้งค่า CORS ให้อนุญาตให้โดเมนที่ต้องการเข้าถึง
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://potential-rotary-phone-jjg4x4x95j42jqv-3001.app.github.dev"],  # ระบุโดเมนที่อนุญาต
    allow_credentials=True,
    allow_methods=["*"],  # สามารถกำหนดได้ว่าอนุญาตให้ใช้ HTTP methods ใด
    allow_headers=["*"],  # สามารถกำหนดได้ว่าอนุญาตให้ใช้ headers อะไร
)