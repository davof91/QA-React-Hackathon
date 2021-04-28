import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import PropTypes from 'prop-types';

const Header = (props) => {
    const [currentPage, setPage] = useState("Home");
    const home = () => {
        console.log("Home");
        props.submitPage("Home")
        
    }
    const schedule = () => {
        console.log("Schedule");
        props.submitPage("Schedule")
        
    }
    const signUp = () => {
        console.log("Signup");
        props.submitPage("Signup")
        
    }


    return (
        <header className="container sticky-top" id="qa-navbar">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img src="../images/qa.jpeg" alt="logo" width={50} height={50}/></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" onClick={home} className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" onClick={schedule} className="nav-link">Schedule</a></li>
                        <li className="nav-item"><a href="#" onClick={signUp} className="nav-link">Sign-up</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

Header.propTypes = {
    'submitPage': PropTypes.func.isRequired,
    'user':PropTypes.string
};

export default Header;