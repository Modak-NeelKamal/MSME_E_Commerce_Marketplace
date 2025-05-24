import React, { useState } from 'react';
import { X } from 'lucide-react';
import { locations, categoryFilters, priceRanges } from '../data/filterData';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    categories: string[];
    priceRange: string;
    locations: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      categories: string[];
      priceRange: string;
      locations: string[];
    }>
  >;
  applyFilters: () => void;
  resetFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
  applyFilters,
  resetFilters,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleCategoryChange = (category: string) => {
    setLocalFilters((prev) => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        };
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category],
        };
      }
    });
  };

  const handlePriceRangeChange = (range: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      priceRange: range,
    }));
  };

  const handleLocationChange = (location: string) => {
    setLocalFilters((prev) => {
      if (prev.locations.includes(location)) {
        return {
          ...prev,
          locations: prev.locations.filter((l) => l !== location),
        };
      } else {
        return {
          ...prev,
          locations: [...prev.locations, location],
        };
      }
    });
  };

  const handleApply = () => {
    setFilters(localFilters);
    applyFilters();
    onClose();
  };

  const handleReset = () => {
    resetFilters();
    setLocalFilters({
      categories: [],
      priceRange: '',
      locations: [],
    });
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:shadow-none md:w-64`}
    >
      <div className="p-4 border-b md:hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="p-4 h-[calc(100%-60px)] overflow-y-auto">
        <div className="hidden md:block mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        {/* Categories Filter */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {categoryFilters.map((category) => (
              <div key={category.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category.value}`}
                  checked={localFilters.categories.includes(category.value)}
                  onChange={() => handleCategoryChange(category.value)}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`category-${category.value}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <div key={range.value} className="flex items-center">
                <input
                  type="radio"
                  id={`price-${range.value}`}
                  name="price-range"
                  checked={localFilters.priceRange === range.value}
                  onChange={() => handlePriceRangeChange(range.value)}
                  className="h-4 w-4 text-blue-600 rounded-full focus:ring-blue-500"
                />
                <label
                  htmlFor={`price-${range.value}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {range.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <h3 className="text-md font-medium mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={`location-${location.value}`}
                  checked={localFilters.locations.includes(location.value)}
                  onChange={() => handleLocationChange(location.value)}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`location-${location.value}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {location.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Actions */}
      <div className="p-4 border-t bg-gray-50 flex justify-between">
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          className="px-4 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;