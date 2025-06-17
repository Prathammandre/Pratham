document.getElementById('otpForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const restaurantId = document.getElementById('restaurantId').value;

    const response = await fetch('http://localhost:5000/api/restaurants/generate-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurantId })
    });

    const result = await response.json();
    alert(`OTP: ${result.otp}`);
});