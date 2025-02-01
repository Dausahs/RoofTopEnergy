import React, { useState } from 'react';
import { Sun, Battery, Wallet, ArrowRight, Mail, Phone, Building } from 'lucide-react';
import { Calculator } from './components/Calculator';
import { LeadForm } from './components/LeadForm';
import type { SolarCalculation } from './types';

function App() {
  const [calculationResult, setCalculationResult] = useState<SolarCalculation | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Power Your Future with Solar Energy
              </h1>
              <p className="text-lg mb-8">
                Transform your energy consumption and save up to 30% on your monthly electricity bills
                with our advanced solar solutions.
              </p>
              <a
                href="#calculator"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#fcd913] hover:bg-[#e6c511]"
              >
                Calculate Your Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                alt="Solar Panels"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Rooftop Energy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-[#fcd913] rounded-full mb-4">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Energy</h3>
              <p className="text-gray-600">
                Harness the power of the sun with our high-efficiency solar panels
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-[#fcd913] rounded-full mb-4">
                <Wallet className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Money</h3>
              <p className="text-gray-600">
                Reduce your electricity bills by up to 30% with our solar solutions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-block p-3 bg-[#fcd913] rounded-full mb-4">
                <Battery className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Energy Independence</h3>
              <p className="text-gray-600">
                Take control of your energy future with reliable solar power
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Calculate Your Solar Savings</h2>
          <Calculator onCalculate={setCalculationResult} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started Today</h2>
          <LeadForm calculationResult={calculationResult || undefined} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                Leading the way in sustainable energy solutions for Malaysian homes and businesses.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:sales@rooftop.my" className="hover:text-[#fcd913] transition-colors">
                    sales@rooftop.my
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Building className="w-4 h-4 mr-2" />
                  <a href="mailto:partnerships@rooftop.my" className="hover:text-[#fcd913] transition-colors">
                    partnerships@rooftop.my
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="mailto:investors@rooftop.my" className="hover:text-[#fcd913] transition-colors">
                    investors@rooftop.my
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#calculator" className="text-gray-400 hover:text-[#fcd913] transition-colors">
                    Solar Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#fcd913] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#fcd913] transition-colors">
                    Our Services
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Office</h4>
              <address className="text-gray-400 not-italic">
                Level 35, Menara Bangkok Bank<br />
                Jalan Ampang<br />
                50450 Kuala Lumpur<br />
                Malaysia
              </address>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                Rooftop Energy © 2024
              </p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#fcd913] text-sm transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#fcd913] text-sm transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#fcd913] text-sm transition-colors">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;