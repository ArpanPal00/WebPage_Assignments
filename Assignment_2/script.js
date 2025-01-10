document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessages = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        errorMessages += 'Name is required.<br>';
    }

    if (email === '') {
        errorMessages += 'Email is required.<br>';
    } else if (!emailPattern.test(email)) {
        errorMessages += 'Invalid email address.<br>';
    }

    if (errorMessages) {
        document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
        document.getElementById('errorMessages').innerHTML = 'Form submitted successfully!';
        // Here you can add code to submit the form data to the server
    }
});