# SIH-23 Disaster Response Prototype

This repository contains multiple prototypes that together simulate an end-to-end disaster relief pipeline. Each directory contains an independent module used during different stages of an emergency.

## Project Flow
1. **Alarm Generation** – Simulated sensors continuously log earthquake and tsunami readings. When magnitudes cross safe limits, an SMS alert is issued and a siren is played.
2. **Basic Website** – A lightweight website where affected people can raise SOS requests, share their location and specify the kind of help required.
3. **Drone Coordinates** – Python utilities compute optimal drone routes from the base station to locations of interest.
4. **Object Identification using Drone YOLO** – Drone footage is processed with YOLOv8 to detect people so rescuers can prioritise areas.

The modules are prototypes but together illustrate a possible workflow for early warning, request collection, navigation and victim detection.

## Repository Structure
- `Alarm Generation/` – sensor simulation and alert scripts. See [Alarm Generation/Alarm Generation.md](Alarm%20Generation/Alarm%20Generation.md).
- `Basic Website/` – static website and JavaScript for the SOS interface. See [Basic Website/Basic Website.md](Basic%20Website/Basic%20Website.md).
- `Drone coordinates/` – coordinate generation, distance calculation and route optimisation. See [Drone coordinates/Drone coordinates.md](Drone%20coordinates/Drone%20coordinates.md).
- `Object Identification using Drone YOLO/` – YOLO-based object detection code. See [Object Identification using Drone YOLO/Object Identification using Drone YOLO.md](Object%20Identification%20using%20Drone%20YOLO/Object%20Identification%20using%20Drone%20YOLO.md).

Python 3.8 or later is recommended. Install dependencies with `pip install -r requirements.txt` (a requirements file is not included, so install packages referenced in each module's README).

