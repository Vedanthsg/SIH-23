# Drone Coordinates

Scripts for generating coordinates and planning drone routes.

## Key Files
- `drone_coordinates.py` – Returns random latitude/longitude pairs representing affected locations.
- `base_coordinates.py` – Uses `geopy` to look up the base station coordinates.
- `main.py` – Prints the distance between the base and a randomly generated location.
- `optimal.py` – Brute force travelling salesman approach to find an efficient route visiting several locations. Results are written to `output.txt`.
- `index.html` / `my_map.html` – Display the generated coordinates on a Google Map.

## Usage
1. Install `geopy` with `pip install geopy`.
2. Run `python main.py` to view a sample distance calculation.
3. Execute `python optimal.py` to create an ordered route and inspect `output.txt`.
4. Open `index.html` or `my_map.html` in a browser to visualise the coordinates (supply a Google Maps API key in the script tags).
