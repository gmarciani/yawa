import React from 'react';
import './Button.sass';

class Button extends React.Component {

    render() {
        return (
            <button type={this.props.type || 'button'} className="btn btn-outline-primary" disabled={this.props.disabled || this.props.loading}>
                {this.props.loading && (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>)}
                {this.props.value}
            </button>
        );
    }
}

export default Button;
