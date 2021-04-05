import React from "react";
import { Link } from "react-router-dom";

function Header() {
    <header>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Michael Burkett</span>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link class="nav-link" href="#">About Me</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="portfolio.html">Portfolio</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="contact.html">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header