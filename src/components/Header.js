import React from 'react';
import Logo from './../images/logo.png'

const Header = () => {
    return (
        <header className="app--header">
            <img alt="logo" src={Logo} className="logo" />
            <h1 className="app--title">Rick and Morty</h1>
        </header>
    )
}

export default Header;