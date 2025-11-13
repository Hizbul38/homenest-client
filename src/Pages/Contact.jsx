import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">

      {/* Heading */}

      <div className="text-center mb-14">
        <p className="uppercase text-sm text-orange-500 font-medium tracking-wide">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mt-2">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have questions or want to schedule a visit? Fill out the form or use the info below to reach our friendly team.
        </p>
      </div>

      {/* Contact Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left Side - Contact Info */}

        <div className="bg-white rounded-3xl shadow-md p-8 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-4 rounded-full text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Our Location</h4>
              <p className="text-gray-600">3064,65 Silver Business Point, Uttran, Surat</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-4 rounded-full text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Phone Number</h4>
              <p className="text-gray-600">+91 78785 35701</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white p-4 rounded-full text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Email Address</h4>
              <p className="text-gray-600">info@lathiyasolutions.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}

        <div className="bg-white rounded-3xl shadow-md p-8">
          <form className="space-y-5">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      
      <div className="mt-20 rounded-3xl overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.960225804308!2d72.84909831424578!3d21.205607985903327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051d33a14b8cd%3A0x2aef1e930963cf37!2sSilver%20Business%20Point!5e0!3m2!1sen!2sin!4v1673625092223!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
