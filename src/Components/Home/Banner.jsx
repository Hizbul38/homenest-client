import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co.com/jk9Krk0K/ed1e94483f042c61f00d0ac4998192f5.jpg" className="w-full h-[450px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Home</h1>
            <p>Browse thousands of properties to buy, rent, or sell with ease.</p>
          </div>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co.com/rKJPMTsJ/1953a1a241ccbceeb9db24c549af5106.jpg" className="w-full h-[450px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Your Perfect Place Awaits</h1>
            <p>Discover homes and apartments in the best locations.</p>
          </div>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co.com/qYznf2Xv/cc540b8c4c7539ee8c7ed2cbaa3612c2.jpg" className="w-full h-[450px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Buy or Sell with Confidence</h1>
            <p>Trusted by thousands of homeowners and agents worldwide.</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;