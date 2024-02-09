const data = {
    number: "0123456789",
    symbol: "!@#$%^&*()_+-=[]{}|;:,.<>?/~",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz"
};

console.log(data);


// Get the checkbox elements
var upperCheck = document.getElementById("upperCheck");
var lowerCheck = document.getElementById("lowerCheck");
var numCheck = document.getElementById("numCheck");
var symCheck = document.getElementById("symCheck");
var pwVal = document.getElementById("pwInput");
var submitButton  = document.getElementById("submitBtn");
var pwOutput = document.getElementById("pwOutput");
var pwNumber = document.getElementById("pwValue");
// Example function to check the status of checkboxes

function initial(){
    pwNumber.innerHTML = pwVal.value;
}
setInterval(initial,10);
function main() {
    
    // Check if at least one checkbox is checked and password length is provided
    if ((upperCheck.checked || lowerCheck.checked || numCheck.checked || symCheck.checked) && (pwVal.value) &&(pwVal.value<16)) {
        document.getElementById("Warning").style.display = "none"; // Hide the warning message

        const checkedTypes = [];
        if (upperCheck.checked) {
            checkedTypes.push("upper");
        }
        if (lowerCheck.checked) {
            checkedTypes.push("lower");
        }
        if (numCheck.checked) {
            checkedTypes.push("number");
        }
        if (symCheck.checked) {
            checkedTypes.push("symbol");
        }

        // Generate a random password
        let password = "";
        for (let i = 0; i < pwVal.value; i++) {
            const randomType = checkedTypes[Math.floor(Math.random() * checkedTypes.length)];
            const randomString = data[randomType];
            const randomCharIndex = Math.floor(Math.random() * randomString.length);
            password += randomString[randomCharIndex];
        }

        // Display the generated password
        pwOutput.textContent = password;
    }
    else if(pwVal.value>15){
        document.getElementById("Warning").style.display = "flex";
        document.getElementById("Warning").innerHTML="Size should be less than 16";

    } 
    else{
        // Show the warning message if no checkboxes are checked or no password length is provided
        document.getElementById("Warning").style.display = "flex";
    }
}

// Attach the main function to the submit button click event
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    main(); // Call the main function to generate the password
});
