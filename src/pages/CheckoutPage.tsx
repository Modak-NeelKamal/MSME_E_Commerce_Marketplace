import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, AlertCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [paymentStep, setPaymentStep] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep(true);
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
      clearCart();
    }, 1500);
  };

  if (paymentSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <p className="text-gray-600 mb-8">
              Order number: <span className="font-semibold">ORD-{Math.floor(Math.random() * 10000000)}</span>
            </p>
            <Link
              to="/"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-gray-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={paymentStep ? "/checkout" : "/"} 
            onClick={(e) => {
              if (paymentStep) {
                e.preventDefault();
                setPaymentStep(false);
              }
            }}
            className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ChevronLeft size={16} />
        <span>{paymentStep ? "Back to Checkout" : "Continue Shopping"}</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Cart Items & Address Form */}
        <div className="lg:w-8/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                {paymentStep ? "Review Order" : "Your Cart"}
              </h2>
            </div>
            <div className="p-6">
              {/* Cart Items */}
              {!paymentStep && (
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row py-4 first:pt-0 last:pb-0">
                      <div className="sm:w-20 h-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <div className="sm:ml-4 sm:flex-1 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-800">
                              {item.name}
                            </h3>
                            {item.customization && (
                              <p className="mt-1 text-sm text-gray-500">
                                Customization: {item.customization}
                              </p>
                            )}
                            <p className="mt-1 text-sm text-gray-500">
                              Qty: {item.quantity || 1}
                            </p>
                          </div>
                          <p className="text-base font-medium text-gray-800">
                            ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                          </p>
                        </div>
                        <div className="mt-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Review Order Summary (only in payment step) */}
              {paymentStep && (
                <div className="space-y-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{subtotal.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Shipping</p>
                    <p>₹{shipping.toLocaleString()}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                    <p>Total</p>
                    <p>₹{total.toLocaleString()}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
                    <p className="text-gray-700 mb-1">{formData.name}</p>
                    <p className="text-gray-700 mb-1">{formData.address}</p>
                    <p className="text-gray-700 mb-1">
                      {formData.city}, {formData.state} - {formData.pincode}
                    </p>
                    <p className="text-gray-700 mb-1">Phone: {formData.phone}</p>
                    <p className="text-gray-700">Email: {formData.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Address Form */}
          {!paymentStep ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Shipping Information</h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmitAddress}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        required
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Payment Method</h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmitPayment}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="text-blue-600 mr-2" size={20} />
                      <span className="font-medium">Pay with ICICI Bank</span>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-md mb-6 flex items-start">
                      <AlertCircle size={18} className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-600">
                        This is a mock payment gateway for demonstration purposes.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            required
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                          />
                        </div>
                        <div>
                          <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cardCvv"
                            name="cardCvv"
                            required
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3 border"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Pay Now ₹{total.toLocaleString()}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-4/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>₹{subtotal.toLocaleString()}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Shipping</p>
                  <p>₹{shipping.toLocaleString()}</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <p>Total</p>
                  <p>₹{total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;