import { Link } from "react-router-dom";
import logo from "./Media/Images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-white fixed-top"
        style={{ borderBottom: "1px solid #e0e0e0", height: "70px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                height: "17px",
                width: "auto",
                position: "relative",
                left: "190px",
                bottom: "3px",
              }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto"
              style={{
                position: "relative",
                right: "160px",
                gap: "30px",
                fontSize: "14px",
                top: "8px",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link disabled"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon"></span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
