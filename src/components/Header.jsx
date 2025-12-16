import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Car, User, LogIn } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">
              Dealer<span className="text-primary-600">WoW</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/browse" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Browse Deals
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/dealer/signup" 
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
            >
              <User className="h-4 w-4" />
              <span>Dealer Login</span>
            </Link>
            <Link 
              to="/buyer/signup" 
              className="btn-primary flex items-center space-x-1"
            >
              <LogIn className="h-4 w-4" />
              <span>Buyer Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/browse" 
                className="text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Deals
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                className="text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link 
                  to="/dealer/signup" 
                  className="block text-primary-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dealer Login
                </Link>
                <Link 
                  to="/buyer/signup" 
                  className="block btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buyer Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
