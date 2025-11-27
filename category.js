// Category Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  initializeCategoryPage();
  initializeFilters();
  updateCartBadge();
});

let filteredProducts = [...products];
let currentSort = 'popular';
let activeFilters = {
  brands: [],
  priceRange: [0, 2000000],
  rating: 0,
  inStock: false
};

function initializeCategoryPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('cat');
  const brandName = urlParams.get('brand');
  
  // Update breadcrumb and title
  const breadcrumb = document.getElementById('breadcrumb');
  const pageTitle = document.getElementById('pageTitle');
  
  if (categoryId) {
    const category = categories.find(c => c.id == categoryId);
    if (category) {
      breadcrumb.innerHTML = `<a href="index.html">خانه</a> / <span>${category.name}</span>`;
      pageTitle.textContent = category.name;
      filteredProducts = products.filter(p => p.category == categoryId);
    }
  } else if (brandName) {
    breadcrumb.innerHTML = `<a href="index.html">خانه</a> / <span>برند ${brandName}</span>`;
    pageTitle.textContent = `برند ${brandName}`;
    filteredProducts = products.filter(p => p.brand === brandName);
  } else {
    breadcrumb.innerHTML = `<a href="index.html">خانه</a> / <span>همه محصولات</span>`;
    pageTitle.textContent = 'همه محصولات';
  }
  
  renderBrandFilters();
  renderProducts();
  updateResultCount();
}

function renderBrandFilters() {
  const container = document.getElementById('brandFilters');
  const uniqueBrands = [...new Set(products.map(p => p.brand))];
  
  container.innerHTML = uniqueBrands.map(brand => `
    <label class="filter-checkbox">
      <input type="checkbox" value="${brand}" onchange="handleBrandFilter(this)">
      <span>${brand}</span>
    </label>
  `).join('');
}

function handleBrandFilter(checkbox) {
  if (checkbox.checked) {
    activeFilters.brands.push(checkbox.value);
  } else {
    activeFilters.brands = activeFilters.brands.filter(b => b !== checkbox.value);
  }
  applyFilters();
}

function handlePriceFilter() {
  const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice').value) || 2000000;
  activeFilters.priceRange = [minPrice, maxPrice];
  applyFilters();
}

function handleRatingFilter(rating) {
  activeFilters.rating = rating;
  // Update UI
  document.querySelectorAll('.rating-filter').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.rating) === rating);
  });
  applyFilters();
}

function handleStockFilter(checkbox) {
  activeFilters.inStock = checkbox.checked;
  applyFilters();
}

function applyFilters() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('cat');
  const brandName = urlParams.get('brand');
  
  let filtered = [...products];
  
  // Category filter
  if (categoryId) {
    filtered = filtered.filter(p => p.category == categoryId);
  } else if (brandName) {
    filtered = filtered.filter(p => p.brand === brandName);
  }
  
  // Brand filter
  if (activeFilters.brands.length > 0) {
    filtered = filtered.filter(p => activeFilters.brands.includes(p.brand));
  }
  
  // Price filter
  filtered = filtered.filter(p => 
    p.discountedPrice >= activeFilters.priceRange[0] && 
    p.discountedPrice <= activeFilters.priceRange[1]
  );
  
  // Rating filter
  if (activeFilters.rating > 0) {
    filtered = filtered.filter(p => p.rating >= activeFilters.rating);
  }
  
  filteredProducts = filtered;
  renderProducts();
  updateResultCount();
}

function handleSort(value) {
  currentSort = value;
  
  switch(value) {
    case 'popular':
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'cheapest':
      filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case 'expensive':
      filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
  }
  
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  
  if (filteredProducts.length === 0) {
    container.innerHTML = '<div class="no-results">محصولی یافت نشد</div>';
    return;
  }
  
  container.innerHTML = filteredProducts.map(product => renderProductCard(product)).join('');
}

function renderProductCard(product) {
  const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
  const isPremium = product.price > 1000000;
  
  return `
    <div class="product-card" onclick="goToProduct(${product.id})">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-badge">${discount}٪ تخفیف</div>
      ${isPremium ? '<div class="premium-badge">⭐ پریمیوم</div>' : ''}
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
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">افزودن به سبد</button>
      </div>
    </div>
  `;
}

function updateResultCount() {
  const count = document.getElementById('resultCount');
  if (count) {
    count.textContent = `${filteredProducts.length} محصول`;
  }
}

function initializeFilters() {
  // Mobile filter toggle
  const filterToggle = document.getElementById('filterToggle');
  const filterSidebar = document.getElementById('filterSidebar');
  const filterClose = document.getElementById('filterClose');
  
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      filterSidebar.classList.add('active');
    });
  }
  
  if (filterClose) {
    filterClose.addEventListener('click', () => {
      filterSidebar.classList.remove('active');
    });
  }
}

function toggleMobileFilters() {
  const sidebar = document.getElementById('filterSidebar');
  sidebar.classList.toggle('active');
}

function clearFilters() {
  activeFilters = {
    brands: [],
    priceRange: [0, 2000000],
    rating: 0,
    inStock: false
  };
  
  // Reset UI
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.querySelectorAll('.rating-filter').forEach(el => el.classList.remove('active'));
  
  applyFilters();
}