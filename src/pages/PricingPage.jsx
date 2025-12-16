import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, X, Star, Zap, Building2 } from 'lucide-react'

const PricingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        {/* Buyer Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            For Buyers
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get time-based access to unlock any deal on the marketplace
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8">
            {/* 3-Day Access */}
            <div className="card p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                3-Day Access
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49.99</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for quick shopping
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlock any deal for 3 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full dealer contact info</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete VIN access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Save favorites</span>
                </li>
              </ul>
              <Link
                to="/buyer/signup"
                className="btn-primary w-full text-center"
              >
                Get Started
              </Link>
            </div>

            {/* 7-Day Access - Most Popular */}
            <div className="card p-8 border-2 border-primary-600 relative mt-8">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-2">
                7-Day Access
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$79.99</span>
              </div>
              <p className="text-gray-600 mb-6">
                Best value for serious buyers
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlock any deal for 7 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full dealer contact info</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete VIN access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Save favorites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compare multiple deals</span>
                </li>
              </ul>
              <Link
                to="/buyer/signup"
                className="btn-primary w-full text-center"
              >
                Get Started
              </Link>
            </div>

            {/* 14-Day Access */}
            {/* 14-Day Access */}
            <div className="card p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                14-Day Access
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99.99</span>
              </div>
              <p className="text-gray-600 mb-6">
                Maximum flexibility
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlock any deal for 14 days</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full dealer contact info</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete VIN access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Save favorites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Extended research time</span>
                </li>
              </ul>
              <Link
                to="/buyer/signup"
                className="btn-primary w-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Small Print */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-700">
                <strong>How it works:</strong> Your access pass unlocks all deals on the marketplace during your active window. 
                Click "Unlock" on any listing to reveal full details. When your access expires, deal details are masked again. 
                No subscriptions, no per-deal charges.
              </p>
            </div>
          </div>
        </div>

        {/* Dealer Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            For Dealers
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Get access to serious, paid buyers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8">
            {/* Free Tier */}
            <div className="card p-8 mt-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Free
              </h3>
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                Perfect for getting started
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 active listing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standard placement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic buyer exposure</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <X className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No analytics</span>
                </li>
              </ul>
              <Link
                to="/dealer/signup"
                className="btn-secondary w-full text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Tier - Recommended */}
            <div className="card p-8 border-2 border-primary-600 relative mt-8">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  Recommended
                </span>
              </div>
              <div className="flex items-center justify-center mb-4 mt-2">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Pro
              </h3>
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                For serious dealers
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Unlimited</strong> active listings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full dealer identity visible</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to paid buyers only</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pause/remove listings anytime</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Views & unlock tracking</span>
                </li>
              </ul>
              <Link
                to="/dealer/signup"
                className="btn-primary w-full text-center"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="card p-8 mt-8">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Enterprise
              </h3>
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold text-gray-900">$699</span>
                <span className="text-gray-600">+/month</span>
              </div>
              <p className="text-gray-600 mb-6 text-center">
                For dealer groups
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-rooftop support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Group-level analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority buyer access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk inventory tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              <Link
                to="/dealer/signup"
                className="btn-secondary w-full text-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens when my access pass expires?
              </h3>
              <p className="text-gray-600">
                Deal details are masked again. You'll need to purchase a new access pass to unlock deals. 
                Previously unlocked deals remain in your dashboard but contact info is hidden.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I unlock unlimited deals with one pass?
              </h3>
              <p className="text-gray-600">
                Yes! Your access pass lets you unlock any deal on the marketplace during your active window.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do dealers benefit from paid buyers?
              </h3>
              <p className="text-gray-600">
                Buyers who purchase access passes are serious about buying. They've invested money to access deals, 
                which means higher quality leads for dealers.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the Free dealer tier?
              </h3>
              <p className="text-gray-600">
                The Free tier is perfect for getting started. You can list 1 vehicle and get basic exposure to buyers. 
                Upgrade to Pro for unlimited listings and full analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
