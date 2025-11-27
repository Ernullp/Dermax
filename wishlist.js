// Wishlist Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  renderWishlist();
  updateCartBadge();
});

function renderWishlist() {
  const container = document.getElementById('wishlistItems');
  const emptyWishlist = document.getElementById('emptyWishlist');
  const wishlistContent = document.getElementById('wishlistContent');
  
  if (wishlist.length === 0) {
    emptyWishlist.style.display = 'block';
    wishlistContent.style.display = 'none';
    return;
  }
  
  emptyWishlist.style.display = 'none';
  wishlistContent.style.display = 'block';
  
  container.innerHTML = wishlist.map(item => {
    const discount = Math.round(((item.price - item.discountedPrice) / item.price) * 100);
    
    return `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}" class="wishlist-item-image" onclick="goToProduct(${item.id})">
        <div class="wishlist-item-info">
          <div class="wishlist-item-name" onclick="goToProduct(${item.id})">${item.name}</div>
          <div class="wishlist-item-brand">${item.brand}</div>
          <div class="wishlist-item-rating">
            <span class="stars">${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}</span>
            <span class="rating-count">(${item.reviews})</span>
          </div>
          <div class="wishlist-item-prices">
            <span class="original-price">${formatPrice(item.price)}</span>
            <span class="current-price">${formatPrice(item.discountedPrice)}</span>
            <span class="discount-badge">${discount}٪ تخفیف</span>
          </div>
        </div>
        <div class="wishlist-item-actions">
          <button class="btn-add-to-cart" onclick="addToCartFromWishlist(${item.id})">
            افزودن به سبد
          </button>
          <button class="btn-remove" onclick="removeFromWishlist(${item.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            حذف
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function addToCartFromWishlist(productId) {
  addToCart(productId);
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  renderWishlist();
  showNotification('محصول از علاقه‌مندی‌ها حذف شد');
}