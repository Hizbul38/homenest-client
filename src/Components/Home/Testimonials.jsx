import React from 'react';

const Testimonials = () => {
    const reviews = [
    {
      id: 1,
      text: "HomeNest helped me find my dream apartment in just two days. Amazing service!",
      author: "— Sarah Rahman",
    },
    {
      id: 2,
      text: "The interface is clean and easy to navigate. Highly recommended!",
      author: "— Kamal Hasan",
    },
  ];
    return (
        <div>
            <section className="bg-base-200 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded shadow">
            <p>{r.text}</p>
            <p className="mt-3 font-bold">{r.author}</p>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Testimonials;