import React from 'react';
import './Navbar.sass';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menuItemProfile = (
            <a className="nav-item nav-link" href="#">{this.props.user}</a>
        );
        return (
            <div className="NavbarWrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Yawa</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {this.props.user && menuItemProfile}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
