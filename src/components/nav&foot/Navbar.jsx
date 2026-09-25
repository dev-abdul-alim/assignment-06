import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import logo from '../../../public/logo.png'



const Navbar = () => {

  const links = (
    <>
        <li>
          <Link href={''}>Workouts</Link>
        </li>

        <li>
          <Link href={''}>My Plan</Link>
        </li>
    </>
  );


  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className='flex items-center justify-center gap-[-5]'>
          <Image src={logo} alt={logo} className="w-5 h-5 font-extrabold" />
          <a className="btn btn-ghost text-xl">FITLOG</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Plan</a>
        <a className="btn">Saved</a>
      </div>
    </div>
  );
}

export default Navbar
