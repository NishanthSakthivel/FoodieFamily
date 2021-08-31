import React from "react";
import {Link} from 'react-router-dom';
import BrandImg from "../Assets/Brand.png";
const NavBardBootstrap = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                contact
              </Link>
            </li>
          </ul>
          <Link class="navbar-brand" to="/">
            <img
              className="text-alignt-start"
              src={BrandImg}
              alt="brand_img"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBardBootstrap;
