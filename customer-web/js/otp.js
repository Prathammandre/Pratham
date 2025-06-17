document.getElementById('otpOrderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const restaurantId = document.getElementById('restaurantId').value;
    const otpCode = document.getElementById('otpCode').value;
    const orderDetails = document.getElementById('orderDetails').value;

    const response = await fetch('http://localhost:5000/api/order/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurantId, otpCode, orderDetails, customerId: 1 })
    });

    const result = await response.json();
    alert(result.message);
});