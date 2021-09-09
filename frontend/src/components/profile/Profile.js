import React from 'react';
import './Profile.sass';

class Profile extends React.Component {

    render() {
        return (
            <div className="ProfileWrapper">
                <h2>Profile</h2>
                <p>Data for user: {this.props.user || "Unknown"}</p>
            </div>
        );
    }
}

export default Profile;
