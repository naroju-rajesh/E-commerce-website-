// Scroll to Top Function
function scrollToTop() { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
}

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Shopping Cart Functions
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${productName} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(quantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
        return;
    }
    
    let cartHTML = '<table class="cart-table"><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>';
    let grandTotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        cartHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>`*
