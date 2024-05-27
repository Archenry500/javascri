// Function to validate the form
function validateForm() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value;
    const salaryExpectation = document.getElementById("salaryExpectation").value;
    const age = document.getElementById("age").value;
  
    // Regular expressions for validation
    const nameRegex = /^(?=\S*\s)(?!.(.).*\1{9})[a-zA-Z\s]{1,20}$/; // Names with a maximum of 4 characters each and 12 characters in total
    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; // Email format
    const phoneRegex = /^\d{11}$/; // Exactly 10 digits
    const addressRegex = /^[a-zA-Z0-9\s,'-]*$/; // Alphanumeric characters, spaces, commas, dashes, and apostrophes
    const skillsRegex = /^[a-zA-Z,\s]+$/; // Only letters, commas, and spaces
    const salaryRegex = /^(?:(?:\d{1,5}(?:,\d{3})*)|(?:\d+))$/; // Salary range from 0 to 999,999
    const ageRegex = /^(1[8-9]|[2-5]\d|6[0-5])$/; // Age range from 18 to 65
  
    // Validate name
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (maximum of 4 characters for each name and 12 characters in total).");
      return false;
    }
  
    // Validate email
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Validate address
    if (!addressRegex.test(address)) {
      alert("Please enter a valid address (only alphanumeric characters, spaces, commas, dashes, and apostrophes).");
      return false;
    }
  
    // Validate skills
    if (!skillsRegex.test(skills)) {
      alert("Please enter valid skills (only letters, commas, and spaces).");
      return false;
    }
  
    // Validate salary expectation
    if (!salaryRegex.test(salaryExpectation)) {
      alert("Please enter a valid salary expectation (range from 0 to 999,999).");
      return false;
    }
  
    // Validate age
    if (!ageRegex.test(age)) {
      alert("Please enter a valid age (range from 18 to 65).");
      return false;
    }
  
    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    return true;
  }