document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to test validation

    // Get values from input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    // Regular expression for validating email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Regular expression for validating password (6 or more characters)
    const passwordPattern = /^.{6,}$/;

    // Clear previous error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passError').style.display = 'none';

    let isValid = true;

    // Email validation
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    }

    // Password validation
    if (!passwordPattern.test(password)) {
        document.getElementById('passError').style.display = 'inline';
        isValid = false;
    }

    // If valid, submit form (this will be your form submission logic)
    if (isValid) {
        alert('Login successful!');
        // You can add form submission logic here
    }
});
