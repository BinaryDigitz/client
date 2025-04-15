import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import AppContext from "../context/AppContext";

function Navbar() {
  const { navigate, Link, user, setShowLogin } = useContext(AppContext);

  return (
    <nav className="flex items-center justify-between py-5">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
      <div>
        {user ? (
          <div
            onClick={() => navigate("/credit")}
            className="flex items-center gap-2 sm:gap-3"
          >
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 trans">
              <img src={assets.credit_star} alt="start" className="w-5" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">
                Credit Left: 40
              </span>
            </button>
            <p className="max-sm:hidden pl-4 text-gray-600">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="user"
                className="w-10 drop-shadow"
              />
              <ul className="absolute w-24 hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <li className="m-0 p-2 bg-white rounded-md border text-sm">
                  <Link>Log out</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center sm:gap-5">
            <p onClick={() => navigate("/credit")} className="cursor-pointer">
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 cursor-pointer hover:bg-zinc-600 trans text-white px-7 py-2 sm:px-10 text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
