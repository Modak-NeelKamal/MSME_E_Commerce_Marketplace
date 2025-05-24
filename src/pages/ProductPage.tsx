import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  Repeat,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { productData } from '../data/productData';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isPodOpen, setIsPodOpen] = useState(false);
  const [customization, setCustomization] = useState('');
  
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate fetching product data
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Find product by id
        const foundProduct = productData.find(p => p.id === parseInt(id || '0'));
        
        if (foundProduct) {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // If there's customization, add it to the product
      const productToAdd = customization 
        ? { ...product, customization, quantity } 
        : { ...product, quantity };
      
      addToCart(productToAdd);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = '/checkout';
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            <div className="flex items-center">
              <ChevronLeft size={16} />
              <span>Back to products</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ChevronLeft size={16} />
        <span>Back to products</span>
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-1/2 p-6">
            <div className="mb-4 h-80 overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {/* This would normally show multiple product images */}
              <button 
                className={`border-2 rounded-md overflow-hidden h-16 w-16 flex-shrink-0 ${
                  selectedImage === 0 ? 'border-blue-600' : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(0)}
              >
                <img 
                  src={product.image} 
                  alt={`${product.name} - preview 1`} 
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                <span className="text-sm font-medium text-green-700 mr-1">{product.rating}</span>
                <Star size={14} className="fill-current text-green-700" />
              </div>
              <span className="text-sm text-gray-500 ml-2">{product.reviewCount} reviews</span>
              <span className="text-sm text-gray-500 ml-2">•</span>
              <span className="text-sm text-gray-500 ml-2">Sold by: {product.seller}</span>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-800">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-500 line-through ml-3">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="ml-3 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-green-600 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Product Customization Option */}
            <div className="mb-6">
              <button 
                onClick={() => setIsPodOpen(!isPodOpen)}
                className="text-blue-600 flex items-center text-sm font-medium hover:text-blue-800"
              >
                {isPodOpen ? 'Hide Customization Options' : 'Customize This Product'} 
              </button>
              
              {isPodOpen && (
                <div className="mt-3 p-4 border border-gray-200 rounded-md">
                  <h4 className="font-medium mb-2">Product Customization</h4>
                  <textarea
                    value={customization}
                    onChange={(e) => setCustomization(e.target.value)}
                    placeholder="Add special instructions or customization requirements..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-gray-700 mr-3">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 py-1 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border border-blue-600 text-blue-600 rounded-md py-3 flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-blue-600 text-white rounded-md py-3 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                Buy Now
              </button>
            </div>

            {/* Product Features */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-3">Highlights</h3>
              <ul className="space-y-2">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck size={18} className="text-gray-600 mr-2" />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield size={18} className="text-gray-600 mr-2" />
                <span className="text-sm">Warranty Available</span>
              </div>
              <div className="flex items-center">
                <Repeat size={18} className="text-gray-600 mr-2" />
                <span className="text-sm">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;