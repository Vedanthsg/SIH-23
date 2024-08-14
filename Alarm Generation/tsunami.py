import openpyxl
import random
from datetime import datetime
import time
from twilio.rest import Client  # Import the Twilio Client module
import keys  # Assuming you have a separate file named 'keys.py' with Twilio credentials
import wave
import pyaudio

# Function to generate a random number between 10 and 22
def generate_random_number():
    return random.uniform(10, 22)  # Use 'uniform' for floating-point numbers

# Function to get the current date in the format DD-MM-YYYY
def get_current_date():
    now = datetime.now()
    return now.strftime("%d-%m-%Y %H:%M:%S") 

# Function to send tsunami alert message
def send_tsunami_alert():
    client = Client(keys.account_sid, keys.auth_token)
    message = client.messages.create(
        body='Tsunami Warning: A significant earthquake has triggered a potential tsunami. Move to higher ground immediately and follow local authorities',
        from_=keys.twilio_number,
        to=keys.target_number
    )
    print(message.body)
    print('tsunami Alert Sent')

# Function to update Excel file with random number and date
def update_excel_file(file_path):
    # Load the workbook
    workbook = openpyxl.load_workbook(file_path)
    
    # Select the active sheet
    sheet = workbook.active
    
    # Generate random number and get current date
    random_number = generate_random_number()
    date = get_current_date()
    
    # Update Excel file with renamed columns
    sheet.append([random_number, date])
    
    # Check if tsunami alert is needed
    if random_number > 16:
        send_tsunami_alert()
        def play_sound(file_path):
            chunk = 1024
            wf = wave.open(file_path, 'rb')
            p = pyaudio.PyAudio()
            stream = p.open(format=p.get_format_from_width(wf.getsampwidth()),
                            channels=wf.getnchannels(),
                            rate=wf.getframerate(),
                            output=True)
            data = wf.readframes(chunk)
            while data:
                stream.write(data)
                data = wf.readframes(chunk)
            stream.stop_stream()
            stream.close()
            p.terminate()
        play_sound('siren.wav')

    # Save the changes
    workbook.save(file_path)

# File path to the Excel file
excel_file_path = "C:/Users/sveda/Documents/_SIH/Alarm Generation/tsunami.xlsx"
# Infinite loop to execute the task every 10 seconds
while True:
    update_excel_file(excel_file_path)
    time.sleep(10)