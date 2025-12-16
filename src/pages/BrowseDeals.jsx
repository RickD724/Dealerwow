import React from 'react'
import { useApp } from '../context/AppContext'
import ListingCard from '../components/ListingCard'
import FilterBar from '../components/FilterBar'
import { Search } from 'lucide-react'

const BrowseDeals = () => {
  const { getFilteredListings } = useApp()
  const filteredListings = getFilteredListings()

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Browse Exclusive Deals
          </h1>
          <p className="text-lg text-gray-600">
            {filteredListings.length} {filteredListings.length === 1 ? 'vehicle' : 'vehicles'} available
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FilterBar />
        </div>

        {/* Results */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No deals found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseDeals
