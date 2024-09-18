import React from "react";
import navLogo from "../assets/Group 9283 (1).svg";
import OffCanvass from "../lib/OffCanvass";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <img src={navLogo} alt="nav-logo" />
          <h2 className="d-none d-lg-block">Perfume House</h2>
        </div>

        <div className="d-none d-md-flex gap-4 ">
          <button className="login-btn"> <Link className="text-decoration-none" to="/auth/signin">Log in</Link> 
            
          </button>
          <button className="sign-up-btn"><Link className="text-decoration-none sign-up-btn" to="/auth/signup">Sign up</Link></button>
          
        </div>
          <div className="d-md-none">
            {["top"].map((placement, idx) => (
              <OffCanvass key={idx} placement={placement} name={placement} />
            ))}
          </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
