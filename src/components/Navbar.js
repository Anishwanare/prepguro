import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div
      className="flex flex-row md:flex-row justify-between items-center h-20 uppercase px-10 fixed top-0  w-full z-20 bg-fuchsia-700"
    >
      <div className="md:mb-0 text-white">
        <Link to={"/"}>
          <img src={logo} alt="" srcSet="" className="w-20 md:w-24"/>
        </Link>
      </div>
      <div className="flex items-center justify-between text-4xl">
        <div
          className={`flex items-center justify-between pointer md:hidden`}
          onClick={onClickMenu}
        >
          {menu ? <RxCross1 /> : <BiMenu />}
        </div>
        <div
          className={`relative ${
            menu ? "block" : "hidden"
          } md:flex mt-4 md:mt-0 md:relative`}
        >
          <ul
            className={`flex flex-col whitespace-nowrap md:flex-row gap-8 md:gap-10 text-lg md:text-2xl md:right-0 text-white md:static  absolute top-8 -right-10 px-10 py-5 z-0 bg-fuchsia-700`}
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/course"}>Course</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className=" p-2 rounded-xl border-purple-700" style={{border:"3px solid"}}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/signup"}
                className="bg-purple-800 text-white p-2 rounded-xl border border-white"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
