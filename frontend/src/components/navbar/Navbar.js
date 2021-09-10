import React from 'react';
import './Navbar.sass';
import logo from './logo.svg';
import { getUser, unsetUser } from '../../common/authentication';

class Navbar extends React.Component {

    render() {
        const user = this.props.user || getUser();

        let menuItemHome = (
            <a className="nav-item nav-link" href="/">Home</a>
        );

        let menuItemProfile = (
            <a className="nav-item nav-link" href="/profile">Profile</a>
        );

        let menuItemSettings = (
            <a className="nav-item nav-link" href="/settings">Settings</a>
        );

        let menuItemLogout = (
            <a className="nav-item nav-link" href="#" onClick={onClickLogout}>Logout</a>
        );

        let menuItemLogin = (
            <a className="nav-item nav-link" href="/login">
                <button className="btn btn-outline-primary" type="submit">Login</button>
            </a>
        );

        let menuItemSignup = (
            <a className="nav-item nav-link" href="/signup">
                <button className="btn btn-success" type="submit">Signup</button>
            </a>
        );

        return (
            <div className="NavbarWrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src={logo} className="d-inline-block align-top" alt=""/>YAWA</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {user && menuItemHome}
                            {user && menuItemProfile}
                            {user && menuItemSettings}
                            {user && menuItemLogout}
                            {!user && menuItemLogin}
                            {!user && menuItemSignup}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

function onClickLogout(event) {
    event.preventDefault();
    console.debug(`Handling event: ${event.type} ${event.target.name} (${event.target.type}) = ${event.target.value} ${event.target.checked}`);
    unsetUser();
    window.location.href = '/';
}

export default Navbar;
