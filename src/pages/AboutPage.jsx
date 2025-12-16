import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Users, TrendingUp, Shield } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Old Inventory Deals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how luxury vehicles change hands by creating a private marketplace for aged inventory.
          </p>
        </div>

        {/* Mission */}
        <div className="card p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To create a win-win marketplace where dealerships can move aged luxury inventory without damaging their brand, while buyers access exclusive deals not available through traditional channels. We believe transparency, privacy, and fair pricing can coexist.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            The Problem We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                For Dealers
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Public discounting damages brand perception and manufacturer relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Traditional advertising reaches tire-kickers, not serious buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Aged inventory ties up floor plan financing and lot space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Every day counts when carrying costs add up</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                For Buyers
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Best deals are never advertised publicly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Hard to know which dealers are truly motivated to sell</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Waste time reaching out to dealers without real discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>No transparency on how long vehicles have been sitting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust & Verification
              </h3>
              <p className="text-gray-600">
                Every dealer is verified. Every listing is real. We maintain the highest standards to protect all parties.
              </p>
            </div>

            <div className="card p-8 text-center">
              <TrendingUp className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Transparent fees. No hidden costs. We succeed when both dealers and buyers get great deals.
              </p>
            </div>

            <div className="card p-8 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Privacy First
              </h3>
              <p className="text-gray-600">
                Dealers stay anonymous until buyers are serious. Buyers browse freely without pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Verified Dealers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$45M+</div>
              <div className="text-primary-100">In Inventory Value</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2,500+</div>
              <div className="text-primary-100">Active Buyers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8.7%</div>
              <div className="text-primary-100">Avg Discount</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're buying or selling, we'd love to have you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buyer/signup" className="btn-primary">
              Sign Up as Buyer
            </Link>
            <Link to="/dealer/signup" className="btn-secondary">
              Join as Dealer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
