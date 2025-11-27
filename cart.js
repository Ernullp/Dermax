// Cart Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  updateCartBadge();
});

function renderCart() {
  const container = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartContent = document.getElementById('cartContent');
  
  if (cart.length === 0) {
    emptyCart.style.display = 'block';
    cartContent.style.display = 'none';
    return;
  }
  
  emptyCart.style.display = 'none';
  cartContent.style.display = 'block';
  
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">${formatPrice(item.discountedPrice)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
          <input type="number" value="${item.quantity}" readonly>
          <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-total">${formatPrice(item.discountedPrice * item.quantity)}</div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
  
  updateCartSummary();
}

function updateCartQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  renderCart();
  updateCartBadge();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
  updateCartBadge();
  showNotification('محصول از سبد حذف شد');
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.discountedPrice * item.quantity), 0);
  const shipping = subtotal > 500000 ? 0 : 50000;
  const total = subtotal + shipping;
  
  document.getElementById('subtotal').textContent = formatPrice(subtotal);
  document.getElementById('shipping').textContent = shipping === 0 ? 'رایگان' : formatPrice(shipping);
  document.getElementById('total').textContent = formatPrice(total);
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification('سبد خرید خالی است');
    return;
  }
  
  showNotification('عملیات پرداخت در نسخه نمایشی فعال نیست');
}

function continueShopping() {
  window.location.href = 'category.html';
}