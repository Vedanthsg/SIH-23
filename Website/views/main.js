// main.js
function submitForm() {
    const booleanInput = document.getElementById('booleanInput').value;

    // Send the booleanInput to the server using fetch
    fetch('/api/storeBoolean', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ booleanInput }),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Boolean input ${data.booleanInput} has been stored successfully!`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
