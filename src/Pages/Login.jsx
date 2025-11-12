import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ Email & Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log('Logged in user:', user);
        form.reset();
        navigate('/'); // redirect to homepage after login
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
  toast: true,
  position: "top-end",
  icon: "error",
  title: "Invalid email or password!",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});
      });
  };

  // ✅ Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log('Google login success:', result.user);
        navigate('/'); // redirect to homepage
      })
      .catch((error) => {
        console.error('Google login error:', error.message);
        alert('Google Login Failed!');
      });
  };

  return (
    <div className='flex justify-center min-h-screen items-center bg-base-200'>
      <div className='card bg-base-100 w-full max-w-sm shadow-2xl py-5'>
        <h2 className='font-semibold text-2xl text-center'>
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className='card-body'>
          <fieldset className='fieldset'>
            {/* Email */}
            <label className='label'>Email</label>
            <input
              name='email'
              type='email'
              className='input'
              placeholder='Email'
              required
            />

            {/* Password */}
            <label className='label'>Password</label>
            <input
              name='password'
              type='password'
              className='input'
              placeholder='Password'
              required
            />

            {/* Login Button */}
            <button type='submit' className='btn btn-neutral mt-4'>
              Login
            </button>

            {/* ✅ Google Login Button */}
            <button
              type='button'
              onClick={handleGoogleLogin}
              className='btn mt-4 flex items-center gap-2 justify-center bg-white border text-gray-700 hover:bg-gray-100'
            >
              <FcGoogle className='w-[20px] h-[20px]' /> Continue with Google
            </button>

            <p className='font-semibold text-center mt-5'>
              Don’t Have an Account?{' '}
              <Link className='text-pink-700' to='/auth/register'>
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
