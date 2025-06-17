async function loadTips() {
    const response = await fetch('http://localhost:5000/api/tips/list');
    const tips = await response.json();
    const tipListDiv = document.getElementById('tipList');
    tipListDiv.innerHTML = JSON.stringify(tips, null, 2);
}

if (document.getElementById('tipList')) loadTips();