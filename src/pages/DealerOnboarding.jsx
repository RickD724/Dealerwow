import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, Mail, Phone } from 'lucide-react';

const DealerOnboarding = () => {
  // In production, fetch this from backend based on logged-in dealer
  const dealerStatus = {
    status: 'pending', // 'pending' | 'approved' | 'denied'
    businessName: 'Premium Motors Bay Area',
    email: 'dealer@premiumbaymotors.com',
    submittedAt: '2024-12-15',
    denialReason: null // Only if denied
  };

  const renderStatusContent = () => {
    switch (dealerStatus.status) {
      case 'pending':
        return (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Clock className="h-12 w-12 text-yellow-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Under Review
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for applying to DealerWoW! Our team is reviewing your dealer application.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 text-left mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Application Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Business Name:</span>
                  <span className="font-medium text-gray-900">{dealerStatus.businessName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{dealerStatus.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Submitted:</span>
                  <span className="font-medium text-gray-900">
                    {new Date(dealerStatus.submittedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    Pending Review
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Our team will verify your dealer license within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>You'll receive an email notification once approved</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>After approval, you can immediately start listing vehicles</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-4">Questions about your application?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@dealerwow.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
                <a
                  href="tel:1-800-DEAL-WOW"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        );

      case 'approved':
        return (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to DealerWoW!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your dealer account has been approved. You can now start listing vehicles.
            </p>

            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Next Steps:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create your first listing from the dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Upload quality photos to attract buyers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Set competitive pricing to move inventory faster</span>
                </li>
              </ul>
            </div>

            <Link
              to="/dealer/dashboard"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg"
            >
              Go to Dashboard
            </Link>
          </div>
        );

      case 'denied':
        return (
          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Not Approved
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unfortunately, we were unable to approve your dealer application at this time.
            </p>

            {dealerStatus.denialReason && (
              <div className="bg-red-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">Reason:</h3>
                <p className="text-gray-700">{dealerStatus.denialReason}</p>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What you can do:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Verify your dealer license is current and valid</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Ensure all business information is accurate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Contact support for clarification</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@dealerwow.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              <Link
                to="/dealer/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Submit New Application
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderStatusContent()}
      </div>
    </div>
  );
};

export default DealerOnboarding;
