import React from 'react';
import './Navbar.sass';
import logo from './logo.svg';

class Navbar extends React.Component {

    render() {
        let menuItemProfile = (
            <a className="nav-item nav-link" href="#">{this.props.user}</a>
        );

        let menuItemLogin = (
            <a className="nav-item nav-link" href="#">Login</a>
        );

        let menuItemSignup = (
            <a className="nav-item nav-link" href="#">Signup</a>
        );

        return (
            <div className="NavbarWrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>Yawa</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {this.props.user && menuItemProfile}
                            {!this.props.user && menuItemLogin}
                            {!this.props.user && menuItemSignup}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
