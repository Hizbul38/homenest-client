import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password))
      return Swal.fire("Error", "Must have an uppercase letter", "error");
    if (!/(?=.*[a-z])/.test(password))
      return Swal.fire("Error", "Must have a lowercase letter", "error");
    if (password.length < 6)
      return Swal.fire("Error", "Must be at least 6 characters long", "error");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo || "https://i.ibb.co/3y6n0qj/default-user.jpg",
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire("Success!", "Registration Successful!", "success");
          navigate(from, { replace: true }); // ✅ Redirect to desired route
        });
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire("Success!", "Logged in with Google!", "success");
        navigate(from, { replace: true }); // ✅ Redirect to desired route
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center mb-2">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input input-bordered" required />
            <label className="label">Photo URL</label>
            <input name="photo" type="text" className="input input-bordered" />
            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered" required />
            <label className="label">Password</label>
            <input name="password" type="password" className="input input-bordered" required />
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <button
              type="button"
              onClick={handleGoogleRegister}
              className="btn mt-4 flex items-center gap-2 justify-center"
            >
              <FcGoogle className="w-[18px] h-[18px]" /> Register with Google
            </button>
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
