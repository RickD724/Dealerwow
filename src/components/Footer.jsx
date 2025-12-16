import React from 'react'
import { Link } from 'react-router-dom'
import { Car, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-primary-500" />
              <span className="text-xl font-bold text-white">
                Dealer<span className="text-primary-500">WoW</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Connecting dealers with buyers for exclusive aged inventory deals.
            </p>
          </div>

          {/* For Buyers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse" className="hover:text-primary-500 transition-colors">
                  Browse Deals
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/buyer/signup" className="hover:text-primary-500 transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary-500 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* For Dealers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Dealers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dealer/signup" className="hover:text-primary-500 transition-colors">
                  Dealer Portal
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-primary-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary-500 transition-colors">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@oldinventorydeals.com" className="hover:text-primary-500 transition-colors">
                  support@oldinventorydeals.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-OLD-DEAL</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nationwide Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} DealerWoW. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
