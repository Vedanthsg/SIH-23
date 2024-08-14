let map;

function initMap() {
    // Function to initialize the map
    map = new google.maps.Map(document.getElementById('mapContainer'), {
        zoom: 12 // Adjust the zoom level as needed
    });
}

function sendSOS() {
    // Function to be executed when SOS button is clicked
    // Request user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Display user's location on the map
                displayLocationOnMap(userLocation);

                // For demonstration purposes, let's assume the ETA is 15 minutes.
                const eta = 15;

                // Display ETA
                displayETA(eta);
            },
            error => {
                console.error(`Error getting user location: ${error.message}`);
                alert('Error getting user location. Please try again.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function displayLocationOnMap(location) {
    // Add code to display location on the map
    // Create a marker for the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'SOS Location'
    });

    // Pan the map to the location
    map.panTo(location);
}

function displayETA(eta) {
    // Display ETA on the webpage
    document.getElementById('eta').innerText = `${eta} minutes`;
}
