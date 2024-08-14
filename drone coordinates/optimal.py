from itertools import permutations
from geopy.distance import geodesic
from drone_coordinates import drone_coordinates
from base_coordinates import base_coordinates

def calculate_distance(city1, city2):
    # Calculate the distance between two cities using geodesic distance
    return geodesic(city1, city2).kilometers

def total_distance(route, locations):
    # Calculate the total distance of a route
    distance = 0
    for i in range(len(route) - 1):
        distance += calculate_distance(locations[route[i]], locations[route[i + 1]])
    distance += calculate_distance(locations[route[-1]], locations[route[0]])  # Return to the starting location
    return distance

def traveling_salesperson_bruteforce(locations):
    # Generate all possible routes
    all_routes = permutations(range(len(locations)))

    # Find the route with the minimum total distance
    min_distance = float('inf')
    best_route = None
    for route in all_routes:
        distance = total_distance(route, locations)
        if distance < min_distance:
            min_distance = distance
            best_route = route
    return best_route, min_distance

def main(output_file="output.txt"):
    # Home location
    home_location = base_coordinates()
    nearby_locations = [drone_coordinates() for _ in range(5)]
    print("Affected People Locations ",nearby_locations)

    # All locations (home + nearby)
    all_locations = [home_location] + nearby_locations

    # Find the optimal route for the salesperson to visit all locations
    best_route, min_distance = traveling_salesperson_bruteforce(all_locations)

    # Print the optimal route and minimum distance
    print("Optimal Route:")
    for i in best_route:
        print(all_locations[i])
    
    with open(output_file, "w") as file:
        # file.write("Optimal Route:\n")
        for i in best_route:
            # Format coordinates without brackets
            coordinates_str = ', '.join(map(str, all_locations[i]))
            file.write(f"{coordinates_str}\n")

        # file.write(f"Minimum Distance: {min_distance} kilometers\n")

if __name__ == "__main__":
    main()
