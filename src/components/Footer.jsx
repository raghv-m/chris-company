import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: 'By Appointment' },
    { day: 'Sunday', time: 'Closed' },
    { day: 'Emergency', time: '24/7 Available' },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Alberta Clean Pros</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional commercial cleaning services for retail spaces across Alberta. Trusted by Shoppers Drug Mart, Real Canadian Superstore, No Frills, and more. Eco-friendly, licensed, and insured.
            </p>
            <div className="flex space-x-4">
              <a href="tel:780-555-0123" className="flex items-center space-x-2 text-green-400 hover:text-green-300">
                <Phone className="w-5 h-5" />
                <span>780-555-0123</span>
              </a>
              <a href="mailto:info@albertacleanpros.com" className="flex items-center space-x-2 text-green-400 hover:text-green-300">
                <Mail className="w-5 h-5" />
                <span>info@albertacleanpros.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Business Hours</span>
            </h4>
            <ul className="space-y-2">
              {businessHours.map((hour) => (
                <li key={hour.day} className="text-gray-300 flex justify-between">
                  <span>{hour.day}</span>
                  <span className="font-medium">{hour.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-green-400 mt-4">Serving All of Alberta</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Alberta Clean Pros. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made by <a href="https://www.raghv.dev" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Raghav Mahajan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;