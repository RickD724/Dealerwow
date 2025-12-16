import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Heart, Unlock, CreditCard, X, ExternalLink } from 'lucide-react';

const BuyerDashboard = () => {
  const { listings, unlockedListings } = useApp();
  const [savedListings, setSavedListings] = useState(['L001', 'L003']); // Mock saved IDs
  const [hasSubscription, setHasSubscription] = useState(true); // Mock subscription status

  const unlockedVehicles = listings.filter(l => unlockedListings.includes(l.id));
  const savedVehicles = listings.filter(l => savedListings.includes(l.id));

  const handleUnsave = (listingId) => {
    setSavedListings(prev => prev.filter(id => id !== listingId));
  };

  const handleCancelSubscription = () => {
    if (window.confirm('Are you sure you want to cancel your unlimited access subscription? You will need to pay $20 per unlock after cancellation.')) {
      setHasSubscription(false);
      alert('Subscription cancelled. You can still access your previously unlocked deals.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Track your unlocked deals and saved favorites</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Unlocked Deals</p>
                <p className="text-3xl font-bold text-gray-900">{unlockedVehicles.length}</p>
              </div>
              <Unlock className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Saved Favorites</p>
                <p className="text-3xl font-bold text-gray-900">{savedVehicles.length}</p>
              </div>
              <Heart className="h-10 w-10 text-red-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Subscription</p>
                <p className="text-lg font-bold text-gray-900">
                  {hasSubscription ? 'Unlimited' : 'Pay-per-unlock'}
                </p>
              </div>
              <CreditCard className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Subscription Card */}
        {hasSubscription && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md p-6 mb-8 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Unlimited Access</h3>
                <p className="text-blue-100 mb-1">$49/month - Unlimited unlocks</p>
                <p className="text-sm text-blue-200">Next billing date: January 15, 2025</p>
              </div>
              <button
                onClick={handleCancelSubscription}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm"
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        )}

        {/* Unlocked Deals */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Unlocked Deals</h2>
          
          {unlockedVehicles.length === 0 ? (
            <div className="text-center py-12">
              <Unlock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">You haven't unlocked any deals yet</p>
              <Link to="/browse" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse Deals →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {unlockedVehicles.map(listing => (
                <div key={listing.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                      </h3>
                      <p className="text-gray-600 mb-3">{listing.vehicle.trim}</p>
                      
                      <div className="bg-green-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Dealer Contact Info:</h4>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-700">
                            <span className="font-medium">Dealership:</span> {listing.dealerName}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Phone:</span>{' '}
                            <a href={`tel:${listing.dealerPhone}`} className="text-blue-600 hover:text-blue-700">
                              {listing.dealerPhone}
                            </a>
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Email:</span>{' '}
                            <a href={`mailto:${listing.dealerEmail}`} className="text-blue-600 hover:text-blue-700">
                              {listing.dealerEmail}
                            </a>
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Location:</span> {listing.dealerLocation}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>{listing.vehicle.mileage.toLocaleString()} mi</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">
                          {listing.pricing.discountPercent}% off MSRP
                        </span>
                        <span>•</span>
                        <span className="font-bold text-gray-900">
                          ${listing.pricing.sellingPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/deal/${listing.id}`}
                      className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Saved Favorites */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Saved Favorites</h2>
            <span className="text-sm text-gray-500">{savedVehicles.length} saved</span>
          </div>
          
          {savedVehicles.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">No saved favorites yet</p>
              <Link to="/browse" className="text-blue-600 hover:text-blue-700 font-medium">
                Browse Deals →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedVehicles.map(listing => (
                <div key={listing.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors relative">
                  <button
                    onClick={() => handleUnsave(listing.id)}
                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  <div className="pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{listing.vehicle.trim}</p>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-bold text-gray-900">
                        ${listing.pricing.sellingPrice.toLocaleString()}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {listing.pricing.discountPercent}% off
                      </span>
                    </div>
                    
                    <div className="flex gap-3 text-sm text-gray-600 mb-4">
                      <span>{listing.vehicle.mileage.toLocaleString()} mi</span>
                      <span>•</span>
                      <span>{listing.dealerLocation}</span>
                    </div>

                    <Link
                      to={`/deal/${listing.id}`}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">💡 Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Contact dealers quickly - the best deals move fast</li>
            <li>• Save your favorites to compare and track price changes</li>
            <li>• Unlocked deals remain accessible even after canceling subscription</li>
            <li>• Subscribe for unlimited access if you're shopping for multiple vehicles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
