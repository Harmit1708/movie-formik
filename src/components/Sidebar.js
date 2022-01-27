import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className=" sidebar-brand-icon"></div>
          <Link to="/all-movielist">
            <div className=" h sidebar-brand-text mx-3">All Movies
            </div>
          </Link>
        </a>

        <hr className="sidebar-divider my-0" />

        <hr className="sidebar-divider" />

        {/* <hr className="sidebar-divider" /> */}

        <div className="sidebar-heading">Movie</div>

        {/* All Students */}
        <li className="nav-item">
          <Link to="/all-movielist">
            <a className="nav-link" href="/">
              <span>All MovieList</span>
            </a>
          </Link>
        </li>

        {/* Add Students */}
        <li className="nav-item">
          <Link to="/add-moviedetails">
            <a className="nav-link" href="/">
              <span>Add MovieDetails</span>
            </a>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}

export default Sidebar;
