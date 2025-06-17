document.getElementById('restaurantForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const tables = document.getElementById('tables').value;
    const chairs = document.getElementById('chairs').value;
    const image = document.getElementById('image').value;
    const menu = document.getElementById('menu').value;

    const response = await fetch('http://localhost:5000/api/restaurants/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, tables, chairs, image, menu })
    });

    const result = await response.json();
    alert(result.message);
});