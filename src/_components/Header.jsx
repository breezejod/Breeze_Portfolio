import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[10vh] text-neutral-400 bg-zinc-800 relative">
      <div className="absolute top-5 left-7">
        <a href="/">
          <img
            src="https://i.imgur.com/XQk9f3S.png"
            title="My Logo"
            alt="refresh logo"
            className="rounded-full shadow-lg cursor-pointer hover:shadow-xl"
            width="30"
            height="30"
          />
        </a>
      </div>
      <nav>
        <ul className="flex space-x-5">
          <li className="hover:text-white relative after:transition after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white relative after:transition after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-white relative after:transition after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100">
            <Link to="/web">Web</Link>
          </li>
          <li className="hover:text-white relative after:transition after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;

