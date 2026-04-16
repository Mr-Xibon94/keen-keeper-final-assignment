import React from "react";
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";

const ErrorHandling = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-red-500 w-12 h-12" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          We couldn't process your request. Please try again or go back to the homepage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} /> Go Back
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <RefreshCcw size={18} /> Retry
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorHandling;