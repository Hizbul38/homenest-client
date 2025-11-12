import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // ✅ Email + Password Registration
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // ✅ Password Validation
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }
    if (!upperCase.test(password)) {
      setError("Password must contain at least one uppercase letter!");
      return;
    }
    if (!lowerCase.test(password)) {
      setError("Password must contain at least one lowercase letter!");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo || "https://i.ibb.co/3y6n0qj/default-user.jpg",
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            Swal.fire({
              title: "Success!",
              text: "Account created successfully 🎉",
              icon: "success",
              confirmButtonText: "OK",
            });
            form.reset();
            navigate("/");
          })
          .catch((error) => {
            console.error("Profile update failed:", error);
          });
      })
      .catch((error) => {
        console.error("Registration failed:", error.message);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  // ✅ Google Registration/Login
  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Welcome!",
          text: "Registered with Google successfully 🎉",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Register Error:", error.message);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center mb-3">
          Register your account
        </h2>

        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered"
              placeholder="Your name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input input-bordered"
              placeholder="Photo URL"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered"
              placeholder="Password"
              required
            />

            {/* Validation Error Message */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            {/* Register Button */}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {/* Google Register Button */}
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="btn mt-4 flex items-center gap-2 justify-center bg-white border text-gray-700 hover:bg-gray-100"
            >
              <FcGoogle className="w-[18px] h-[18px]" /> Register with Google
            </button>

            {/* Already Have Account */}
            <p className="font-semibold text-center mt-5">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-pink-700">
                Login here
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
