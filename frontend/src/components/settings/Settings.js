import React from 'react';
import './Settings.sass';

class Settings extends React.Component {

    render() {
        return (
            <div className="SettingsWrapper">
                <h2>Settings</h2>
                <p>Data for user: {this.props.user || "Unknown"}</p>
            </div>
        );
    }
}

export default Settings;
