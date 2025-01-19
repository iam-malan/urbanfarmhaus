import React from 'react';

const Legal = () => {
  return (
    <div className="bg-white">
      {/* Privacy Policy */}
      <section id="privacy" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Privacy Policy</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Urban Farm Haus is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
              and safeguard your personal information when you visit our website or use our services.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h3>
            <p className="mb-4">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Booking and payment details</li>
              <li>Communication preferences</li>
              <li>Feedback and correspondence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Terms of Service</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              By accessing or using Urban Farm Haus's website and services, you agree to be bound by these Terms of Service.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Booking and Cancellation</h3>
            <p className="mb-4">
              All bookings are subject to availability and confirmation. Cancellation policies apply as specified during the booking process.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cookie Policy</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              We use cookies to enhance your browsing experience and analyze website traffic. By using our website, 
              you consent to our use of cookies in accordance with this Cookie Policy.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to improve our service</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section id="disclaimer" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Legal Disclaimer</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              The information provided on this website is for general informational purposes only. While we strive 
              to keep the information up to date and correct, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of 
              the website or the information, products, services, or related graphics contained on the website.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Limitation of Liability</h3>
            <p className="mb-4">
              Urban Farm Haus shall not be liable for any direct, indirect, incidental, consequential, or punitive 
              damages arising out of your access to or use of the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;