import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, CheckCircle, XCircle, AlertTriangle, Package, 
  DollarSign, Eye, Mail, Phone, MapPin, FileText, Ban 
} from 'lucide-react';

const AdminDealerDetail = () => {
  const { id } = useParams();
  const { getDealerById, listings } = useApp();
  const dealer = getDealerById(id);

  const [notes, setNotes] = useState('');
  const [isSuspended, setIsSuspended] = useState(false);

  if (!dealer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dealer Not Found</h2>
          <Link to="/admin/dashboard" className="text-blue-600 hover:text-blue-700">
            Back to Admin Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const dealerListings = listings.filter(l => l.dealerId === dealer.id);
  const totalViews = dealerListings.reduce((sum, l) => sum + l.views, 0);
  const totalUnlocks = dealerListings.reduce((sum, l) => sum + l.unlockCount, 0);
  const revenue = totalUnlocks * 20;

  const handleApprove = () => {
    alert(`Dealer "${dealer.businessName}" has been approved. Email sent with login credentials.`);
  };

  const handleDeny = () => {
    if (notes.trim()) {
      alert(`Dealer denied. Reason: ${notes}`);
    } else {
      alert('Please add notes explaining the denial reason.');
    }
  };

  const handleSuspend = () => {
    setIsSuspended(!isSuspended);
    alert(`Dealer ${!isSuspended ? 'suspended' : 'reactivated'}. All listings ${!isSuspended ? 'hidden' : 'restored'}.`);
  };

  const handleSaveNotes = () => {
    alert('Admin notes saved to dealer record.');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/admin/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Admin Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dealer Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{dealer.businessName}</h1>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    dealer.verified 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {dealer.verified ? 'Verified' : 'Pending Verification'}
                  </span>
                </div>

                {isSuspended && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <Ban className="h-4 w-4 mr-1" />
                    Suspended
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${dealer.email}`} className="text-blue-600 hover:text-blue-700">
                      {dealer.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${dealer.phone}`} className="text-gray-900">
                      {dealer.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900">{dealer.address.displayLocation}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Account Created</p>
                    <p className="text-gray-900">{new Date(dealer.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Full Address</h3>
                <p className="text-gray-600">
                  {dealer.address.street}<br />
                  {dealer.address.city}, {dealer.address.state} {dealer.address.zip}
                </p>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance</h2>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-lg p-4 mb-2">
                    <Package className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{dealerListings.length}</p>
                  <p className="text-sm text-gray-600">Active Listings</p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-lg p-4 mb-2">
                    <Eye className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{totalViews}</p>
                  <p className="text-sm text-gray-600">Total Views</p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-lg p-4 mb-2">
                    <DollarSign className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">${revenue}</p>
                  <p className="text-sm text-gray-600">Revenue Generated</p>
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Dealer Listings</h2>
              
              {dealerListings.length === 0 ? (
                <p className="text-gray-600 text-center py-8">No listings yet</p>
              ) : (
                <div className="space-y-4">
                  {dealerListings.map(listing => (
                    <div key={listing.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                          </h3>
                          <p className="text-sm text-gray-600">{listing.vehicle.trim}</p>
                          <div className="flex gap-4 mt-2 text-sm text-gray-600">
                            <span>{listing.views} views</span>
                            <span>{listing.unlockCount} unlocks</span>
                            <span className="text-green-600 font-medium">
                              {listing.pricing.discountPercent}% off
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ${listing.pricing.sellingPrice.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500 line-through">
                            ${listing.pricing.msrp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Admin Notes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Notes</h2>
              
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={6}
                placeholder="Add internal notes about this dealer (not visible to dealer)..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
              />
              
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Notes
              </button>
            </div>
          </div>

          {/* Sidebar - Actions */}
          <div className="space-y-6">
            {!dealer.verified && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Approval Actions</h2>
                
                <div className="space-y-3">
                  <button
                    onClick={handleApprove}
                    className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                  >
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Approve Dealer
                  </button>

                  <button
                    onClick={handleDeny}
                    className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                  >
                    <XCircle className="h-5 w-5 mr-2" />
                    Deny Application
                  </button>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      Add notes above before denying to explain the reason.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {dealer.verified && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Dealer Management</h2>
                
                <button
                  onClick={handleSuspend}
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium ${
                    isSuspended
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  <Ban className="h-5 w-5 mr-2" />
                  {isSuspended ? 'Reactivate Dealer' : 'Suspend Dealer'}
                </button>

                {isSuspended && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800">
                      All dealer listings are currently hidden from buyers.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Subscription Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Subscription</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-semibold text-gray-900 capitalize">{dealer.subscriptionTier}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly:</span>
                  <span className="font-semibold text-gray-900">
                    ${dealer.subscriptionTier === 'pro' ? '199' : '99'}
                  </span>
                </div>
              </div>
            </div>

            {/* Revenue Generated (Platform) */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Revenue</h2>
              
              <div className="bg-green-50 rounded-lg p-4 mb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-green-600 mr-2" />
                    <div>
                      <p className="text-2xl font-bold text-green-900">
                        ${revenue}
                      </p>
                      <p className="text-sm text-green-700">From {totalUnlocks} unlocks</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Revenue generated from buyers unlocking this dealer's listings
              </p>
            </div>

            {/* Contact Dealer */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Dealer</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${dealer.email}`}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
                <a
                  href={`tel:${dealer.phone}`}
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Dealer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDealerDetail;
