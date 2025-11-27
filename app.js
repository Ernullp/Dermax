// Data
const products = [
  {
    id: 1,
    name: "کریم پودر Pro Finish",
    brand: "MAC",
    category: "face",
    price: 850000,
    discount_price: 595000,
    rating: 4.8,
    reviews: 234,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=MAC",
    description: "فاندیشن حرفه‌ای با پوشش کامل و ماندگاری بالا. مناسب برای انواع پوست. ضد آب و عرق."
  },
  {
    id: 2,
    name: "ریمل Volume Express",
    brand: "Maybelline",
    category: "eyes",
    price: 180000,
    discount_price: 126000,
    rating: 4.5,
    reviews: 512,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Maybelline",
    description: "ریمل حجم‌دهنده با فرمول ویژه برای مژه‌های بلند و پرپشت. بدون پخش شدن و ریزش."
  },
  {
    id: 3,
    name: "کرم مرطوب‌کننده Ultimate",
    brand: "Olay",
    category: "skincare",
    price: 420000,
    discount_price: 336000,
    rating: 4.7,
    reviews: 890,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=Olay",
    description: "کرم مرطوب‌کننده قوی با ویتامین B3 و هیالورونیک اسید. مناسب انواع پوست، رفع خشکی پوست."
  },
  {
    id: 4,
    name: "شامپو Silky",
    brand: "Pantene",
    category: "hair",
    price: 95000,
    discount_price: 71000,
    rating: 4.6,
    reviews: 1200,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=Pantene",
    description: "شامپو تقویت‌کننده و نرم‌کننده مو با پرو ویتامین B5. برای موهای آسیب‌دیده."
  },
  {
    id: 5,
    name: "عطر Midnight Rose",
    brand: "Chanel",
    category: "fragrance",
    price: 1200000,
    discount_price: 960000,
    rating: 4.9,
    reviews: 456,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Chanel",
    description: "عطر لوکس و خاص با رایحه گل رز و وانیل. مناسب شب‌ها و مجالس خاص. ماندگاری بالا."
  },
  {
    id: 6,
    name: "صابون بدن Luxe",
    brand: "Dove",
    category: "personal",
    price: 65000,
    discount_price: 48000,
    rating: 4.4,
    reviews: 678,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=Dove",
    description: "صابون مرطوب‌کننده و نرم‌کننده بدن با کرم شیر. مناسب پوست‌های حساس و خشک."
  },
  {
    id: 7,
    name: "ست بهداشتی Beauty Box",
    brand: "DermaRokh",
    category: "gifts",
    price: 890000,
    discount_price: 623000,
    rating: 4.5,
    reviews: 234,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=DermaRokh",
    description: "پکیج کامل محصولات بهداشتی و آرایشی شامل کرم، شامپو، رژ لب و ماسک صورت."
  },
  {
    id: 8,
    name: "افترشیو Smooth",
    brand: "Gillette",
    category: "mens",
    price: 125000,
    discount_price: 93000,
    rating: 4.3,
    reviews: 345,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Gillette",
    description: "افترشیو آرامش‌بخش و نرم‌کننده پوست پس از اصلاح. ضد التهاب و مرطوب‌کننده."
  },
  {
    id: 9,
    name: "رژ لب Matte Luxe",
    brand: "MAC",
    category: "face",
    price: 320000,
    discount_price: 256000,
    rating: 4.7,
    reviews: 890,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=MAC",
    description: "رژ لب مات با پوشش کامل و ماندگاری طولانی. دارای رنگ‌های متنوع و جذاب."
  },
  {
    id: 10,
    name: "سایه چشم Palette Pro",
    brand: "Maybelline",
    category: "eyes",
    price: 280000,
    discount_price: 196000,
    rating: 4.6,
    reviews: 567,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=Maybelline",
    description: "پالت ۱۲ رنگ سایه چشم با کیفیت حرفه‌ای. رنگ‌های مات و شاین برای هر مناسبت."
  },
  {
    id: 11,
    name: "ماسک صورت Hydrating",
    brand: "Olay",
    category: "skincare",
    price: 155000,
    discount_price: 124000,
    rating: 4.5,
    reviews: 423,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Olay",
    description: "ماسک ورقه‌ای آبرسان و روشن‌کننده پوست صورت. حاوی سرم ویتامین C."
  },
  {
    id: 12,
    name: "نرم‌کننده مو Keratin",
    brand: "Pantene",
    category: "hair",
    price: 98000,
    discount_price: 73500,
    rating: 4.4,
    reviews: 789,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=Pantene",
    description: "نرم‌کننده غنی شده با کراتین برای موهای صاف و براق. بدون سولفات."
  },
  {
    id: 13,
    name: "عطر Light Blue",
    brand: "Chanel",
    category: "fragrance",
    price: 950000,
    discount_price: 760000,
    rating: 4.8,
    reviews: 312,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=Chanel",
    description: "عطر تابستانی و ملایم با رایحه مرکبات و گل‌های بهاری. مناسب روز."
  },
  {
    id: 14,
    name: "لوسیون بدن Soft Touch",
    brand: "Dove",
    category: "personal",
    price: 89000,
    discount_price: 66750,
    rating: 4.3,
    reviews: 956,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Dove",
    description: "لوسیون مرطوب‌کننده سریع‌الجذب برای پوست نرم و لطیف. حاوی روغن آرگان."
  },
  {
    id: 15,
    name: "ست هدیه عروس",
    brand: "DermaRokh",
    category: "gifts",
    price: 1200000,
    discount_price: 960000,
    rating: 4.9,
    reviews: 145,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=DermaRokh",
    description: "پکیج ویژه عروس شامل آرایش کامل صورت، عطر، و محصولات مراقبت پوست."
  },
  {
    id: 16,
    name: "ژل اصلاح Cool",
    brand: "Gillette",
    category: "mens",
    price: 75000,
    discount_price: 56250,
    rating: 4.2,
    reviews: 567,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=Gillette",
    description: "ژل اصلاح خنک‌کننده با رایحه منتول. برای اصلاح نرم و بدون سوزش."
  },
  {
    id: 17,
    name: "کانسیلر Cover Perfect",
    brand: "MAC",
    category: "face",
    price: 385000,
    discount_price: 269500,
    rating: 4.6,
    reviews: 678,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=MAC",
    description: "کانسیلر با پوشش بالا برای پنهان‌سازی عیوب و لکه‌های پوستی."
  },
  {
    id: 18,
    name: "مداد ابرو Brow Define",
    brand: "Maybelline",
    category: "eyes",
    price: 95000,
    discount_price: 71250,
    rating: 4.4,
    reviews: 890,
    image: "https://via.placeholder.com/300x300/d4af37/ffffff?text=Maybelline",
    description: "مداد ابرو ضدآب با براش داخلی برای ابروهای طبیعی و منظم."
  },
  {
    id: 19,
    name: "سرم ویتامین C",
    brand: "Olay",
    category: "skincare",
    price: 560000,
    discount_price: 448000,
    rating: 4.8,
    reviews: 523,
    image: "https://via.placeholder.com/300x300/e6007e/ffffff?text=Olay",
    description: "سرم قوی ویتامین C برای روشن‌سازی و رفع لک‌های پوستی. ضد پیری."
  },
  {
    id: 20,
    name: "ماسک مو Repair",
    brand: "Pantene",
    category: "hair",
    price: 135000,
    discount_price: 101250,
    rating: 4.5,
    reviews: 712,
    image: "https://via.placeholder.com/300x300/93c83e/ffffff?text=Pantene",
    description: "ماسک ترمیم‌کننده عمیق برای موهای خشک و آسیب‌دیده. حاوی روغن آرگان."
  }
];

const categories = [
  { id: "face", name: "آرایش صورت", icon: "💄" },
  { id: "eyes", name: "چشم و ابرو", icon: "👁️" },
  { id: "skincare", name: "مراقبت از پوست", icon: "🧴" },
  { id: "hair", name: "مراقبت از مو", icon: "💇" },
  { id: "fragrance", name: "عطر و ادکلن", icon: "✨" },
  { id: "personal", name: "محصولات بهداشتی", icon: "🧼" },
  { id: "gifts", name: "پکیج هدیه", icon: "🎁" },
  { id: "mens", name: "محصولات آقایان", icon: "👨" }
];

// State Management with JavaScript variables (no localStorage)
let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let currentCategory = "all";
let currentSlide = 0;
let slideInterval = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  renderCategories();
  renderCarousels();
  setupEventListeners();
  startHeroSlider();
  updateCartBadge();
}

function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
  
  // Filter changes
  document.getElementById('minPrice')?.addEventListener('input', applyFilters);
  document.getElementById('maxPrice')?.addEventListener('input', applyFilters);
  document.getElementById('sortSelect')?.addEventListener('change', applySorting);
  
  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-bar')) {
      document.getElementById('searchResults').classList.remove('active');
    }
  });
}

// Hero Slider
function startHeroSlider() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    updateHeroSlides();
  }, 5000);
}

