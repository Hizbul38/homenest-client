import React from 'react';

const PopularCities = () => {
    const cities = ["Dhaka", "Chattogram", "Sylhet", "Khulna"];
    return (
        <div>
             <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Cities</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {cities.map(city => (
          <div key={city} className="card bg-base-100 shadow hover:shadow-xl transition">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">{city}</h3>
              <p>Find premium homes and apartments in {city}.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default PopularCities;