import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user1.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, LogOut} = use(AuthContext);
  const handleLogOut=()=>{
    console.log('user try to logout')
    LogOut().then(() => {
}).catch((error) => {
  console.log(error);
});
  }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <img className='w-[45px]' src={userIcon} alt="" />
    {user ? (<button onClick={handleLogOut} className='hover:text-[#f72585] hover:font-bold mr-1 text-black'>Logout</button>) : (<Link to='/auth/login' className='hover:text-[#f72585] hover:font-bold mr-2'>Login</Link>)}
    
    {/* /
    <Link to='/auth/register' className='hover:text-[#f72585] hover:font-bold ml-2'>Register</Link> */}
  </div>
</div>
        </div>
    );
};

export default Navbar;