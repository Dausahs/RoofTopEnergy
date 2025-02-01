import React, { useState } from 'react';
import { Calculator as CalculatorIcon, PiggyBank, Sun, Zap } from 'lucide-react';
import { calculateSolarSystem } from '../utils/calculator';
import type { SolarCalculation } from '../types';

const STATES = [
  'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 
  'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 
  'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur', 'Labuan', 'Putrajaya'
];

interface CalculatorProps {
  onCalculate?: (result: SolarCalculation) => void;
}

export function Calculator({ onCalculate }: CalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<SolarCalculation | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!monthlyBill || isNaN(Number(monthlyBill)) || Number(monthlyBill) <= 0) {
      setError('Please enter a valid monthly bill amount');
      return;
    }
    
    const calculation = calculateSolarSystem(Number(monthlyBill));
    const calculationWithLocation = {
      ...calculation,
      location
    };
    setResult(calculationWithLocation);
    onCalculate?.(calculationWithLocation);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden print:shadow-none">
        <div className="p-8 print:p-0">
          <form onSubmit={handleCalculate} className="space-y-6 print:hidden">
            <div className="space-y-4">
              <div>
                <label htmlFor="monthlyBill" className="block text-sm font-medium text-gray-700">
                  Monthly TNB Bill Amount (RM)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">RM</span>
                  </div>
                  <input
                    type="number"
                    id="monthlyBill"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location (Optional)
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                >
                  <option value="">Select state</option>
                  {STATES.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-black bg-[#fcd913] hover:bg-[#e6c511] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
            >
              <CalculatorIcon className="w-5 h-5 mr-2" />
              Calculate Savings
            </button>
          </form>

          {result && (
            <>
              {/* Screen version */}
              <div className="mt-8 space-y-8 print:hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-[#fcd913] rounded-lg mr-3">
                        <Sun className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-semibold">System Size</h4>
                    </div>
                    <p className="text-3xl font-bold">{result.systemSize.toFixed(2)} kWp</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-[#fcd913] rounded-lg mr-3">
                        <PiggyBank className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-semibold">Monthly Savings</h4>
                    </div>
                    <p className="text-3xl font-bold">
                      RM {(result.monthlyBill - result.monthlyPayment).toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-100">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-[#fcd913] rounded-lg mr-3">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-semibold">Total Investment</h4>
                    </div>
                    <p className="text-3xl font-bold">RM {result.totalCost.toFixed(2)}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-semibold mb-4">Detailed Breakdown</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Energy Consumption</p>
                      <p className="text-lg font-semibold">{result.monthlyEnergy.toFixed(2)} kWh</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Daily Energy Consumption</p>
                      <p className="text-lg font-semibold">{result.dailyEnergy.toFixed(2)} kWh</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Monthly Loan Payment</p>
                      <p className="text-lg font-semibold">RM {result.monthlyPayment.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Loan Term</p>
                      <p className="text-lg font-semibold">{(result.loanTerm / 12).toFixed(0)} years</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                >
                  Print Quote
                </button>
              </div>

              {/* Print version */}
              <div className="hidden print:block">
                <div className="print-header">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-bold">Solar System Quote</h1>
                      <p className="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <h2 className="text-xl font-bold">Rooftop Energy</h2>
                      {location && <p className="text-gray-600">Location: {location}</p>}
                    </div>
                  </div>
                </div>

                <div className="print-section">
                  <h3 className="text-xl font-bold mb-4">System Overview</h3>
                  <div className="print-grid">
                    <div>
                      <p className="print-label">System Size</p>
                      <p className="print-value">{result.systemSize.toFixed(2)} kWp</p>
                    </div>
                    <div>
                      <p className="print-label">Monthly Energy Production</p>
                      <p className="print-value">{result.monthlyEnergy.toFixed(2)} kWh</p>
                    </div>
                  </div>
                </div>

                <div className="print-section">
                  <h3 className="text-xl font-bold mb-4">Financial Summary</h3>
                  <div className="print-grid">
                    <div>
                      <p className="print-label">Current Monthly Bill</p>
                      <p className="print-value">RM {result.monthlyBill.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="print-label">New Monthly Payment</p>
                      <p className="print-value">RM {result.monthlyPayment.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="print-label">Monthly Savings</p>
                      <p className="print-value">RM {(result.monthlyBill - result.monthlyPayment).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="print-label">Loan Term</p>
                      <p className="print-value">{(result.loanTerm / 12).toFixed(0)} years</p>
                    </div>
                  </div>

                  <div className="print-total">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xl font-bold">Total Investment</p>
                        <p className="text-sm text-gray-600">Including installation and equipment</p>
                      </div>
                      <p className="text-2xl font-bold">RM {result.totalCost.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="print-section">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
                    <p className="text-gray-600">Contact us to proceed with your solar installation:</p>
                    <p className="mt-2">
                      <strong>Email:</strong> sales@rooftop-energy.com<br />
                      <strong>Phone:</strong> +60 1234 5678
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}