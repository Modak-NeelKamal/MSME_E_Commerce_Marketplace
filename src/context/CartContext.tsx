import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface CartContextType {
  cartItems: (Product & { quantity?: number; customization?: string })[];
  addToCart: (product: Product & { quantity?: number; customization?: string }) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<(Product & { quantity?: number; customization?: string })[]>([]);

  const addToCart = (product: Product & { quantity?: number; customization?: string }) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && 
                  (item.customization === product.customization || 
                   (!item.customization && !product.customization))
      );

      if (existingItemIndex > -1) {
        // Update quantity if product exists
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        const newQuantity = (existingItem.quantity || 1) + (product.quantity || 1);
        
        updatedItems[existingItemIndex] = { 
          ...existingItem, 
          quantity: newQuantity 
        };
        
        return updatedItems;
      } else {
        // Add new product with specified quantity or default to 1
        return [...prevItems, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};