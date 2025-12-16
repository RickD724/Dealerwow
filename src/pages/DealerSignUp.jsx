import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Building2, Mail, Phone, MapPin, FileText, CheckCircle } from 'lucide-react'

const DealerSignUp = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    dealerLicense: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would submit to backend
    alert('Dealer signup submitted! In production, this would create an account and redirect to dashboard.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-8">
          <div className="text-center mb-8">
            <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dealer Portal Sign Up
            </h1>
            <p className="text-gray-600">
              Join our marketplace and start moving your aged inventory today
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Dealer Benefits:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Move aged inventory without public discounting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Stay anonymous until real buyers unlock your deals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Simple monthly subscription, no per-sale fees</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Access to motivated buyers actively seeking deals</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="Premium Auto Group"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="dealer@premiumauto.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input-field"
                placeholder="123 Auto Drive"
              />
            </div>

            {/* City, State, Zip */}
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="San Francisco"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="CA"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP *
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="94102"
                />
              </div>
            </div>

            {/* Dealer License */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dealer License Number *
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="dealerLicense"
                  value={formData.dealerLicense}
                  onChange={handleChange}
                  required
                  className="input-field pl-10"
                  placeholder="DL-123456"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                We'll verify this with your state's DMV
              </p>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full btn-primary">
              Create Dealer Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/dealer/dashboard" className="text-primary-600 hover:text-primary-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DealerSignUp
