# Basic Website

This directory holds a minimal static website demonstrating a user-facing SOS page. The site uses HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` – Main interface with an Emergency SOS button that reveals a Google Map. Users can select the type of disaster and mark essential supplies required. Geolocation helps pinpoint the user on the map.
- `About.html` – Describes the purpose of the project.
- `Contact.html` – Simple contact form for feedback.

JavaScript logic lives in `script.js`, while `styles.css` and `stylesContact.css` contain the styling.

## Running
Open `index.html` in a browser. The map requires a Google Maps API key: replace the placeholder in the script tag of `index.html` with your key. Once loaded, clicking "Emergency SOS" displays the map and location options.
