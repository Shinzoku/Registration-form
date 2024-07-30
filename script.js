// Add an event listener to the form to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Regular expression to forbid special characters
    const forbiddenChars = /[<>]/;

    // Check if the name field is empty or contains forbidden characters
    if (name === '' || forbiddenChars.test(name)) {
        errorMessage.textContent = 'Veuillez entrer un nom valide sans caractères spéciaux (<, >).';
        return;
    }

    // Validate the email format using a helper function
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Veuillez entrer un email valide.';
        return;
    }

    // Ensure the password is at least 6 characters long and does not contain forbidden characters
    if (password.length < 6 || forbiddenChars.test(password)) {
        errorMessage.textContent = 'Le mot de passe doit contenir au moins 6 caractères et ne doit pas contenir de caractères spéciaux (<, >).';
        return;
    }

    // If all validations pass, clear the error message and display success alert
    errorMessage.textContent = '';
    alert('Inscription réussie !');
    // Here you can add code to submit the form data to the server
});

// Helper function to validate email format using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
