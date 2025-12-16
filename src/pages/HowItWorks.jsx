import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Unlock, MessageCircle, CheckCircle, Shield, TrendingDown } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and effective. Connect with dealers in three easy steps.
          </p>
        </div>

        {/* For Buyers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              For Buyers
            </h2>
            <p className="text-gray-600">
              Find and secure luxury deals in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Browse Deals
              </h3>
              <p className="text-gray-600">
                Search our marketplace for aged luxury inventory at discounted prices. Filter by make, model, location, and discount level.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Unlock className="h-8 w-8 text-accent-600" />
              </div>
              <div className="text-4xl font-bold text-accent-600 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unlock Dealer Info
              </h3>
              <p className="text-gray-600">
                Found the perfect deal? Pay a small fee ($20 per unlock or subscribe monthly) to reveal the dealer's contact information.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect & Negotiate
              </h3>
              <p className="text-gray-600">
                Contact the dealer directly to finalize the deal. They're motivated to sell, and you have the leverage.
              </p>
            </div>
          </div>
        </div>

        {/* For Dealers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              For Dealers
            </h2>
            <p className="text-gray-600">
              Move aged inventory without compromising your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sign Up & Verify
              </h3>
              <p className="text-gray-600">
                Create your dealer account and get verified. We check your business credentials to maintain marketplace quality.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                List Your Inventory
              </h3>
              <p className="text-gray-600">
                Upload vehicles manually or via CSV. Stay anonymous until buyers unlock your contact info.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Connect With Buyers
              </h3>
              <p className="text-gray-600">
                Serious buyers unlock your contact info. You get quality leads ready to negotiate and close deals.
              </p>
            </div>
          </div>
        </div>

        {/* Why It Works */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why This Model Works
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Traditional dealer advertising exposes public discounts that can damage brand perception and trigger manufacturer conflicts. Our anonymous marketplace solves this by connecting motivated parties privately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/signup" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started as Buyer
            </Link>
            <Link to="/dealer/signup" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started as Dealer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
