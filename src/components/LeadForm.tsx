import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { SolarCalculation } from '../types';

interface LeadFormProps {
  calculationResult?: SolarCalculation;
}

export function LeadForm({ calculationResult }: LeadFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !contact) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([{
          name,
          contact,
          location: calculationResult?.location,
          monthly_bill: calculationResult?.monthlyBill,
          system_size: calculationResult?.systemSize,
          total_cost: calculationResult?.totalCost,
          monthly_payment: calculationResult?.monthlyPayment
        }]);

      if (supabaseError) throw supabaseError;
      
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting lead:', err);
      setError('Failed to submit your request. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800">Thank you for your interest!</h3>
        <p className="mt-2 text-green-600">We'll contact you shortly to discuss your solar needs.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Request a Callback</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Phone Number or Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {contact.includes('@') ? (
                <Mail className="h-5 w-5 text-gray-400" />
              ) : (
                <Phone className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter phone or email"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-[#fcd913] hover:bg-[#e6c511] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}