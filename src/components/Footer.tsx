import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

const PolicyModal = ({ isOpen, onClose, title, children }: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  <p>Erf 1190, Rundu, Namibia</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-red-600" />
                  <a href="tel:+264811405668">+264 81 140 5668</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-red-600" />
                  <a href="mailto:bookings.urbanfarmhaus@gmail.com">
                    bookings.urbanfarmhaus@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}>
                    Our Rooms
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}>
                    Facilities
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-red-600 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('terms')}
                    className="hover:text-red-600 transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('cookies')}
                    className="hover:text-red-600 transition-colors"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveModal('disclaimer')}
                    className="hover:text-red-600 transition-colors"
                  >
                    Legal Disclaimer
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <p className="text-sm text-gray-400 text-center">
              © {currentYear} Urban Farm Haus. All rights reserved.
            </p>
          </div>
        </div>

        {/* Cookie Consent Banner */}
        {showCookieConsent && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-40">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm mb-4 md:mb-0">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleCookieConsent}
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => setShowCookieConsent(false)}
                    className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </footer>

      {/* Policy Modals */}
      <PolicyModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
      >
        <div className="prose max-w-none">
          <p>
            Urban Farm Haus is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
            and safeguard your personal information when you visit our website or use our services.
          </p>
          <h3>Information We Collect</h3>
          <p>We collect information that you provide directly to us, including but not limited to:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Booking and payment details</li>
            <li>Communication preferences</li>
            <li>Feedback and correspondence</li>
          </ul>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
      >
        <div className="prose max-w-none">
          <p>
            By accessing or using Urban Farm Haus's website and services, you agree to be bound by these Terms of Service.
          </p>
          <h3>Booking and Cancellation</h3>
          <p>
            All bookings are subject to availability and confirmation. Cancellation policies apply as specified during 
            the booking process.
          </p>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={activeModal === 'cookies'}
        onClose={() => setActiveModal(null)}
        title="Cookie Policy"
      >
        <div className="prose max-w-none">
          <p>
            We use cookies to enhance your browsing experience and analyze website traffic. By using our website, 
            you consent to our use of cookies in accordance with this Cookie Policy.
          </p>
          <h3>Types of Cookies We Use</h3>
          <ul>
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to improve our service</li>
            <li>Preference cookies to remember your settings</li>
          </ul>
        </div>
      </PolicyModal>

      <PolicyModal
        isOpen={activeModal === 'disclaimer'}
        onClose={() => setActiveModal(null)}
        title="Legal Disclaimer"
      >
        <div className="prose max-w-none">
          <p>
            The information provided on this website is for general informational purposes only. While we strive 
            to keep the information up to date and correct, we make no representations or warranties of any kind, 
            express or implied, about the completeness, accuracy, reliability, suitability, or availability of 
            the website or the information, products, services, or related graphics contained on the website.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            Urban Farm Haus shall not be liable for any direct, indirect, incidental, consequential, or punitive 
            damages arising out of your access to or use of the website.
          </p>
        </div>
      </PolicyModal>
    </>
  );
};

export default Footer;