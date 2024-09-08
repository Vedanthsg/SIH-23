
# Earthquake and Tsunami Alert System

This project is designed to monitor seismic activity and provide alerts for potential earthquakes and tsunamis. It uses Python to generate random seismic readings, updates data in an Excel file, and sends alerts through Twilio when thresholds are exceeded. A sound alert (siren) is also triggered in case of an emergency.

## Project Structure

- **`main_earthquake.py`**: Generates random earthquake magnitudes, logs them in an Excel file, and sends earthquake alerts if the magnitude exceeds 7.5.
- **`main_tsunami.py`**: Similar to the earthquake script but for tsunamis; generates random seismic readings, logs them in an Excel file, and sends tsunami alerts if the reading exceeds 16.
- **`keys.py`**: Contains Twilio credentials for sending SMS alerts.
- **`siren.wav`**: A siren sound file that is played when an alert is triggered.
- **`magnitude.xlsx`**: Excel file where earthquake data is logged.
- **`tsunami.xlsx`**: Excel file where tsunami data is logged.

## Requirements

- Python 3
- Required Python modules: `openpyxl`, `random`, `datetime`, `time`, `twilio`, `wave`, `pyaudio`
- Twilio account and credentials
- Excel files for logging (`magnitude.xlsx` and `tsunami.xlsx`)
- Siren sound file (`siren.wav`)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vedanthsg/SIH-23.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Alarm Generation
   ```
3. **Install the required Python packages:**
   ```bash
   pip install openpyxl twilio pyaudio
   ```
4. **Set up Twilio credentials:**
   - Update `keys.py` with your Twilio `account_sid`, `auth_token`, `twilio_number`, and `target_number`.

## Usage

### Running Earthquake Alert System

1. Ensure that `magnitude.xlsx` is present in the specified directory.
2. Run the script:
   ```bash
   python main_earthquake.py
   ```
3. The script will log data every 10 seconds and send alerts if the magnitude is greater than 7.5.

### Running Tsunami Alert System

1. Ensure that `tsunami.xlsx` is present in the specified directory.
2. Run the script:
   ```bash
   python main_tsunami.py
   ```
3. The script will log data every 10 seconds and send alerts if the reading is greater than 16.

## Customization

- **Random Number Range**: Adjust the range of generated random numbers in the `generate_random_number()` function.
- **Alert Threshold**: Modify the alert thresholds in the `if` statements within the `update_excel_file()` function.
- **Excel File Path**: Update the `excel_file_path` variable with the correct path to your Excel files.

## Important Notes

- Ensure the siren sound file (`siren.wav`) is accessible by the scripts for audio alerts.
- Be mindful of Twilio SMS costs; ensure that the target number is correct to avoid unnecessary charges.

## Troubleshooting

- If the siren sound does not play, ensure `pyaudio` is correctly installed and the sound file path is accurate.
- For Twilio errors, double-check your credentials in `keys.py` and ensure your Twilio account is in good standing.


