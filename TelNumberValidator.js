document.addEventListener("DOMContentLoaded", function() {

    // Get references to the elements
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div");
    const userInput = document.getElementById("user-input");

    // Regular expression to validate US phone numbers
    const validPhoneNumberPattern = /^(1\s?)?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;

    // Check button functionality
    checkBtn.addEventListener("click", function() {
        const phoneNumber = userInput.value.trim();
        
        // If the input field is empty, show alert
        if (!phoneNumber) {
            alert("Please provide a phone number");
            return;
        }

        // Check if the phone number matches the pattern
        if (validPhoneNumberPattern.test(phoneNumber)) {
            resultsDiv.textContent = "Valid US number: " + phoneNumber;
        } else {
            resultsDiv.textContent = "Invalid US number: " + phoneNumber;
        }
    });

    // Clear button functionality
    clearBtn.addEventListener("click", function() {
        // Clear results and input field
        resultsDiv.textContent = "";
        userInput.value = "";
    });
});