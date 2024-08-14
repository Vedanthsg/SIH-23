from geopy.geocoders import Nominatim

def base_coordinates():
    loc = Nominatim(user_agent="Get Bengaluru")
    getLoc = loc.geocode("Global Academy of Technology Bangalore")

    return getLoc.latitude, getLoc.longitude