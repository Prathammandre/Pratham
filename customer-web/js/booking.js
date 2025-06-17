document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const restaurantId = document.getElementById('restaurantId').value;
    const bookingTime = document.getElementById('bookingTime').value;

    const response = await fetch('http://localhost:5000/api/booking/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurantId, bookingTime, customerId: 1 }) // Dummy customerId for now
    });

    const result = await response.json();
    alert(result.message);
});