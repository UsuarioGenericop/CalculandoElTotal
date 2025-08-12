// Select the h1 element directly
var result = document.querySelector(".number");

// Set the text content
result.innerHTML = 400000;
var total = document.querySelector(".totalhtml");
total.innerHTML = 0;

// Function to calculate and display total price
function calculateTotal() {
  const precio = 400000; // Precio base
  const cantidad = parseInt(document.querySelector(".totalhtml").innerHTML);
  const totalPrecio = precio * cantidad;
  document.querySelector(".number").innerHTML = totalPrecio;
}

// Initial calculation
calculateTotal();
