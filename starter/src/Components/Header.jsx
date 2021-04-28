import React from 'react';
import logo from './images/qalogo.svg';

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-sm">
                    <a class="navbar-brand" href="https://qa.com" target="_blank" rel="noreferrer">
                    <img alt="QA Ltd" src={logo} width="100" />
                    </a>
                    <a href="/" class="navbar-brand">Todo App</a>
                </nav>
            </header>
        </>
    );
}

export default Header;