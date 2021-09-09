import React from 'react';
import './Alert.sass';

class Alert extends React.Component {

    render() {
        var alertTypeClass;
        switch(this.props.type) {
            case 'success':
                alertTypeClass = 'alert-success';
                break;
            case 'error':
                alertTypeClass = 'alert-danger';
                break;
            case 'warning':
                alertTypeClass = 'alert-warning';
                break;
            default:
                alertTypeClass = 'alert-info';
                break;
        }

        return (
            <div className={"alert " + alertTypeClass} role="alert">
                {this.props.message}
            </div>
        );
    }
}

export default Alert;
