import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-base-200 py-10 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">HomeNest</h2>
        <p>Email: contact@homenest.com | Phone: +880 1234 567890</p>
        <p className="mt-2 text-sm">© 2025 HomeNest. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;