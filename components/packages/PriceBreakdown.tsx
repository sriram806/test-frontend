'use client';

import { useState } from 'react';
import { X, Info } from 'lucide-react';

interface BreakdownItem {
  label: string;
  amount: number;
}

interface PriceBreakdownProps {
  price: number;
  breakdown: BreakdownItem[];
}

export default function PriceBreakdown({ price, breakdown }: PriceBreakdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center"
      >
        ₹{price.toLocaleString()} / person
        <Info className="ml-2 h-5 w-5" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
              Price Breakdown
            </h3>

            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              {breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 text-gray-700 dark:text-gray-300">
                  <span>{item.label}</span>
                  <span className="font-medium">₹{item.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between font-bold text-lg text-gray-900 dark:text-gray-100">
              <span>Total</span>
              <span>₹{price.toLocaleString()}</span>
            </div>

            {/* Close button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