function goToSlide(index) {
  currentSlide = index;
  updateHeroSlides();
  clearInterval(slideInterval);
  startHeroSlider();
}

function updateHeroSlides() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Render Categories
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map(cat => `
    <div class="category-card" onclick="showCategory('${cat.id}')">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
    </div>
  `).join('');
}

// Render Product Carousels
function renderCarousels() {
  // Amazing Offers - Products with highest discounts
  const amazing = products.filter(p => p.discount_price).slice(0, 8);
  renderProductCarousel('amazingCarousel', amazing);
  
  // Best Sellers - Products with most reviews
  const bestsellers = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
  renderProductCarousel('bestsellersCarousel', bestsellers);
  
  // Brands - Show top brands
  const brands = [...new Set(products.map(p => p.brand))];
  const brandProducts = brands.map(brand => products.find(p => p.brand === brand));
  renderProductCarousel('brandsCarousel', brandProducts);
  
  // New Arrivals - Latest products
  const newProducts = products.slice(0, 8);
  renderProductCarousel('newCarousel', newProducts);
}

function renderProductCarousel(elementId, productList) {
  const carousel = document.getElementById(elementId);
  carousel.innerHTML = productList.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  const discount = product.discount_price 
    ? Math.round((1 - product.discount_price / product.price) * 100)
    : 0;
  
  return `
    <div class="product-card" onclick="showProductDetail(${product.id})">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        ${discount > 0 ? `<div class="discount-badge">${discount}٪ تخفیف</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
          <span>${product.rating}</span>
          <span style="color: #888;">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.discount_price || product.price)}</span>
          ${product.discount_price ? `<span class="original-price">${formatPrice(product.price)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          افزودن به سبد
        </button>
      </div>
    </div>
  `;
}

function formatPrice(price) {
  return price.toLocaleString('fa-IR') + ' تومان';
}

// Carousel Navigation
function scrollCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId + 'Carousel');
  const scrollAmount = 300;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Search Functionality
function handleSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  
  if (query.length < 2) {
    resultsContainer.classList.remove('active');
    return;
  }
  
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query)
  ).slice(0, 5);
  
  if (results.length > 0) {
    resultsContainer.innerHTML = results.map(p => `
      <div class="search-result-item" onclick="showProductDetail(${p.id})">
        <span>${p.name}</span>
        <span style="color: var(--accent-secondary); font-size: 12px;">${p.brand}</span>
      </div>
    `).join('');
    resultsContainer.classList.add('active');
  } else {
    resultsContainer.innerHTML = '<div class="search-result-item">محصولی یافت نشد</div>';
    resultsContainer.classList.add('active');
  }
}

// Category Page
function showCategory(categoryId) {
  currentCategory = categoryId;
  showPage('category');
  
  const category = categories.find(c => c.id === categoryId);
  const title = categoryId === 'all' ? 'همه محصولات' : category?.name || 'محصولات';
  
  document.getElementById('categoryPageTitle').textContent = title;
  document.getElementById('categoryBreadcrumb').textContent = title;
  
  // Render brand filters
  const brands = [...new Set(products.map(p => p.brand))];
  document.getElementById('brandFilters').innerHTML = brands.map(brand => `
    <div class="filter-option">
      <input type="checkbox" id="brand-${brand}" value="${brand}" onchange="applyFilters()">
      <label for="brand-${brand}">${brand}</label>
    </div>
  `).join('');
  
  applyFilters();
}

