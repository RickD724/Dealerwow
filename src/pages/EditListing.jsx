import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Upload, Plus, X, Save, ArrowLeft, Trash2 } from 'lucide-react';

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getListingById } = useApp();
  const listing = getListingById(id);

  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    vin: '',
    exteriorColor: '',
    interiorColor: '',
    mileage: 0,
    condition: 'new',
    bodyStyle: '',
    msrp: 0,
    sellingPrice: 0,
    stockNumber: '',
    daysInStock: 0,
    features: [''],
    location: '',
    status: 'active'
  });

  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (listing) {
      setFormData({
        year: listing.vehicle.year,
        make: listing.vehicle.make,
        model: listing.vehicle.model,
        trim: listing.vehicle.trim,
        vin: listing.vehicle.vin,
        exteriorColor: listing.vehicle.exteriorColor,
        interiorColor: listing.vehicle.interiorColor,
        mileage: listing.vehicle.mileage,
        condition: listing.vehicle.condition,
        bodyStyle: listing.vehicle.bodyStyle,
        msrp: listing.pricing.msrp,
        sellingPrice: listing.pricing.sellingPrice,
        stockNumber: listing.inventory.stockNumber,
        daysInStock: listing.inventory.daysInStock,
        features: listing.features || [''],
        location: listing.dealerLocation,
        status: listing.status || 'active'
      });
      setPhotos(listing.photos || []);
    }
  }, [listing]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  };

  const removeFeature = (index) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(prev => [...prev, ...files.map(f => URL.createObjectURL(f))]);
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const calculateDiscount = () => {
    const discount = formData.msrp - formData.sellingPrice;
    const percent = ((discount / formData.msrp) * 100).toFixed(1);
    return { discount, percent };
  };

  const handleSave = () => {
    const { discount, percent } = calculateDiscount();
    
    const updatedListing = {
      ...listing,
      ...formData,
      pricing: {
        msrp: parseFloat(formData.msrp),
        sellingPrice: parseFloat(formData.sellingPrice),
        discount,
        discountPercent: parseFloat(percent)
      },
      photos,
      notes,
      updatedAt: new Date().toISOString()
    };
    
    console.log('Updating listing:', updatedListing);
    alert('Listing updated! In production, this would save to database.');
    navigate('/dealer/dashboard');
  };

  const handleStatusChange = (newStatus) => {
    setFormData(prev => ({ ...prev, status: newStatus }));
    alert(`Listing marked as ${newStatus}. In production, this updates the database.`);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this listing? This cannot be undone.')) {
      console.log('Deleting listing:', id);
      alert('Listing deleted (soft delete). In production, this marks as deleted in database.');
      navigate('/dealer/dashboard');
    }
  };

  const { discount, percent } = calculateDiscount();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/dealer/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Listing</h1>
            <p className="text-gray-600">{listing.vehicle.year} {listing.vehicle.make} {listing.vehicle.model}</p>
          </div>

          {/* Status Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => handleStatusChange('active')}
              className={`px-4 py-2 rounded-lg font-medium ${
                formData.status === 'active'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleStatusChange('paused')}
              className={`px-4 py-2 rounded-lg font-medium ${
                formData.status === 'paused'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Paused
            </button>
            <button
              onClick={() => handleStatusChange('sold')}
              className={`px-4 py-2 rounded-lg font-medium ${
                formData.status === 'sold'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Sold
            </button>
          </div>
        </div>

        {/* Quick Edit Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Edit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mileage *</label>
              <input
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Days in Stock</label>
              <input
                type="number"
                name="daysInStock"
                value={formData.daysInStock}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">MSRP *</label>
              <input
                type="number"
                name="msrp"
                value={formData.msrp}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price *</label>
              <input
                type="number"
                name="sellingPrice"
                value={formData.sellingPrice}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {formData.msrp > 0 && formData.sellingPrice > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Current Discount:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${discount.toLocaleString()} ({percent}%)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Internal Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Add internal notes about this listing (not visible to buyers)..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Photos */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Photos</h2>
          
          {photos.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mb-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <label className="cursor-pointer">
              <span className="text-blue-600 hover:text-blue-700 font-medium">
                Click to upload
              </span>
              <span className="text-gray-600"> or drag and drop</span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Features</h2>
            <button
              onClick={addFeature}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <Plus className="h-4 w-4" />
              <span>Add Feature</span>
            </button>
          </div>

          <div className="space-y-3">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder="e.g., Sport Chrono Package"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {formData.features.length > 1 && (
                  <button
                    onClick={() => removeFeature(index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleDelete}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center space-x-2"
          >
            <Trash2 className="h-5 w-5" />
            <span>Delete Listing</span>
          </button>

          <div className="flex space-x-4">
            <Link
              to="/dealer/dashboard"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
            >
              Cancel
            </Link>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center space-x-2"
            >
              <Save className="h-5 w-5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
