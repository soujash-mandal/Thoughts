import { SignOutButton, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <h3 className="navbar_brand">Thoughts</h3>
        <ul className="navbar_items">
          <li className="navbar_item">
            <Link to="/" className="navbar_link">Home</Link>
          </li>
          <li className="navbar_item">
            <Link to="/trending" className="navbar_link">Trending</Link>
          </li>
          <li className="navbar_item">
            <Link to="/user" className="navbar_link">Groups</Link>
          </li>
          <li className="navbar_item">
            <Link to="/dms" className="navbar_link">Direct Messages</Link>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
