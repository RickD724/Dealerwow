import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, TrendingDown, Eye, Flame } from 'lucide-react'

const ListingCard = ({ listing }) => {
  const { vehicle, pricing, inventory, dealerLocation, dealHeatScore, views } = listing

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
    <Link to={`/deal/${listing.id}`} className="card group">
      {/* Image Placeholder */}
      <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-400">
            {vehicle.make}
          </div>
          <div className="text-xl text-gray-500">
            {vehicle.model}
          </div>
        </div>
        
        {/* Deal Heat Badge */}
        <div className={`absolute top-3 right-3 ${getDealHeatBg(dealHeatScore)} px-3 py-1 rounded-full flex items-center space-x-1`}>
          <Flame className={`h-4 w-4 ${getDealHeatColor(dealHeatScore)}`} />
          <span className={`text-sm font-bold ${getDealHeatColor(dealHeatScore)}`}>
            {dealHeatScore}
          </span>
        </div>

        {/* Condition Badge */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-gray-700 uppercase">
            {vehicle.condition}
          </span>
        </div>
      </div>

      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{vehicle.trim}</p>

        {/* Details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{dealerLocation}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{inventory.daysInStock} days in stock</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Eye className="h-4 w-4 mr-2" />
            <span>{views} views</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-5 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 line-through">${pricing.msrp.toLocaleString()}</p>
              <p className="text-2xl font-bold text-gray-900">${pricing.sellingPrice.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-accent-600 font-semibold">
                <TrendingDown className="h-5 w-5 mr-1" />
                <span className="text-lg">{pricing.discountPercent.toFixed(1)}%</span>
              </div>
              <p className="text-xs text-gray-500">Save ${pricing.discount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-4 w-full btn-primary">
          View Details
        </button>
      </div>
    </Link>
  )
}

export default ListingCard
