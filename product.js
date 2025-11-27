// Product Page JavaScript
let currentProduct = null;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initializeProductPage();
  updateCartBadge();
});

function initializeProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  currentProduct = products.find(p => p.id === productId);
  
  if (!currentProduct) {
    window.location.href = 'index.html';
    return;
  }
  
  renderProductDetails();
  renderRelatedProducts();
  updateBreadcrumb();
}

function updateBreadcrumb() {
  const category = categories.find(c => c.id === currentProduct.category);
  const breadcrumb = document.getElementById('breadcrumb');
  
  if (category && breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">خانه</a> / 
      <a href="category.html?cat=${category.id}">${category.name}</a> / 
      <span>${currentProduct.name}</span>
    `;
  }
}

function renderProductDetails() {
  const discount = Math.round(((currentProduct.price - currentProduct.discountedPrice) / currentProduct.price) * 100);
  const isPremium = currentProduct.price > 1000000;
  
  // Main Image
  document.getElementById('mainImage').src = currentProduct.image;
  document.getElementById('mainImage').alt = currentProduct.name;
  
  // Thumbnails (using same image for demo)
  const thumbnailsContainer = document.getElementById('thumbnails');
  thumbnailsContainer.innerHTML = Array(4).fill(0).map((_, i) => `
    <img src="${currentProduct.image}" alt="${currentProduct.name} ${i+1}" 
         class="thumbnail ${i === 0 ? 'active' : ''}" 
         onclick="changeMainImage(${i}, '${currentProduct.image}')">
  `).join('');
  
  // Product Info
  document.getElementById('productName').textContent = currentProduct.name;
  document.getElementById('productBrand').textContent = currentProduct.brand;
  
  // Rating
  const ratingContainer = document.getElementById('productRating');
  ratingContainer.innerHTML = `
    <span class="stars">${'★'.repeat(Math.floor(currentProduct.rating))}${'☆'.repeat(5 - Math.floor(currentProduct.rating))}</span>
    <span class="rating-count">(${currentProduct.reviews} نظر)</span>
  `;
  
  // Prices
  document.getElementById('originalPrice').textContent = formatPrice(currentProduct.price);
  document.getElementById('currentPrice').textContent = formatPrice(currentProduct.discountedPrice);
  document.getElementById('discountBadge').textContent = `${discount}٪ تخفیف`;
  
  if (isPremium) {
    const premiumBadge = document.createElement('span');
    premiumBadge.className = 'premium-badge-inline';
    premiumBadge.textContent = '⭐ پریمیوم';
    document.getElementById('productName').appendChild(premiumBadge);
  }
  
  // Description
  document.getElementById('productDescription').textContent = currentProduct.description;
  
  // Ingredients
  document.getElementById('productIngredients').textContent = currentProduct.ingredients;
  
  // Usage
  document.getElementById('productUsage').textContent = currentProduct.usage;
  
  // Reviews
  renderReviews();
}

function changeMainImage(index, imageSrc) {
  currentImageIndex = index;
  document.getElementById('mainImage').src = imageSrc;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

function updateQuantity(change) {
  const input = document.getElementById('quantityInput');
  let value = parseInt(input.value) || 1;
  value += change;
  
  if (value < 1) value = 1;
  if (value > 99) value = 99;
  
  input.value = value;
}

function addToCartFromProduct() {
  const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
  
  for (let i = 0; i < quantity; i++) {
    addToCart(currentProduct.id);
  }
}

function addToWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const exists = wishlist.find(item => item.id === productId);
  
  if (!exists) {
    wishlist.push(product);
    showNotification('محصول به علاقه‌مندی‌ها اضافه شد');
  } else {
    showNotification('محصول قبلاً اضافه شده است');
  }
}

function renderReviews() {
  const container = document.getElementById('reviewsContainer');
  
  // Mock reviews
  const mockReviews = [
    { name: 'فاطمه م.', rating: 5, date: '۱۴۰۳/۰۸/۱۵', comment: 'محصول عالی با کیفیت عالی. خیلی راضیم.' },
    { name: 'محمد ر.', rating: 4, date: '۱۴۰۳/۰۸/۱۲', comment: 'برای قیمتی که داره عالیه.' },
    { name: 'زهرا ا.', rating: 5, date: '۱۴۰۳/۰۸/۱۰', comment: 'دقیقاً همون چیزی بود که می‌خواستم. پیشنهاد می‌کنم.' }
  ];
  
  container.innerHTML = mockReviews.map(review => `
    <div class="review-card">
      <div class="review-header">
        <div>
          <div class="review-author">${review.name}</div>
          <div class="review-date">${review.date}</div>
        </div>
        <div class="review-rating">
          <span class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
        </div>
      </div>
      <div class="review-comment">${review.comment}</div>
    </div>
  `).join('');
}

function renderRelatedProducts() {
  const container = document.getElementById('relatedProducts');
  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);
  
  container.innerHTML = related.map(product => renderProductCard(product)).join('');
}

function renderProductCard(product) {
  const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
  
  return `
    <div class="product-card" onclick="goToProduct(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-badge">${discount}٪ تخفیف</div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="original-price">${formatPrice(product.price)}</span>
          <span class="current-price">${formatPrice(product.discountedPrice)}</span>
        </div>
      </div>
    </div>
  `;
}