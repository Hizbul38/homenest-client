import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire("Success!", "Logged in successfully!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire("Success!", "Logged in with Google!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => Swal.fire("Error", error.message, "error"));
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />

            <button type="submit" className="btn btn-neutral mt-4">Login</button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn mt-4 flex items-center gap-2 justify-center"
            >
              <FcGoogle className="w-[18px] h-[18px]" /> Login with Google
            </button>

            <p className="font-semibold text-center mt-5">
              Don’t have an account?{" "}
              <Link className="text-pink-700" to="/auth/register">
                Register here
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
