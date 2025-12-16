import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { Plus, Eye, TrendingUp, DollarSign, Package } from 'lucide-react'

const DealerDashboard = () => {
  const { listings } = useApp()
  
  // Mock dealer data - in production this would be filtered by logged-in dealer
  const dealerListings = listings.filter(l => l.dealerId === 'D001')
  const totalViews = dealerListings.reduce((sum, l) => sum + l.views, 0)
  const totalUnlocks = dealerListings.reduce((sum, l) => sum + l.unlockCount, 0)

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dealer Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your inventory and track performance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Listings</p>
                <p className="text-3xl font-bold text-gray-900">{dealerListings.length}</p>
              </div>
              <Package className="h-10 w-10 text-primary-600" />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Views</p>
                <p className="text-3xl font-bold text-gray-900">{totalViews}</p>
              </div>
              <Eye className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Unlocked Deals</p>
                <p className="text-3xl font-bold text-gray-900">{totalUnlocks}</p>
              </div>
              <TrendingUp className="h-10 w-10 text-accent-600" />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-3xl font-bold text-gray-900">
                  {totalViews > 0 ? ((totalUnlocks / totalViews) * 100).toFixed(1) : 0}%
                </p>
              </div>
              <DollarSign className="h-10 w-10 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8 flex justify-between items-center">
          <Link to="/dealer/create-listing" className="btn-primary inline-flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Add New Listing
          </Link>
          
          {/* Subtle Cancel Membership */}
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to cancel your membership? You will lose access to all listings and features.')) {
                alert('Membership cancellation requested. In production, this would process the cancellation.');
              }
            }}
            className="text-sm text-gray-500 hover:text-red-600 underline"
          >
            Cancel Membership
          </button>
        </div>

        {/* Listings Table */}
        <div className="card overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Listings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vehicle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Days in Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unlocks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dealerListings.map(listing => (
                  <tr key={listing.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="font-medium text-gray-900">
                          {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                        </div>
                        <div className="text-sm text-gray-500">{listing.vehicle.trim}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-semibold">
                        ${listing.pricing.sellingPrice.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 line-through">
                        ${listing.pricing.msrp.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="badge badge-green">
                        {listing.pricing.discountPercent.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {listing.inventory.daysInStock} days
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {listing.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {listing.unlockCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link 
                        to={`/dealer/listing/${listing.id}`}
                        className="text-primary-600 hover:text-primary-900 mr-4"
                      >
                        Manage
                      </Link>
                      <Link 
                        to={`/dealer/edit-listing/${listing.id}`}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerDashboard
