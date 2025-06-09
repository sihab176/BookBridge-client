import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/test-removebg-preview.png";
import "./nav.css"
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  console.log(user);


  const handleLogOut = () => {
    logOutUser();
  };

  //theme
  const swichTheme = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/bookShelf">BookShelf</NavLink>
      <NavLink to="/addBook">Add Book</NavLink>
      <NavLink to="/myBook">My Book</NavLink>
    </>
  );
  return (
    <nav className="sticky top-0 z-10 ">
      <div className={`navbar md:px-16  bg-base-100   `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden bg-gray-500 mr-4 text-green-400"
            >
              <svg
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="lg:w-14 w-10    lg:block hidden"
              src={Logo}
              alt=""
            />
            <i className="text-2xl font-bold text-gray-400 flex">
              <span className="text-blue-400">Book</span>
              <span className="lg:block hidden">Bridge</span>
            </i>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-semibold gap-7 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* toggle buttons */}
          <div className="">
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800"
            >
              <span className="relative">
                <input
                  id="Toggle1"
                  onChange={swichTheme}
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
              </span>
            </label>
          </div>
          {/* user img */}
          <div>
            {user && (
              <div
                data-tooltip-id="my-tooltip"
                className="container cursor-pointer"
              >
                <img
                  className={`lg:w-12 lg:h-12 md:-10  w-8 rounded-full ring-2 ring-offset-4 hover:${"hello"}`}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            )}
          </div>

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn border-2  px-3 btn-sm bg-blue-400"
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="btn border-2  px-3  btn-sm bg-blue-400 ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      {/* <ReactTooltip
        id="my-tooltip"
        place="bottom"
        content={user?.displayName}
      /> */}
    </nav>
  );
};

export default Navbar;
