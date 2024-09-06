import random

def drone_coordinates():
    # Generate two positive random integers
    random_number1 = random.randint(129000000, 129500000)/10000000
    random_number2 = random.randint(7752649394220000, 7752649394230000)/100000000000000

    return random_number1, random_number2
