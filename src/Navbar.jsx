import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);
    const [location] = useLocation();

    return <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f3ede2' }}>
            <div className="container">
                <a className="navbar-brand fw-bold text-uppercase" href="#" style={{ letterSpacing: '1px' }}>
                    <img
                        src="/images/omo_logo.png"
                        alt="OMO Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-text-top me-2"
                    />
                    OMO</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => {
                        setShowNavBar(!showNavBar);
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showNavBar ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/products" ? "active" : ""}`} href="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/register" ? "active" : ""}`} href="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/profile" ? "active" : ""}`} href="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/login" ? "active" : ""}`} href="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}