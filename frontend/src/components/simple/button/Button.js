import React from 'react';
import './Button.sass';

class Button extends React.Component {

    render() {
        return (
            <button type={this.props.type || 'button'} className={"btn btn-" + (this.props.category || 'outline-primary')} disabled={this.props.disabled || this.props.loading}>
                {this.props.loading && (<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>)}
                {this.props.label}
            </button>
        );
    }
}

export default Button;
