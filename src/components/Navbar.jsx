import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "flowbite";
const Navbar = () => {
  const { userData, setRefresh, refresh } = useContext(UserContext);
  const [token, setToken] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, [refresh]);

  console.log("token", token);
  console.log("nav-user", userData);

  return (
    <div className="navbar bg-secondary shadow-md text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link to="/recentposts">Posts</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            {token ? (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recentposts">Posts</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>

          {token ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {token ? (
          <button
            onClick={() => {
              localStorage.setItem("token", JSON.stringify(false));
              navigateTo("/login");
              setRefresh(!refresh);
            }}
            className=" btn  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
