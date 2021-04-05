import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
    <header>
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Michael Burkett</span>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header