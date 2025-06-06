# Alarm Generation

This folder emulates earthquake and tsunami monitoring stations. The Python scripts record random sensor readings in Excel files and notify responders when values become dangerous.

## Contents
- `earthquake.py` – Generates random magnitude readings. When a value exceeds **7.5** the script sends an SMS via Twilio and plays `siren.wav`.
- `tsunami.py` – Produces random sea level readings and triggers alerts above **16**.
- `keys.py` – Place your Twilio `account_sid`, `auth_token`, `twilio_number` and `target_number` here.
- `magnitude.xlsx` and `tsunami.xlsx` – Excel workbooks where readings are appended with timestamps.
- `siren.wav` – Audio file used for audible warnings.

## Usage
1. Install dependencies: `pip install openpyxl pyaudio twilio`.
2. Edit the Excel file paths inside `earthquake.py` and `tsunami.py` if they differ from your local setup.
3. Fill in your Twilio credentials in `keys.py`.
4. Run `python earthquake.py` or `python tsunami.py` to start continuous monitoring (the scripts loop every 10 seconds).

Both scripts print the generated readings and notify you by SMS when thresholds are crossed.
