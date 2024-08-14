
  
  function initMap() {
    window.scrollTo(0,650)
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15,
        mapId: "6c360a8f3fcf62aa",
      });
      infoWindow = new google.maps.InfoWindow();
  
      const locationButton = document.createElement("button");
  
      locationButton.textContent = "Pan to Current Location";
      locationButton.classList.add("custom-map-control-button");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              var marker = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.BOUNCE,
                icon: {
                    url: 'customer-service.png', // Replace with your custom marker icon
                    scaledSize: new google.maps.Size(50, 50), // Adjust the size as needed
                },
            });
  
              infoWindow.setPosition(pos);
             
              infoWindow.open(map);
              map.setCenter(pos);
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            },
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });
      const destination = new google.maps.LatLng(12.90323, 77.52263); // Replace with your actual destination coordinates
      destinationMarker = new google.maps.Marker({
        position: destination,
        map: map,
        icon: {
            url: 'drone-delivery.png', // Replace with your custom marker icon
            scaledSize: new google.maps.Size(50, 50), // Adjust the size as needed
        },
      });

  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation.",
    );
  }

  function showEmergencyForm() {
    window.scrollTo(0,3000)
    var form = document.getElementById('emergencyForm');
    form.style.display = form.style.display === 'flex';
  }
  
  function updateEssentials() {
    var disasterType = document.getElementById('disasterType').value;
    var essentialsDropdown = document.getElementById('essentialType');
  
    // Clear previous options
    essentialsDropdown.innerHTML = '';
  
    // Add essentials based on the selected disaster
    switch (disasterType) {
      case 'floods':
        addEssentials(['Food', 'Water', 'Blankets', 'Medical Supplies']);
        break;
      case 'earthquake':
        addEssentials(['First Aid Kit', 'Flashlight', 'Canned Food', 'Water']);
        break;
      case 'landslides':
        addEssentials(['Shelter', 'Emergency Rations', 'Communication Devices']);
        break;
      // Add more cases for other disasters
    }
  }
  
  function addEssentials(essentials) {
    var essentialsDropdown = document.getElementById('essentialType');
  
    for (var i = 0; i < essentials.length; i++) {
      var option = document.createElement('option');
      option.value = essentials[i];
      option.text = essentials[i];
      essentialsDropdown.add(option);
    }
  }
  
  function submitForm() {
    // Show prompt for location access
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayMap);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  

  
  