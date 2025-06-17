document.getElementById('statusForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const orderId = document.getElementById('orderId').value;
    const status = document.getElementById('status').value;

    const response = await fetch('http://localhost:5000/api/order/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status })
    });

    const result = await response.json();
    alert(result.message);
});

async function loadOrders() {
    const response = await fetch('http://localhost:5000/api/order/list');
    const orders = await response.json();
    const orderListDiv = document.getElementById('orderList');
    orderListDiv.innerHTML = JSON.stringify(orders, null, 2);
}

if (document.getElementById('orderList')) loadOrders();
