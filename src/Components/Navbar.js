import { SignOutButton, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        {/* <img src="logo.png" alt="logo" className="navbar_logo"></img> */}
        <h3 className="navbar_brand">THOUGHTS</h3>

        <ul className="navbar_items">
          <li className="navbar_item">
            <Link to="/" className="navbar_link">
              Home
            </Link>
          </li>
          {/* <li className="navbar_item">
            <Link to="/trending" className="navbar_link">Trending</Link>
          </li> */}
          <li className="navbar_item">
            <Link to="/profile" className="navbar_link">
              Profile
            </Link>
          </li>
          {/* <li className="navbar_item">
            <Link to="/dms" className="navbar_link">Direct Messages</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar_right">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
