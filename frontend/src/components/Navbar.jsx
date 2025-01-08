import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import profile from "../assets/home-page-images/profile.jpeg"

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact us", link: "/contact" },
];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;

  const navLinkStyle = "capitalize link_hover";
  return (
    <div className="border-b border-b-gray-300  sticky z-10 top-12 bg-white">
      <div className="h-[85px] flex justify-between items-center text-center container-x pt-5">
        <h1 className="font-bold text-2xl">Exclusive</h1>
        <ul className="hidden lg:flex gap-10 font-normal ">
          {links.map((item, i) => {
            return (
              <li className="link_hover" key={i}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
          {!isLoggedIn ? (
            <li className="link_hover">
              <Link to="/Signup">Sign Up</Link>
            </li>
          ) : null}
        </ul>
        {!isHamburgerOpen && (
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="text-3xl lg:hidden order-3"
          >
            <IoMenu />
          </button>
        )}
        {isHamburgerOpen && (
          <div className="bg-white fixed h-[100%] w-[350px] z-10 top-0 right-0 pt-[105px] box-shadow border-l border-l-gray-100 shadow-xl	">
            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              className="text-3xl lg:hidden relative"
            >
              <IoIosClose className="text-3xl absolute left-24 -top-8" />
            </button>

            <ul className=" flex flex-col gap-4 text-start ">
              {links.map((item, i) => {
                return (
                  <li className="border-b border-b-gray-300 pb-3 " key={i}>
                    <Link className="pl-6 hover:text-primary" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {!isLoggedIn ? (
                <li className="border-b border-b-gray-300 pb-3">
                  <Link className="pl-6 hover:text-primary" to="/signup">
                    Sign Up
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        )}
        <div className="flex bg-secondary color-black w-40 md:w-60 md:h-9 justify-around items-center  text-sm rounded px-4">
          <input
            type="search"
            className="nav_input bg-transparent outline-none w-full"
            placeholder="What are you looking for?"
          />
          <CiSearch className="ml-3 text-2xl cursor-pointer" />
        </div>
        <div className="icons center text-2xl flex gap-4 right-9 left-10">
          <IoMdHeartEmpty className="text-2xl cursor-pointer" />
          <IoCartOutline className="text-2xl cursor-pointer" />

          <div className="h-8 w-8 text-4xl bg-white rounded-full cursor-pointer overflow-hidden text-primary flex">
            {isLoggedIn ? <img src={profile} alt="" /> : <FaRegUser />}
          </div>
        </div>
      </div>
    </div>
  );
}
