from geopy.distance import geodesic
from drone_coordinates import drone_coordinates
from base_coordinates import base_coordinates

def calculate_and_print_distance():

    drone_latitude, drone_longitude = drone_coordinates()
    base_latitude ,base_longitude = base_coordinates()

    first_location = (base_latitude, base_longitude)
    second_location = (drone_latitude, drone_longitude)
    
    distance = int(geodesic(first_location, second_location).m)
    
    print(distance, "meter")
    print(drone_latitude,drone_longitude)

for i in range(1,11):
    calculate_and_print_distance()
    print("Location ID: ", i)