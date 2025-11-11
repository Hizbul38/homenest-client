import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // ✅ react-router-dom use করতে হবে
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth"; // ✅ Firebase profile update

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // ✅ Step 1: Create user in Firebase
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ Step 2: Update user profile (name + photo)
        updateProfile(user, {
          displayName: name,
          photoURL: photo || "https://i.ibb.co/3y6n0qj/default-user.jpg", // fallback photo
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            console.log("Profile updated successfully ✅");

            // ✅ Step 3: Redirect user to homepage
            navigate("/");
          })
          .catch((error) => {
            console.error("Profile update failed ❌", error);
          });
      })
      .catch((error) => {
        console.error("Registration failed ❌", error.message);
        alert(error.message);
      });
  };

  // ✅ Optional: Google register/login
  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-2">
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

            {/* Register button */}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            {/* Google Register button */}
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="btn mt-4 flex items-center gap-2 justify-center"
            >
              <FcGoogle className="w-[18px] h-[18px]" /> Register with Google
            </button>

            {/* Already registered */}
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
