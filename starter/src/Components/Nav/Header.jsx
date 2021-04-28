import React from 'react';

const Header = () => {
    return (
        <header className="container sticky-top" id="qa-navbar">
            <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="https://qa.com"><img src="../images/qa.jpeg" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarNav" aria-controls="navBarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" class="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/schedule" class="nav-link">Schedule</a></li>
                    <li className="nav-item"><a href="/signup" class="nav-link">Sign-up</a></li>
                </ul>
            </div>
        </nav>
        </header>
    );
}

export default Header;