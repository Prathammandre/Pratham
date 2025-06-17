document.getElementById('orderStatusForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const customerId = document.getElementById('customerId').value;

    const response = await fetch(`http://localhost:5000/api/order/status/${customerId}`);
    const result = await response.json();
    document.getElementById('status').innerText = JSON.stringify(result);
});

// File: customer-web/js/tips.js
document.getElementById('tipForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const restaurantId = document.getElementById('restaurantId').value;
    const tipAmount = document.getElementById('tipAmount').value;

    const response = await fetch('http://localhost:5000/api/tips/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ restaurantId, tipAmount, customerId: 1 })
    });

    const result = await response.json();
    alert(result.message);
});
