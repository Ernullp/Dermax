// Categories Data
const categories = [
  { id: 1, name: 'آرایش صورت', englishName: 'Face Makeup', icon: '💄' },
  { id: 2, name: 'چشم و ابرو', englishName: 'Eye & Brow', icon: '👁️' },
  { id: 3, name: 'مراقبت از پوست', englishName: 'Skincare', icon: '🧴' },
  { id: 4, name: 'مراقبت از مو', englishName: 'Hair Care', icon: '💇' },
  { id: 5, name: 'عطر و ادکلن', englishName: 'Fragrances', icon: '✨' },
  { id: 6, name: 'محصولات بهداشتی', englishName: 'Personal Care', icon: '🧼' },
  { id: 7, name: 'پکیج هدیه', englishName: 'Gift Sets', icon: '🎁' },
  { id: 8, name: 'محصولات آقایان', englishName: "Men's Products", icon: '👨' }
];

// Products Data
const products = [
  {
    id: 1,
    name: 'کریم پودر Pro Finish',
    brand: 'MAC',
    category: 1,
    price: 850000,
    discountedPrice: 595000,
    rating: 4.8,
    reviews: 234,
    image: 'https://via.placeholder.com/300x300/e6007e/ffffff?text=MAC+Foundation',
    description: 'فاندیشن حرفه‌ای با پوشش طولانی‌مدت و تثبیت‌کننده قوی. این محصول با فرمول منحصر به فرد خود، پوششی یکنواخت و بدون نقص به پوست شما می‌دهد.',
    ingredients: 'Water, Cyclopentasiloxane, Talc, Titanium Dioxide, Glycerin',
    usage: 'با استفاده از اسفنج یا براش مخصوص، مقدار کمی از محصول را روی پوست تمیز و مرطوب شده خود بزنید.'
  },
  {
    id: 2,
    name: 'ریمل Volume Express',
    brand: 'Maybelline',
    category: 2,
    price: 180000,
    discountedPrice: 126000,
    rating: 4.5,
    reviews: 512,
    image: 'https://via.placeholder.com/300x300/93c83e/ffffff?text=Maybelline+Mascara',
    description: 'ریمل ضدآب با فرمولی حجم‌دهنده و نگه‌دارنده. مژه‌های شما را ضخیم‌تر و بلندتر نشان می‌دهد.',
    ingredients: 'Wax, Pigments, Water, Polymers',
    usage: 'با حرکات زیگزاگی برس را از ریشه تا نوک مژه‌ها بکشید.'
  },
  {
    id: 3,
    name: 'کرم مرطوب‌کننده Ultimate',
    brand: 'Olay',
    category: 3,
    price: 420000,
    discountedPrice: 336000,
    rating: 4.7,
    reviews: 890,
    image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Olay+Moisturizer',
    description: 'کرم ترمیم‌کننده عمیق برای پوست خشک. با ویتامین E و هیالورونیک اسید برای آبرسانی مداوم.',
    ingredients: 'Glycerin, Vitamin E, Hyaluronic Acid, Niacinamide',
    usage: 'صبح و شب روی پوست تمیز بمالید.'
  },
  {
    id: 4,
    name: 'شامپو Silky',
    brand: 'Pantene',
    category: 4,
    price: 95000,
    discountedPrice: 71000,
    rating: 4.6,
    reviews: 1200,
    image: 'https://via.placeholder.com/300x300/e6007e/ffffff?text=Pantene+Shampoo',
    description: 'شامپو تقویت‌کننده با پروتئین‌های طبیعی. موهای شما را نرم و درخشان می‌کند.',
    ingredients: 'Water, Sodium Lauryl Sulfate, Panthenol, Keratin',
    usage: 'روی موهای خیس بمالید و با آب ولرم بشویید.'
  },
  {
    id: 5,
    name: 'عطر Midnight Rose',
    brand: 'Chanel',
    category: 5,
    price: 1200000,
    discountedPrice: 960000,
    rating: 4.9,
    reviews: 456,
    image: 'https://via.placeholder.com/300x300/93c83e/ffffff?text=Chanel+Perfume',
    description: 'عطر زنانه با رایحه گل‌های تیره و مشک. ماندگاری بالا و رایحه‌ای جذاب و لوکس.',
    ingredients: 'Alcohol, Fragrance, Water, Essential Oils',
    usage: 'روی نقاط گرم بدن مانند مچ دست و گردن اسپری کنید.'
  },
  {
    id: 6,
    name: 'صابون بدن Luxe',
    brand: 'Dove',
    category: 6,
    price: 65000,
    discountedPrice: 48000,
    rating: 4.4,
    reviews: 678,
    image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Dove+Soap',
    description: 'صابون مرطوب‌کننده بدون رنگ و معطر اضافی. برای پوست‌های حساس مناسب است.',
    ingredients: 'Water, Sodium Tallowate, Coconut Oil, Glycerin',
    usage: 'در حمام روی بدن خیس بمالید و با آب بشویید.'
  },
  {
    id: 7,
    name: 'ست بهداشتی Beauty Box',
    brand: 'DermaRokh',
    category: 7,
    price: 890000,
    discountedPrice: 623000,
    rating: 4.5,
    reviews: 234,
    image: 'https://via.placeholder.com/300x300/e6007e/ffffff?text=Beauty+Set',
    description: 'مجموعه‌ای کامل برای بهداشت و زیبایی روزمره. شامل کرم، شامپو، صابون و لوسیون.',
    ingredients: 'Multiple products included',
    usage: 'هر محصول را طبق دستورالعمل روی بسته استفاده کنید.'
  },
  {
    id: 8,
    name: 'افترشیو Smooth',
    brand: 'Gillette',
    category: 8,
    price: 125000,
    discountedPrice: 93000,
    rating: 4.3,
    reviews: 345,
    image: 'https://via.placeholder.com/300x300/93c83e/ffffff?text=Gillette+Aftershave',
    description: 'افترشیو تسکین‌دهنده برای پوست حساس. سوختگی و قرمزی بعد از اصلاح را کاهش می‌دهد.',
    ingredients: 'Alcohol, Aloe Vera, Glycerin, Menthol',
    usage: 'بعد از اصلاح روی صورت بمالید.'
  },
  {
    id: 9,
    name: 'سایه چشم Shimmer Collection',
    brand: 'Urban Decay',
    category: 2,
    price: 320000,
    discountedPrice: 224000,
    rating: 4.7,
    reviews: 567,
    image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Urban+Decay+Eyeshadow',
    description: 'پالت سایه‌های براق و مات با رنگ‌های متنوع. رنگ‌دهی عالی و ماندگاری بالا.',
    ingredients: 'Talc, Mica, Iron Oxides, Titanium Dioxide',
    usage: 'با براش مخصوص روی پلک بمالید.'
  },
  {
    id: 10,
    name: 'رژگونه Pro Glow',
    brand: 'Charlotte Tilbury',
    category: 1,
    price: 350000,
    discountedPrice: 280000,
    rating: 4.8,
    reviews: 789,
    image: 'https://via.placeholder.com/300x300/e6007e/ffffff?text=Charlotte+Tilbury+Blush',
    description: 'رژگونه با تکسچر نرم و رنگ طبیعی. به صورت شما درخشش و طراوت می‌بخشد.',
    ingredients: 'Mica, Titanium Dioxide, Iron Oxides, Silica',
    usage: 'با براش روی گونه‌ها بمالید.'
  },
  {
    id: 11,
    name: 'کانسیلر HD Coverage',
    brand: 'MAC',
    category: 1,
    price: 480000,
    discountedPrice: 336000,
    rating: 4.6,
    reviews: 456,
    image: 'https://via.placeholder.com/300x300/93c83e/ffffff?text=MAC+Concealer',
    description: 'کانسیلر با پوشش بالا برای پنهان کردن لکه‌ها و هاله‌های تیره.',
    ingredients: 'Water, Dimethicone, Titanium Dioxide',
    usage: 'روی نواحی مورد نظر بزنید و با انگشت یا اسفنج بلند کنید.'
  },
  {
    id: 12,
    name: 'خط چشم Precision Liner',
    brand: 'Maybelline',
    category: 2,
    price: 145000,
    discountedPrice: 101500,
    rating: 4.4,
    reviews: 623,
    image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Maybelline+Eyeliner',
    description: 'خط چشم دقیق و بادوام. برای خطوط ظریف یا پهن مناسب است.',
    ingredients: 'Water, Acrylates Copolymer, Carbon Black',
    usage: 'از گوشه داخلی چشم به سمت بیرون بکشید.'
  },
  {
    id: 13,
    name: 'سرم ویتامین C',
    brand: 'Olay',
    category: 3,
    price: 550000,
    discountedPrice: 440000,
    rating: 4.9,
    reviews: 1123,
    image: 'https://via.placeholder.com/300x300/e6007e/ffffff?text=Olay+Vitamin+C',
    description: 'سرم روشن‌کننده و ضد پیری با ویتامین C خالص.',
    ingredients: 'Vitamin C, Hyaluronic Acid, Niacinamide',
    usage: 'صبح و شب روی پوست تمیز بمالید.'
  },
  {
    id: 14,
    name: 'ماسک مو Repair',
    brand: 'Pantene',
    category: 4,
    price: 175000,
    discountedPrice: 131250,
    rating: 4.5,
    reviews: 890,
    image: 'https://via.placeholder.com/300x300/93c83e/ffffff?text=Pantene+Hair+Mask',
    description: 'ماسک ترمیم‌کننده برای موهای آسیب‌دیده. با کراتین و روغن‌های طبیعی.',
    ingredients: 'Keratin, Argan Oil, Panthenol',
    usage: 'بعد از شستن مو، روی موهای مرطوب بمالید و ۵ دقیقه صبر کنید.'
  },
  {
    id: 15,
    name: 'عطر Gentleman',
    brand: 'Dior',
    category: 5,
    price: 1500000,
    discountedPrice: 1200000,
    rating: 4.8,
    reviews: 345,
    image: 'https://via.placeholder.com/300x300/d4af37/ffffff?text=Dior+Perfume',
    description: 'عطر مردانه با رایحه چوبی و ادویه‌ای. برای آقایان شیک‌پوش.',
    ingredients: 'Alcohol, Fragrance, Essential Oils',
    usage: 'روی نقاط گرم بدن اسپری کنید.'
  }
];

// Brands Data
const brands = [
  { name: 'MAC' },
  { name: 'Maybelline' },
  { name: 'Olay' },
  { name: 'Pantene' },
  { name: 'Chanel' },
  { name: 'Dove' },
  { name: 'Gillette' },
  { name: 'Urban Decay' },
  { name: 'Charlotte Tilbury' },
  { name: 'Dior' }
];

// Promotions Data
const promotions = [
  {
    id: 1,
    title: 'تخفیف ویژه بلک‌فرایدی تا ۶۰٪',
    discount: 60,
    image: 'https://via.placeholder.com/1200x400/e6007e/ffffff?text=Black+Friday+Special'
  },
  {
    id: 2,
    title: 'ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان',
    image: 'https://via.placeholder.com/1200x400/93c83e/ffffff?text=Free+Shipping+Promo'
  },
  {
    id: 3,
    title: 'محصولات جدید کالکشن تابستان',
    image: 'https://via.placeholder.com/1200x400/d4af37/ffffff?text=Summer+Collection'
  }
];