function applyFilters() {
  let filtered = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category === currentCategory);
  
  // Brand filter
  const selectedBrands = Array.from(document.querySelectorAll('#brandFilters input:checked'))
    .map(cb => cb.value);
  if (selectedBrands.length > 0) {
    filtered = filtered.filter(p => selectedBrands.includes(p.brand));
  }
  
  // Price filter
  const minPrice = parseInt(document.getElementById('minPrice')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice')?.value) || Infinity;
  filtered = filtered.filter(p => {
    const price = p.discount_price || p.price;
    return price >= minPrice && price <= maxPrice;
  });
  
  // Rating filter
  const rating5 = document.getElementById('rating5')?.checked;
  const rating4 = document.getElementById('rating4')?.checked;
  if (rating5) {
    filtered = filtered.filter(p => p.rating >= 4.8);
  } else if (rating4) {
    filtered = filtered.filter(p => p.rating >= 4.0);
  }
  
  // Stock filter
  const inStock = document.getElementById('inStock')?.checked;
  if (inStock) {
    // All products are in stock in this demo
    filtered = filtered;
  }
  
  // On sale filter
  const onSale = document.getElementById('onSale')?.checked;
  if (onSale) {
    filtered = filtered.filter(p => p.discount_price);
  }
  
  renderFilteredProducts(filtered);
}

function applySorting() {
  const sortValue = document.getElementById('sortSelect').value;
  applyFilters(); // Re-apply filters first
  
  const grid = document.getElementById('categoryProductsGrid');
  const productCards = Array.from(grid.children);
  
  // This is a simplified version - in real app, would sort the data array
  applyFilters();
}

function renderFilteredProducts(productList) {
  const grid = document.getElementById('categoryProductsGrid');
  const sortValue = document.getElementById('sortSelect')?.value || 'default';
  
  // Sort products
  let sorted = [...productList];
  switch(sortValue) {
    case 'popular':
      sorted.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'newest':
      sorted.sort((a, b) => b.id - a.id);
      break;
    case 'price-low':
      sorted.sort((a, b) => (a.discount_price || a.price) - (b.discount_price || b.price));
      break;
    case 'price-high':
      sorted.sort((a, b) => (b.discount_price || b.price) - (a.discount_price || a.price));
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  document.getElementById('productsCount').textContent = `${sorted.length} محصول`;
  grid.innerHTML = sorted.map(product => createProductCard(product)).join('');
}

// Product Detail Page
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  currentProduct = product;
  currentQuantity = 1;
  showPage('productDetail');
  
  // Set breadcrumb
  document.getElementById('productBreadcrumb').textContent = product.name;
  
  // Set main image
  document.getElementById('mainImage').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
  
  // Set thumbnails (using same image for demo)
  document.getElementById('thumbnailImages').innerHTML = `
    <div class="thumbnail active"><img src="${product.image}" alt="${product.name}"></div>
    <div class="thumbnail"><img src="${product.image}" alt="${product.name}"></div>
    <div class="thumbnail"><img src="${product.image}" alt="${product.name}"></div>
  `;
  
  // Set details
  document.getElementById('detailBrand').textContent = product.brand;
  document.getElementById('detailTitle').textContent = product.name;
  document.getElementById('detailStars').textContent = '⭐'.repeat(Math.floor(product.rating));
  document.getElementById('detailRating').textContent = product.rating;
  document.getElementById('detailReviews').textContent = product.reviews;
  document.getElementById('detailCurrentPrice').textContent = formatPrice(product.discount_price || product.price);
  
  if (product.discount_price) {
    document.getElementById('detailOriginalPrice').textContent = formatPrice(product.price);
    document.getElementById('detailOriginalPrice').style.display = 'inline';
    const savings = product.price - product.discount_price;
    document.getElementById('detailSavings').textContent = `شما ${formatPrice(savings)} صرفه‌جویی می‌کنید!`;
  } else {
    document.getElementById('detailOriginalPrice').style.display = 'none';
    document.getElementById('detailSavings').textContent = '';
  }
  
  document.getElementById('detailDescription').textContent = product.description;
  document.getElementById('quantityValue').textContent = currentQuantity;
  
  // Render related products
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);
  renderProductCarousel('relatedCarousel', related);
}

function changeQuantity(delta) {
  currentQuantity = Math.max(1, currentQuantity + delta);
  document.getElementById('quantityValue').textContent = currentQuantity;
}

