var map;

function showEmergencyForm() {
  var form = document.getElementById('emergencyForm');
  form.style.display = form.style.display === 'none' ? 'flex' : 'none';
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

function displayMap(position) {
    // Get user's current location
    var userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
  
    // Create a map centered at the user's location
    map = new google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 15
    });
  
    // Add a marker at the user's location
    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'Your Location'
    });
  
    // Display the map container
    document.getElementById('map').style.display = 'block';
  }