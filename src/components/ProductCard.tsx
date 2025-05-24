import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <span className="text-sm font-medium text-green-700 mr-1">{product.rating}</span>
            <Star size={14} className="fill-current text-green-700" />
          </div>
          <span className="text-xs text-gray-500 ml-2">{product.reviewCount} reviews</span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <span className="text-lg font-semibold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)} 
            className="text-blue-600 hover:bg-blue-50 rounded-full p-2 transition-colors duration-300"
            aria-label="Add to cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
        
        <div className="mt-3">
          <Link 
            to={`/product/${product.id}`}
            className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;