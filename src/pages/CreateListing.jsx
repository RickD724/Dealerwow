import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Plus, X, Save, ArrowLeft } from 'lucide-react';

const CreateListing = () => {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
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
    location: ''
  });

  const [photos, setPhotos] = useState([]);

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

  const calculateDiscount = () => {
    const discount = formData.msrp - formData.sellingPrice;
    const percent = ((discount / formData.msrp) * 100).toFixed(1);
    return { discount, percent };
  };

  const handleSubmit = () => {
    const { discount, percent } = calculateDiscount();
    
    const listing = {
      ...formData,
      pricing: {
        msrp: parseFloat(formData.msrp),
        sellingPrice: parseFloat(formData.sellingPrice),
        discount,
        discountPercent: parseFloat(percent)
      },
      photos,
      dealHeatScore: Math.round((formData.daysInStock / 180 * 50) + (parseFloat(percent) / 15 * 50)),
      createdAt: new Date().toISOString()
    };
    
    console.log('Creating listing:', listing);
    alert('Listing created! In production, this would save to your database.');
  };

  const { discount, percent } = calculateDiscount();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/dealer/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Listing</h1>
          <p className="text-gray-600">Add a vehicle to your inventory</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                placeholder="e.g., Porsche"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g., 911"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trim *</label>
              <input
                type="text"
                name="trim"
                value={formData.trim}
                onChange={handleChange}
                placeholder="e.g., Carrera GTS"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">VIN *</label>
              <input
                type="text"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                placeholder="17-digit VIN"
                maxLength={17}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Number *</label>
              <input
                type="text"
                name="stockNumber"
                value={formData.stockNumber}
                onChange={handleChange}
                placeholder="e.g., P2401234"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-2">Days in Stock *</label>
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
                placeholder="125000"
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
                placeholder="115000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {formData.msrp > 0 && formData.sellingPrice > 0 && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Discount:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${discount.toLocaleString()} ({percent}%)
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Features</h2>
            <button
              type="button"
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
                    type="button"
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

        <div className="flex justify-end space-x-4">
          <Link
            to="/dealer/dashboard"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center space-x-2"
          >
            <Save className="h-5 w-5" />
            <span>Create Listing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
