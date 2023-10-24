document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');

    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // You can perform payment processing here.
        // In a real application, you would send payment data to a server for processing.

        // For this example, let's simulate a successful payment.
        alert('Payment successful! Thank you for your purchase.');
        clearCart(); // Clear the shopping cart after successful payment
        window.location.href = 'index.html'; // Redirect to the home page
    });
});

function clearCart() {
    localStorage.removeItem('cart');
}
