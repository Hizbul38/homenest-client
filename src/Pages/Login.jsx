import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {signIn}=use(AuthContext);
  const handleLogin=(e)=>{
    e.preventDefault();
    const form= e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email,password})
    signIn(email,password).then((result)=>{
      const user=result.user;
      console.log(user)
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
  }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center bg-base-200'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login your account</h2>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name='email'
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              name='password'
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <button
              type='button'
              className='btn mt-4 flex items-center gap-2 justify-center'
            >
              <FcGoogle className='w-[18px] h-[18px]' /> Login with Google
            </button>

            <p className='font-semibold text-center mt-5'>
              Don't Have An Account?{" "}
              <Link className='text-pink-700' to='/auth/register'>
                Register here
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;