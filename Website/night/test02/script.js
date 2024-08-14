var navLinks= document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right = "0";    
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
    function updateSubSelection() {
        var disasterType = document.getElementById("disasterType").value;
        var subSelectionContainer = document.getElementById("subSelectionContainer");
        var subDisasterTypeSelect = document.getElementById("subDisasterType");
    
        // Clear previous options
        subDisasterTypeSelect.innerHTML = "";
        // Populate sub-selection based on the main selection
        if (disasterType === "manMade") {
            subDisasterTypeSelect.options.add(new Option("Option 1", "option1"));
            subDisasterTypeSelect.options.add(new Option("Option 2", "option2"));
        } else if (disasterType === "natural") {
            subDisasterTypeSelect.options.add(new Option("Option A", "optionA"));
            subDisasterTypeSelect.options.add(new Option("Option B", "optionB"));
        }
    
        // Show or hide the sub-selection container based on the main selection
        subSelectionContainer.style.display = disasterType !== "none" ? "block" : "none";
    }
    
    function confirmSelection() {
        var disasterType = document.getElementById("disasterType").value;
        var subDisasterType = document.getElementById("subDisasterType").value;
    
        if (disasterType !== "none" && subDisasterType) {
            // Hide the form and display the next section
            document.getElementById("disasterForm").style.display = "none";
            document.getElementById("nextSection").style.display = "block";
        } else {
            alert("Please select a valid disaster type and sub-type.");
        }
    }