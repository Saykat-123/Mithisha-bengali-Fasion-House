// validate.js
function validateForm() {
  var name = document.forms["contactForm"]["name"].value.trim();
  var email = document.forms["contactForm"]["email"].value.trim();
  var message = document.forms["contactForm"]["message"].value.trim();

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}
