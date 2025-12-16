import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, X } from 'lucide-react'

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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            For Buyers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pay Per Unlock */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pay Per Unlock
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$20</span>
                <span className="text-gray-600">/unlock</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for casual buyers exploring a few specific deals
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Browse all deals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">$20 per dealer unlock</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No expiration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No commitment</span>
                </li>
              </ul>
              <Link to="/buyer/signup" className="btn-secondary w-full text-center block">
                Get Started
              </Link>
            </div>

            {/* Monthly */}
            <div className="card p-8 relative border-2 border-primary-600">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BEST VALUE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Monthly
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                For active buyers comparing multiple deals
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Browse all deals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited unlocks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Early access to new deals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cancel anytime</span>
                </li>
              </ul>
              <Link to="/buyer/signup" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">
                For dealerships buying aged inventory from competitors
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Monthly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bulk unlocks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
              </ul>
              <Link to="/buyer/signup" className="btn-secondary w-full text-center block">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Dealer Pricing */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            For Dealers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Basic
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for smaller dealerships
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 5 active listings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Anonymous listings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">No featured listings</span>
                </li>
              </ul>
              <Link to="/dealer/signup" className="btn-secondary w-full text-center block">
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="card p-8 relative border-2 border-primary-600">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pro
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">
                For established dealerships with regular aged inventory
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited listings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">CSV bulk upload</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 featured listings/month</span>
                </li>
              </ul>
              <Link to="/dealer/signup" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">
                For dealer groups with multiple locations
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Multi-location support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">API access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">White-glove onboarding</span>
                </li>
              </ul>
              <Link to="/dealer/signup" className="btn-secondary w-full text-center block">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes! All subscriptions can be cancelled at any time with no penalties. You'll retain access until the end of your billing period.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 7-day free trial for both buyer monthly and dealer pro subscriptions.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, Amex, Discover) via Stripe. Dealer enterprise plans can be invoiced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
