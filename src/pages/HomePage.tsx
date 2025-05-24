import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import FilterSidebar from '../components/FilterSidebar';
import { productData } from '../data/productData';
import { Product } from '../types';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: '',
    locations: [],
  });

  // Load products on component mount
  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  // Filter products based on current filters and search
  const applyFilters = () => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(
        (product) => product.price >= min && (max ? product.price <= max : true)
      );
    }

    // Filter by locations
    if (filters.locations.length > 0) {
      filtered = filtered.filter((product) =>
        filters.locations.includes(product.location)
      );
    }

    setFilteredProducts(filtered);
  };

  // Apply filters when filters or search change
  useEffect(() => {
    applyFilters();
  }, [searchQuery]);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: '',
      locations: [],
    });
    setSearchQuery('');
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 md:p-10 mb-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Quality Products from MSME Sellers
          </h1>
          <p className="text-lg mb-6">
            Support small businesses and find amazing products at great prices.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Filter className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Toggle Button (Mobile) */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm mb-4"
        >
          <SlidersHorizontal size={18} className="mr-2" />
          <span>Filters</span>
        </button>

        {/* Filter Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
            <div className="text-sm text-gray-600">
              {filteredProducts.length} products found
            </div>
          </div>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-lg text-gray-600">No products found matching your filters.</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;