import React from 'react';

const ChooseUs = () => {
    return (
        <div>
            <section className="bg-base-200 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold text-lg mb-2">Trusted Listings</h3>
          <p>We verify every property to ensure reliability and transparency.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
          <p>Our platform is user-friendly and accessible on all devices.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-bold text-lg mb-2">Expert Support</h3>
          <p>Our support team is available 24/7 to help with your property needs.</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ChooseUs;