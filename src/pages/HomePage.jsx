import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { TrendingDown, Shield, Zap, Users, ArrowRight, Flame } from 'lucide-react'
import ListingCard from '../components/ListingCard'

const HomePage = () => {
  const { listings } = useApp()

  // Get top 3 hot deals
  const hotDeals = [...listings]
    .sort((a, b) => b.dealHeatScore - a.dealHeatScore)
    .slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unlock Hidden Luxury Deals on Aged Inventory
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Connect directly with verified dealers offering exclusive discounts on premium vehicles that have been sitting too long.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/browse" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Browse Deals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/how-it-works" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Old Inventory Deals?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The smarter way to find luxury vehicles at below-market prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bigger Discounts
              </h3>
              <p className="text-gray-600">
                Access deals not advertised publicly, with discounts up to 15% off MSRP
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Dealers
              </h3>
              <p className="text-gray-600">
                Every dealer is verified and vetted for your peace of mind
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Direct Connection
              </h3>
              <p className="text-gray-600">
                No middlemen - connect directly with dealers ready to negotiate
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Anonymous Browsing
              </h3>
              <p className="text-gray-600">
                Browse freely, unlock only when you're serious about a deal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Flame className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Today's Hottest Deals
              </h2>
            </div>
            <Link to="/browse" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Deal?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of smart buyers who've saved on their dream vehicles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/signup" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Sign Up as Buyer
            </Link>
            <Link to="/dealer/signup" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Join as Dealer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
