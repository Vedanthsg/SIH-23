// Global variable for the map
let map;

// Function to initialize the map
function initMap() {
    // Set the initial map options (you can customize these)
    const mapOptions = {
        center: { lat: 12.9714, lng: 77.5946 }, // Default to Bangalore coordinates
        zoom: 20
    };

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Try HTML5 geolocation to get the user's current location
    const locationButton = document.createElement("button");
  
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Set the map center to the user's current location
                map.setCenter(userLocation);

                // Add a marker for the user's current location
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Your Location"
                });
            },
            () => {
                console.error("Error: The Geolocation service failed.");
            }
        );
    } else {
        console.error("Error: Your browser doesn't support geolocation.");
    }
});
}

function showMap() {
    // Show the map container
    document.getElementById("mapContainer").classList.remove("hidden");

    // Call the map initialization function
    initMap();
}

function showSecondInput() {
    // Show the second input when the first input is chosen
    document.getElementById("secondInput").classList.remove("hidden");
}

function submitForm() {
    // Implement your code to handle form submission
    // You may show a confirmation popup
    alert("Help is on the way. Estimated time of arrival: XX minutes.");
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showEssentials() {
    var disasterTypeSelect = document.getElementById("disasterTypeSelect");
    var secondInput = document.getElementById("secondInput");

    // Show the second set of checkboxes if a disaster type is selected
    secondInput.style.display = disasterTypeSelect.value ? "block" : "none";
}

// function showPosition(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;

//     alert("Latitude: " + latitude + "\nLongitude: " + longitude);
// }

// function showError(error) {
//     switch (error.code) {
//         case error.PERMISSION_DENIED:
//             alert("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             alert("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             alert("An unknown error occurred.");
//             break;
//     }
// }