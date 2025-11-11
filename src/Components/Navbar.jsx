import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user1.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    LogOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary text-white"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary text-white"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#0b1c48] sticky top-0 z-50 px-5">
      {/* Left section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2 shadow gap-1"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" btn-ghost text-xl font-bold text-white">
          🏡 HomeNest
        </Link>
      </div>

      {/* Center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{navLinks}</ul>
      </div>

      {/* Right section */}
      <div className="navbar-end relative flex items-center gap-1">
        {user ? (
          <div className="relative">
            {/* ✅ Show logged in user photo */}
            <img
              src={user.photoURL || userIcon}
              alt="User"
              className="w-[45px] h-[45px] rounded-full border cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              title={user.displayName || user.email}
            />
            {/* Dropdown */}
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-3 w-56 bg-white border rounded-lg shadow-lg p-4 z-50"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <p className="font-semibold text-gray-800">
                  {user.displayName || "Anonymous User"}
                </p>
                <p className="text-sm text-gray-500 mb-3">{user.email}</p>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-error text-white w-full"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* ✅ Default user icon + Login/Register */}
            <img
              src={userIcon}
              alt="Default User"
              className="w-[65px] h-[40px]"
            />
            <Link
              to="/auth/login"
              className="text-white hover:text-[#f72585] hover:font-bold"
            >
              Login
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              to="/auth/register"
              className="hover:text-[#f72585] text-white hover:font-bold"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
