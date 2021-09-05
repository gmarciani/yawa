import React from 'react';
import './Button.sass';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" className="btn btn-outline-primary">{this.props.value}</button>
        );
    }
}

export default Button;
