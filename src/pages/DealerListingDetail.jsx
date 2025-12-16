import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Eye, Unlock, TrendingUp, Edit, Pause, Check, DollarSign } from 'lucide-react';

const DealerListingDetail = () => {
  const { id } = useParams();
  const { getListingById } = useApp();
  const listing = getListingById(id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing Not Found</h2>
          <Link to="/dealer/dashboard" className="text-blue-600 hover:text-blue-700">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Mock unlock data - in production, fetch from backend
  const unlockData = [
    {
      id: 'U001',
      buyerName: 'Buyer #1234',
      unlockedAt: '2024-12-14T10:30:00Z',
      contacted: true
    },
    {
      id: 'U002',
      buyerName: 'Buyer #5678',
      unlockedAt: '2024-12-13T15:45:00Z',
      contacted: false
    },
    {
      id: 'U003',
      buyerName: 'Buyer #9012',
      unlockedAt: '2024-12-12T09:20:00Z',
      contacted: true
    }
  ];

  const handleQuickAction = (action) => {
    alert(`${action} action triggered. In production, this updates the listing status.`);
  };

  const conversionRate = listing.views > 0 
    ? ((listing.unlockCount / listing.views) * 100).toFixed(1)
    : 0;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/dealer/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Listing Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                  </h1>
                  <p className="text-gray-600">{listing.vehicle.trim}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  listing.status === 'active' ? 'bg-green-100 text-green-800' :
                  listing.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {listing.status || 'Active'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Stock Number</p>
                  <p className="font-semibold text-gray-900">{listing.inventory.stockNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">VIN</p>
                  <p className="font-semibold text-gray-900">{listing.vehicle.vin}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mileage</p>
                  <p className="font-semibold text-gray-900">{listing.vehicle.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Days in Stock</p>
                  <p className="font-semibold text-gray-900">{listing.inventory.daysInStock} days</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">MSRP:</span>
                  <span className="text-gray-900 line-through">${listing.pricing.msrp.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Your Price:</span>
                  <span className="text-2xl font-bold text-gray-900">${listing.pricing.sellingPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Discount:</span>
                  <span className="text-green-600 font-semibold">
                    ${listing.pricing.discount.toLocaleString()} ({listing.pricing.discountPercent}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance</h2>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <Eye className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{listing.views}</p>
                  <p className="text-sm text-gray-600">Views</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-lg p-4 mb-2">
                    <Unlock className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{listing.unlockCount}</p>
                  <p className="text-sm text-gray-600">Unlocks</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-lg p-4 mb-2">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{conversionRate}%</p>
                  <p className="text-sm text-gray-600">Conversion</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Deal Heat Score:</span>
                  <span className="text-2xl font-bold text-orange-600">{listing.dealHeatScore}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full" 
                    style={{ width: `${listing.dealHeatScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Unlocks/Leads */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Unlocks</h2>
              
              {unlockData.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No unlocks yet. Keep promoting your listing!</p>
              ) : (
                <div className="space-y-4">
                  {unlockData.map(unlock => (
                    <div key={unlock.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900">{unlock.buyerName}</p>
                          <p className="text-sm text-gray-600">
                            Unlocked {new Date(unlock.unlockedAt).toLocaleDateString()} at{' '}
                            {new Date(unlock.unlockedAt).toLocaleTimeString()}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          unlock.contacted 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {unlock.contacted ? 'Contacted' : 'New Lead'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <Link
                  to={`/dealer/edit-listing/${listing.id}`}
                  className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  <Edit className="h-5 w-5 mr-2" />
                  Edit Listing
                </Link>

                <button
                  onClick={() => handleQuickAction('Pause')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium"
                >
                  <Pause className="h-5 w-5 mr-2" />
                  Pause Listing
                </button>

                <button
                  onClick={() => handleQuickAction('Mark as Sold')}
                  className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                >
                  <Check className="h-5 w-5 mr-2" />
                  Mark as Sold
                </button>
              </div>
            </div>

            {/* Lead Quality */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Lead Quality</h2>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-3xl font-bold text-blue-900">{listing.unlockCount}</p>
                    <p className="text-sm text-blue-700">Qualified Leads</p>
                  </div>
                  <Unlock className="h-10 w-10 text-blue-600" />
                </div>
                <p className="text-xs text-blue-700 mt-2">
                  Each buyer paid $20 to unlock your contact info - these are serious buyers!
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Contacted:</span>
                  <span className="font-semibold text-gray-900">2 of 3</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Pending Response:</span>
                  <span className="font-semibold text-yellow-600">1</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Update photos regularly to maintain interest</li>
                <li>• Adjust price if not getting unlocks</li>
                <li>• Respond to leads within 1 hour</li>
                <li>• Highlight unique features in description</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerListingDetail;