function addToCartFromDetail() {
  if (!currentProduct) return;
  
  const existingItem = cart.find(item => item.id === currentProduct.id);
  if (existingItem) {
    existingItem.quantity += currentQuantity;
  } else {
    cart.push({
      ...currentProduct,
      quantity: currentQuantity
    });
  }
  
  updateCartBadge();
  showNotification('محصول به سبد خرید اضافه شد');
}

// Cart Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartBadge();
  showNotification('محصول به سبد خرید اضافه شد');
}

function updateCartQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;
  
  item.quantity = Math.max(1, item.quantity + delta);
  updateCartBadge();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartBadge').textContent = totalItems;
}

function renderCart() {
  const cartContent = document.getElementById('cartContent');
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <div class="empty-cart-text">سبد خرید شما خالی است</div>
        <button class="hero-btn" onclick="showPage('home')">بازگشت به فروشگاه</button>
      </div>
    `;
    return;
  }
  
  const subtotal = cart.reduce((sum, item) => sum + (item.discount_price || item.price) * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;
  
  cartContent.innerHTML = `
    <div class="cart-content">
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-brand">${item.brand}</div>
              <div class="cart-item-price">${formatPrice(item.discount_price || item.price)}</div>
              <div class="cart-item-actions">
                <div class="quantity-controls">
                  <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                  <span class="quantity-value">${item.quantity}</span>
                  <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">حذف</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="cart-summary">
        <h3 class="summary-title">خلاصه سبد خرید</h3>
        <div class="summary-row">
          <span>جمع کل محصولات:</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
          <span>هزینه ارسال:</span>
          <span>${shipping === 0 ? 'رایگان' : formatPrice(shipping)}</span>
        </div>
        <div class="summary-row total">
          <span>مجموع:</span>
          <span>${formatPrice(total)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">تکمیل خرید</button>
      </div>
    </div>
  `;
}

function checkout() {
  showNotification('در حال انتقال به صفحه پرداخت...');
  // In a real app, would redirect to checkout page
}

// Page Navigation
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page-content').forEach(page => {
    page.classList.remove('active');
    page.style.display = 'none';
  });
  
  // Update mobile nav
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Show selected page
  switch(pageName) {
    case 'home':
      document.getElementById('homepage').style.display = 'block';
      document.querySelector('.mobile-nav-item:nth-child(1)')?.classList.add('active');
      break;
    case 'category':
      document.getElementById('categoryPage').classList.add('active');
      document.getElementById('categoryPage').style.display = 'block';
      document.querySelector('.mobile-nav-item:nth-child(2)')?.classList.add('active');
      break;
    case 'productDetail':
      document.getElementById('productDetailPage').classList.add('active');
      document.getElementById('productDetailPage').style.display = 'block';
      break;
    case 'cart':
      document.getElementById('cartPage').classList.add('active');
      document.getElementById('cartPage').style.display = 'block';
      renderCart();
      document.querySelector('.mobile-nav-item:nth-child(3)')?.classList.add('active');
      break;
    case 'profile':
      document.getElementById('profilePage').classList.add('active');
      document.getElementById('profilePage').style.display = 'block';
      document.querySelector('.mobile-nav-item:nth-child(4)')?.classList.add('active');
      break;
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Profile Page
function showProfileSection(section) {
  // Hide all sections
  document.querySelectorAll('#profilePage .profile-main > div').forEach(div => {
    div.classList.add('hidden');
  });
  
  // Update menu
  document.querySelectorAll('.profile-menu li').forEach(li => {
    li.classList.remove('active');
  });
  
  // Show selected section
  switch(section) {
    case 'orders':
      document.getElementById('ordersSection').classList.remove('hidden');
      document.querySelector('.profile-menu li:nth-child(1)').classList.add('active');
      break;
    case 'info':
      document.getElementById('infoSection').classList.remove('hidden');
      document.querySelector('.profile-menu li:nth-child(2)').classList.add('active');
      break;
    case 'addresses':
      document.getElementById('addressesSection').classList.remove('hidden');
      document.querySelector('.profile-menu li:nth-child(3)').classList.add('active');
      break;
    case 'wishlist':
      document.getElementById('wishlistSection').classList.remove('hidden');
      document.querySelector('.profile-menu li:nth-child(4)').classList.add('active');
      break;
  }
}

// Notifications
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background-color: var(--accent-primary);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    font-family: 'Vazirmatn', sans-serif;
  `;
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);