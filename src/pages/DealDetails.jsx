import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { 
  MapPin, Clock, TrendingDown, Eye, Flame, Lock, Unlock, 
  Phone, Mail, CheckCircle, ArrowLeft, AlertCircle 
} from 'lucide-react'

const DealDetails = () => {
  const { id } = useParams()
  const { getListingById, getDealerById, unlockListing, isListingUnlocked } = useApp()
  const [showUnlockModal, setShowUnlockModal] = useState(false)
  
  const listing = getListingById(id)

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Deal Not Found</h2>
          <p className="text-gray-600 mb-4">This listing may have been removed or is no longer available.</p>
          <Link to="/browse" className="btn-primary">
            Browse Other Deals
          </Link>
        </div>
      </div>
    )
  }

  const { vehicle, pricing, inventory, dealerLocation, dealHeatScore, views, features, dealerId } = listing
  const isUnlocked = isListingUnlocked(id)
  const dealer = getDealerById(dealerId)

  const handleUnlock = () => {
    // In production, this would process payment via Stripe
    unlockListing(id)
    setShowUnlockModal(false)
  }

  const getDealHeatColor = (score) => {
    if (score >= 90) return 'text-red-600'
    if (score >= 80) return 'text-orange-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-blue-600'
  }

  const getDealHeatBg = (score) => {
    if (score >= 90) return 'bg-red-100'
    if (score >= 80) return 'bg-orange-100'
    if (score >= 70) return 'bg-yellow-100'
    return 'bg-blue-100'
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="card">
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-400">{vehicle.make}</div>
                  <div className="text-3xl text-gray-500">{vehicle.model}</div>
                </div>
                
                {/* Deal Heat Badge */}
                <div className={`absolute top-4 right-4 ${getDealHeatBg(dealHeatScore)} px-4 py-2 rounded-full flex items-center space-x-2`}>
                  <Flame className={`h-5 w-5 ${getDealHeatColor(dealHeatScore)}`} />
                  <span className={`text-lg font-bold ${getDealHeatColor(dealHeatScore)}`}>
                    {dealHeatScore}
                  </span>
                </div>

                {/* Condition Badge */}
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-700 uppercase">
                    {vehicle.condition}
                  </span>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="card p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{vehicle.trim}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Exterior</p>
                  <p className="font-semibold text-gray-900">{vehicle.exteriorColor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Interior</p>
                  <p className="font-semibold text-gray-900">{vehicle.interiorColor}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mileage</p>
                  <p className="font-semibold text-gray-900">{vehicle.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Body Style</p>
                  <p className="font-semibold text-gray-900">{vehicle.bodyStyle}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VIN Info */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Identification</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Stock Number</p>
                  <p className="font-semibold text-gray-900">{inventory.stockNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">VIN</p>
                  <p className="font-mono text-gray-900">
                    {isUnlocked ? listing.vehicle.vin : `${vehicle.vin.substring(0, 10)}...${vehicle.vinLast4}`}
                    {!isUnlocked && <span className="text-xs text-gray-500 ml-2">(Unlock to reveal full VIN)</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="card p-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 line-through">${pricing.msrp.toLocaleString()}</p>
                <p className="text-4xl font-bold text-gray-900 my-2">${pricing.sellingPrice.toLocaleString()}</p>
                <div className="flex items-center justify-center text-accent-600 font-semibold text-xl">
                  <TrendingDown className="h-6 w-6 mr-1" />
                  <span>Save ${pricing.discount.toLocaleString()} ({pricing.discountPercent.toFixed(1)}%)</span>
                </div>
              </div>

              {/* Dealer Contact */}
              {isUnlocked && dealer ? (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex items-center text-accent-600 mb-4">
                    <Unlock className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Dealer Contact Unlocked</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Dealership</p>
                      <p className="font-semibold text-gray-900">{dealer.businessName}</p>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <a href={`tel:${dealer.phone}`} className="hover:text-primary-600">
                        {dealer.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <a href={`mailto:${dealer.email}`} className="hover:text-primary-600 break-all">
                        {dealer.email}
                      </a>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn-primary">
                    Contact Dealer
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowUnlockModal(true)}
                  className="w-full mt-4 btn-accent flex items-center justify-center"
                >
                  <Lock className="h-5 w-5 mr-2" />
                  Unlock This Deal
                </button>
              )}
            </div>

            {/* Stats Card */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Deal Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{dealerLocation}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Days in Stock</p>
                    <p className="font-semibold">{inventory.daysInStock} days</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Eye className="h-5 w-5 mr-3 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Views</p>
                    <p className="font-semibold">{views} times</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold mb-1">Hot Deal Alert!</p>
                  <p>This vehicle has been in inventory for {inventory.daysInStock} days. The dealer is highly motivated to move it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Access Pass</h3>
            <p className="text-gray-600 mb-6">
              Get time-based access to unlock any deal on the marketplace
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* 3-Day Pass */}
              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-600 transition-colors">
                <h4 className="font-bold text-gray-900 mb-1">3-Day Access</h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">$49.99</div>
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  <li>✓ Unlock any deal</li>
                  <li>✓ Full contact info</li>
                  <li>✓ Complete VIN</li>
                </ul>
                <button 
                  onClick={handleUnlock}
                  className="w-full btn-primary text-sm"
                >
                  Get 3-Day Pass
                </button>
              </div>

              {/* 7-Day Pass - Popular */}
              <div className="border-2 border-primary-600 rounded-lg p-4 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                    Popular
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">7-Day Access</h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">$79.99</div>
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  <li>✓ Unlock any deal</li>
                  <li>✓ Full contact info</li>
                  <li>✓ Complete VIN</li>
                  <li>✓ Best value</li>
                </ul>
                <button 
                  onClick={handleUnlock}
                  className="w-full btn-primary text-sm"
                >
                  Get 7-Day Pass
                </button>
              </div>

              {/* 14-Day Pass */}
              <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-600 transition-colors">
                <h4 className="font-bold text-gray-900 mb-1">14-Day Access</h4>
                <div className="text-2xl font-bold text-gray-900 mb-2">$99.99</div>
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  <li>✓ Unlock any deal</li>
                  <li>✓ Full contact info</li>
                  <li>✓ Complete VIN</li>
                  <li>✓ Max flexibility</li>
                </ul>
                <button 
                  onClick={handleUnlock}
                  className="w-full btn-primary text-sm"
                >
                  Get 14-Day Pass
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 text-center">
                <strong>How it works:</strong> Your pass unlocks all deals during your active window. 
                No subscriptions, no per-deal charges.
              </p>
            </div>

            <button 
              onClick={() => setShowUnlockModal(false)}
              className="w-full btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DealDetails
