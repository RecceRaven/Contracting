const buttonElement = document.getElementById('calculate');

function calculateCost() {
    // Get input values
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var costPerSqFt = parseFloat(document.getElementById("cost").value);

    // Calculate area in square feet
    var area = length * width;

    // Calculate total cost
    var totalCost = area * costPerSqFt;

    // Display total cost
    document.getElementById("totalCost").innerText = totalCost.toFixed(2);
}

buttonElement.addEventListener('click', calculateCost);
