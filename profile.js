// Profile Page JavaScript
let activeTab = 'orders';

document.addEventListener('DOMContentLoaded', () => {
  initializeProfile();
  updateCartBadge();
});

function initializeProfile() {
  showTab('orders');
}

function showTab(tabName) {
  activeTab = tabName;
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `${tabName}Tab`);
  });
  
  // Render content based on tab
  switch(tabName) {
    case 'orders':
      renderOrders();
      break;
    case 'addresses':
      renderAddresses();
      break;
    case 'wishlist':
      renderProfileWishlist();
      break;
    case 'settings':
      renderSettings();
      break;
  }
}

function renderOrders() {
  const container = document.getElementById('ordersContent');
  
  // Mock orders data
  const mockOrders = [
    {
      id: '1001',
      date: '۱۴۰۳/۰۸/۱۰',
      status: 'تحویل داده شده',
      items: 3,
      total: 1250000
    },
    {
      id: '1002',
      date: '۱۴۰۳/۰۸/۰۵',
      status: 'در حال ارسال',
      items: 1,
      total: 450000
    },
    {
      id: '1003',
      date: '۱۴۰۳/۰۷/۲۸',
      status: 'تحویل داده شده',
      items: 2,
      total: 890000
    }
  ];
  
  if (mockOrders.length === 0) {
    container.innerHTML = '<div class="empty-state">سفارشی ثبت نشده است</div>';
    return;
  }
  
  container.innerHTML = mockOrders.map(order => `
    <div class="order-card">
      <div class="order-header">
        <div>
          <div class="order-id">سفارش #${order.id}</div>
          <div class="order-date">${order.date}</div>
        </div>
        <div class="order-status status-${order.status === 'تحویل داده شده' ? 'delivered' : 'shipping'}">
          ${order.status}
        </div>
      </div>
      <div class="order-body">
        <div class="order-info">
          <span>تعداد محصولات: ${order.items}</span>
          <span>مبلغ: ${formatPrice(order.total)}</span>
        </div>
        <button class="btn-view-order" onclick="showNotification('جزئیات سفارش در نسخه نمایشی')">
          مشاهده جزئیات
        </button>
      </div>
    </div>
  `).join('');
}

function renderAddresses() {
  const container = document.getElementById('addressesContent');
  
  // Mock addresses data
  const mockAddresses = [
    {
      id: 1,
      title: 'خانه',
      address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
      phone: '۰۹۱۲۳۴۵۶۷۸',
      isDefault: true
    },
    {
      id: 2,
      title: 'محل کار',
      address: 'تهران، خیابان آزادی، طبقه ۳',
      phone: '۰۲۱۸۸۷۷۶۶۵۵',
      isDefault: false
    }
  ];
  
  container.innerHTML = `
    <div class="addresses-list">
      ${mockAddresses.map(addr => `
        <div class="address-card ${addr.isDefault ? 'default' : ''}">
          <div class="address-header">
            <h4>${addr.title}</h4>
            ${addr.isDefault ? '<span class="default-badge">پیش‌فرض</span>' : ''}
          </div>
          <div class="address-body">
            <p>${addr.address}</p>
            <p>تلفن: ${addr.phone}</p>
          </div>
          <div class="address-actions">
            <button onclick="showNotification('ویرایش آدرس')">ویرایش</button>
            <button onclick="showNotification('حذف آدرس')">حذف</button>
          </div>
        </div>
      `).join('')}
      <button class="btn-add-address" onclick="showNotification('افزودن آدرس جدید')">
        + افزودن آدرس جدید
      </button>
    </div>
  `;
}

function renderProfileWishlist() {
  const container = document.getElementById('wishlistContent');
  
  if (wishlist.length === 0) {
    container.innerHTML = '<div class="empty-state">علاقه‌مندی‌ای ذخیره نشده است</div>';
    return;
  }
  
  container.innerHTML = `
    <div class="products-grid">
      ${wishlist.map(item => renderWishlistProductCard(item)).join('')}
    </div>
  `;
}

function renderWishlistProductCard(product) {
  const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
  
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" onclick="goToProduct(${product.id})">
      <div class="product-badge">${discount}٪ تخفیف</div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name" onclick="goToProduct(${product.id})">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="original-price">${formatPrice(product.price)}</span>
          <span class="current-price">${formatPrice(product.discountedPrice)}</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">افزودن به سبد</button>
      </div>
    </div>
  `;
}

function renderSettings() {
  const container = document.getElementById('settingsContent');
  
  container.innerHTML = `
    <div class="settings-form">
      <div class="form-group">
        <label>نام</label>
        <input type="text" class="form-control" value="علی رضایی">
      </div>
      <div class="form-group">
        <label>ایمیل</label>
        <input type="email" class="form-control" value="ali@example.com">
      </div>
      <div class="form-group">
        <label>تلفن</label>
        <input type="tel" class="form-control" value="۰۹۱۲۳۴۵۶۷۸">
      </div>
      <div class="form-group">
        <label>رمز عبور جدید</label>
        <input type="password" class="form-control" placeholder="برای تغییر وارد کنید">
      </div>
      <div class="form-group">
        <label>تکرار رمز عبور</label>
        <input type="password" class="form-control" placeholder="تکرار رمز عبور">
      </div>
      <button class="btn-save-settings" onclick="showNotification('تغییرات ذخیره شد')">
        ذخیره تغییرات
      </button>
    </div>
  `;
}