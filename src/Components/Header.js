import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">Michael Burkett </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <header className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">  About Me  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Projects">  Projects  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">  Contact  </Link>
                    </li>
                </ul>
            </header>
        </nav>
    )
}

export default Header