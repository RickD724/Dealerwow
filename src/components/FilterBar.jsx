import React from 'react'
import { Search, Filter, X } from 'lucide-react'
import { useApp } from '../context/AppContext'

const FilterBar = () => {
  const { filters, setFilters } = useApp()

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      minDiscount: 0,
      maxPrice: 300000,
      location: '',
      condition: 'all'
    })
  }

  const hasActiveFilters = 
    filters.make || 
    filters.model || 
    filters.minDiscount > 0 || 
    filters.maxPrice < 300000 || 
    filters.location || 
    filters.condition !== 'all'

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Make */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Make
          </label>
          <input
            type="text"
            value={filters.make}
            onChange={(e) => handleFilterChange('make', e.target.value)}
            placeholder="e.g., Porsche"
            className="input-field"
          />
        </div>

        {/* Model */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model
          </label>
          <input
            type="text"
            value={filters.model}
            onChange={(e) => handleFilterChange('model', e.target.value)}
            placeholder="e.g., 911"
            className="input-field"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            placeholder="e.g., California"
            className="input-field"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Condition
          </label>
          <select
            value={filters.condition}
            onChange={(e) => handleFilterChange('condition', e.target.value)}
            className="input-field"
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="demo">Demo</option>
          </select>
        </div>

        {/* Min Discount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Discount: {filters.minDiscount}%
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={filters.minDiscount}
            onChange={(e) => handleFilterChange('minDiscount', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Price: ${filters.maxPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min="50000"
            max="300000"
            step="10000"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default FilterBar
