import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CheckCircle, XCircle, Users, Package, DollarSign, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { listings, dealers } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingDealers, setPendingDealers] = useState([
    {
      id: 'D003',
      businessName: 'Luxury Motors West',
      email: 'sales@luxurymotorswest.com',
      location: 'Los Angeles, CA',
      licenseNumber: 'DL-789012',
      dateApplied: '2024-11-10',
      status: 'pending'
    }
  ]);

  const approveDealer = (dealerId) => {
    setPendingDealers(prev => 
      prev.map(d => d.id === dealerId ? {...d, status: 'approved'} : d)
    );
    alert('Dealer approved! Email sent to dealer with login credentials.');
  };

  const rejectDealer = (dealerId) => {
    setPendingDealers(prev => 
      prev.map(d => d.id === dealerId ? {...d, status: 'rejected'} : d)
    );
    alert('Dealer application rejected.');
  };

  const suspendListing = (listingId) => {
    alert(`Listing ${listingId} suspended and removed from public view.`);
  };

  const totalListings = listings.length;
  const totalDealers = dealers.length;
  const pendingApprovals = pendingDealers.filter(d => d.status === 'pending').length;
  const totalViews = listings.reduce((sum, l) => sum + l.views, 0);
  const totalUnlocks = listings.reduce((sum, l) => sum + l.unlockCount, 0);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform overview and management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Listings</p>
                <p className="text-3xl font-bold text-gray-900">{totalListings}</p>
              </div>
              <Package className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Dealers</p>
                <p className="text-3xl font-bold text-gray-900">{totalDealers}</p>
              </div>
              <Users className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending Approvals</p>
                <p className="text-3xl font-bold text-gray-900">{pendingApprovals}</p>
              </div>
              <AlertCircle className="h-10 w-10 text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Unlocks</p>
                <p className="text-3xl font-bold text-gray-900">{totalUnlocks.toLocaleString()}</p>
              </div>
              <DollarSign className="h-10 w-10 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'pending'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Pending Approvals ({pendingApprovals})
              </button>
              <button
                onClick={() => setActiveTab('dealers')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'dealers'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Active Dealers ({totalDealers})
              </button>
              <button
                onClick={() => setActiveTab('listings')}
                className={`py-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'listings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Listing Moderation
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-600 font-medium mb-1">Total Views</p>
                    <p className="text-2xl font-bold text-blue-900">{totalViews.toLocaleString()}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-600 font-medium mb-1">Total Unlocks</p>
                    <p className="text-2xl font-bold text-green-900">{totalUnlocks}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-purple-600 font-medium mb-1">Conversion Rate</p>
                    <p className="text-2xl font-bold text-purple-900">
                      {totalViews > 0 ? ((totalUnlocks / totalViews) * 100).toFixed(1) : 0}%
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pending' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Dealer Approvals</h3>
                {pendingDealers.filter(d => d.status === 'pending').length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No pending dealer applications</p>
                ) : (
                  <div className="space-y-4">
                    {pendingDealers.filter(d => d.status === 'pending').map(dealer => (
                      <div key={dealer.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link 
                              to={`/admin/dealer/${dealer.id}`}
                              className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                            >
                              {dealer.businessName}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">{dealer.email}</p>
                            <p className="text-sm text-gray-600">{dealer.location}</p>
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-medium">License:</span> {dealer.licenseNumber}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => approveDealer(dealer.id)}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4" />
                              <span>Approve</span>
                            </button>
                            <button
                              onClick={() => rejectDealer(dealer.id)}
                              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center space-x-2"
                            >
                              <XCircle className="h-4 w-4" />
                              <span>Reject</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'dealers' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Dealers</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Business Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Listings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dealers.map(dealer => (
                        <tr key={dealer.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{dealer.businessName}</div>
                            <div className="text-sm text-gray-500">{dealer.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {dealer.address.displayLocation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {listings.filter(l => l.dealerId === dealer.id).length}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                              {dealer.subscriptionTier}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Link
                              to={`/admin/dealer/${dealer.id}`}
                              className="text-blue-600 hover:text-blue-900 font-medium"
                            >
                              Manage
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'listings' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Listings</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Vehicle</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dealer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {listings.slice(0, 5).map(listing => (
                        <tr key={listing.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">
                              {listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {listing.dealerLocation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${listing.pricing.sellingPrice.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => suspendListing(listing.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Suspend
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
