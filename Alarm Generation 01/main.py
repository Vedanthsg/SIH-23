from twilio.rest import Client
import keys
import csv
client = Client(keys.account_sid, keys.auth_token)
with open('earthquake_data.csv', mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    
    for row in reader:
        if float(row['magnitude']) > 9.5:
            message = client.messages.create(
                body = 'Earthquake Alert: Stay Indoors Emergency Alert Earthquake detected in your area. Drop, cover, and hold on. Stay away from windows. Follow local authorities',
                from_=keys.twilio_number,
                to = keys.target_number
            )
            print(message.body)
            print('earthquake')
with open('tsunami_dataset.csv', mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)    
    for row in reader:
        if float(row['Max_Wave_Height']) > 20:
            message = client.messages.create(
                body = 'Tsunami Warning: A significant earthquake has triggered a potential tsunami. Move to higher ground immediately and follow local authorities',
                from_=keys.twilio_number,
                to = keys.target_number
            )
            print(message.body)
            print("Tsunami")
            