import { Product } from '../types';

export const productData: Product[] = [
  {
    id: 1,
    name: "Premium Bluetooth Headphones",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Immerse yourself in exceptional sound quality with these premium wireless headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and ultra-comfortable design for extended listening sessions.",
    category: "electronics",
    seller: "SoundMaster",
    location: "mumbai",
    rating: 4.5,
    reviewCount: 256,
    highlights: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge - 5 hours playback from 10 minutes charge",
      "High-resolution audio certified",
      "Bluetooth 5.2 connectivity"
    ]
  },
  {
    id: 2,
    name: "Organic Cotton T-shirt",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Eco-friendly and stylish organic cotton t-shirt made from 100% sustainably sourced materials. Breathable, comfortable and perfect for everyday wear with a modern fit and premium finish.",
    category: "fashion",
    seller: "EcoThreads",
    location: "bangalore",
    rating: 4.3,
    reviewCount: 189,
    highlights: [
      "100% organic cotton",
      "Sustainably manufactured",
      "Pre-shrunk fabric",
      "Available in multiple colors",
      "Machine washable"
    ]
  },
  {
    id: 3,
    name: "Smart Air Purifier",
    price: 14999,
    originalPrice: 19999,
    discount: 25,
    image: "https://images.pexels.com/photos/4108270/pexels-photo-4108270.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Advanced smart air purifier with HEPA filter, activated carbon filter, and ionizer. Removes 99.97% of airborne particles, allergens, and pollutants. Control via smartphone app with air quality monitoring.",
    category: "home-appliances",
    seller: "PureAir Solutions",
    location: "delhi",
    rating: 4.7,
    reviewCount: 312,
    highlights: [
      "True HEPA filtration",
      "Smart home integration",
      "Real-time air quality monitoring",
      "Quiet operation (25dB)",
      "Covers up to 800 sq ft"
    ]
  },
  {
    id: 4,
    name: "Natural Honey Gift Pack",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    image: "https://images.pexels.com/photos/9009866/pexels-photo-9009866.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Pure, unprocessed honey variety pack sourced directly from traditional beekeepers. Contains 3 distinct flavors: Wild Forest, Litchi Blossom, and Himalayan Multiflora. Perfect for gifting or personal indulgence.",
    category: "fmcg",
    seller: "Honey Harvest Co-op",
    location: "himachal",
    rating: 4.8,
    reviewCount: 175,
    highlights: [
      "100% pure and unprocessed",
      "No added sugars or preservatives",
      "Sourced directly from beekeepers",
      "Supports sustainable beekeeping",
      "Variety of flavors"
    ]
  },
  {
    id: 5,
    name: "Handcrafted Leather Wallet",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Expertly crafted genuine leather wallet with 8 card slots, 2 currency compartments, and RFID blocking technology. Each piece is uniquely made by skilled artisans using traditional techniques.",
    category: "fashion",
    seller: "Heritage Crafts",
    location: "rajasthan",
    rating: 4.6,
    reviewCount: 128,
    highlights: [
      "Genuine full-grain leather",
      "RFID blocking technology",
      "Handcrafted by artisans",
      "Multiple card slots",
      "1-year craftsmanship warranty"
    ]
  },
  {
    id: 6,
    name: "Smart LED TV - 43 inch",
    price: 28999,
    originalPrice: 35999,
    discount: 19,
    image: "https://images.pexels.com/photos/6782350/pexels-photo-6782350.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ultra HD Smart LED TV with voice control, multiple streaming app support, and crystal clear display. Experience immersive sound with built-in speakers and connect all your devices with multiple HDMI and USB ports.",
    category: "electronics",
    seller: "ViewTech",
    location: "delhi",
    rating: 4.4,
    reviewCount: 293,
    highlights: [
      "4K Ultra HD resolution",
      "Smart TV with built-in streaming apps",
      "Voice control",
      "3 HDMI & 2 USB ports",
      "Dolby Audio"
    ]
  },
  {
    id: 7,
    name: "Ayurvedic Skincare Gift Set",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Luxurious Ayurvedic skincare set featuring face wash, moisturizer, face mask, and serum. Made with natural ingredients following ancient Ayurvedic principles. Free from harmful chemicals and preservatives.",
    category: "fmcg",
    seller: "Ayush Herbals",
    location: "kerala",
    rating: 4.7,
    reviewCount: 156,
    highlights: [
      "100% natural ingredients",
      "Based on Ayurvedic formulations",
      "Cruelty-free and vegan",
      "No harmful chemicals",
      "Suitable for all skin types"
    ]
  },
  {
    id: 8,
    name: "Stainless Steel Pressure Cooker",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    image: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Heavy-duty stainless steel pressure cooker with 5L capacity. Features multiple safety mechanisms, ergonomic handles, and works on all cooktop types including induction. Perfect for Indian cooking.",
    category: "home-appliances",
    seller: "KitchenCraft",
    location: "mumbai",
    rating: 4.8,
    reviewCount: 427,
    highlights: [
      "Premium grade stainless steel",
      "5-liter capacity",
      "Multiple safety features",
      "Induction compatible",
      "5-year warranty"
    ]
  },
  {
    id: 9,
    name: "Handwoven Cotton Saree",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    image: "https://images.pexels.com/photos/13679986/pexels-photo-13679986.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Exquisite handwoven cotton saree with traditional motifs created by master weavers. Each piece is unique with intricate designs that showcase India's rich textile heritage. Comes with matching blouse piece.",
    category: "fashion",
    seller: "Weaver's Collection",
    location: "west-bengal",
    rating: 4.9,
    reviewCount: 86,
    highlights: [
      "100% handwoven cotton",
      "Crafted by master weavers",
      "Natural dyes",
      "Traditional designs",
      "Includes matching blouse piece"
    ]
  },
  {
    id: 10,
    name: "Wireless Gaming Mouse",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "High-performance wireless gaming mouse with customizable RGB lighting, adjustable DPI settings, and ergonomic design. Features 6 programmable buttons and ultra-long battery life for extended gaming sessions.",
    category: "electronics",
    seller: "GameGear Tech",
    location: "bangalore",
    rating: 4.5,
    reviewCount: 215,
    highlights: [
      "16,000 DPI optical sensor",
      "RGB customizable lighting",
      "70-hour battery life",
      "6 programmable buttons",
      "Ultra-fast response time (1ms)"
    ]
  },
  {
    id: 11,
    name: "Spice Gift Box Set",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium collection of authentic Indian spices in an elegant wooden gift box. Contains 10 essential spices including cardamom, turmeric, cumin, and saffron. Directly sourced from organic farms across India.",
    category: "fmcg",
    seller: "Spice Treasures",
    location: "kerala",
    rating: 4.7,
    reviewCount: 143,
    highlights: [
      "10 premium Indian spices",
      "Organically grown",
      "Elegant wooden gift box",
      "No preservatives or additives",
      "Recipe booklet included"
    ]
  },
  {
    id: 12,
    name: "Smart Automatic Mixer Grinder",
    price: 4499,
    originalPrice: 5999,
    discount: 25,
    image: "https://images.pexels.com/photos/4226892/pexels-photo-4226892.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Advanced 750W mixer grinder with smart auto-programs for different grinding tasks. Includes 4 jars for various functions and features overload protection, LED indicators and easy-grip handles.",
    category: "home-appliances",
    seller: "SmartHome Appliances",
    location: "chennai",
    rating: 4.3,
    reviewCount: 278,
    highlights: [
      "750W powerful motor",
      "4 specialized jars",
      "Smart auto-programs",
      "3-speed control with pulse function",
      "Overload protection"
    ]
  }
];