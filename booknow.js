document.addEventListener('DOMContentLoaded', function () {
    // Load user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    
    // Get the table number from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const tableNumber = urlParams.get('tableNumber');

    // Populate input fields with user data if available
    if (user) {
        document.getElementById('bookName').value = user.name;
        document.getElementById('bookEmail').value = user.email;
        document.getElementById('bookAddress').value = user.address;
        document.getElementById('bookNumber').value = user.number;
    }

    // Display the table number
    if (tableNumber) {
        document.getElementById('tableNumber').textContent = tableNumber;
    }

    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Update user data with the form values
        const updatedUser = {
            name: document.getElementById('bookName').value,
            email: document.getElementById('bookEmail').value,
            address: document.getElementById('bookAddress').value,
            number: document.getElementById('bookNumber').value
        };

        // Save updated user data to localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));

        alert('Booking confirmed and profile updated!');
        window.location.href = 'profile.html';
    });
});

