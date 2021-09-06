import React from 'react';
import './Form.sass';
import Button from "../button/Button";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var submitEnabled = this.props.submitEnabled;
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="input-email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" disabled={this.props.submitting}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" disabled={this.props.submitting}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember-me" disabled={this.props.submitting}/>
                    <label htmlFor="input-remember-me" className="form-check-label">Rememeber Me</label>
                </div>
                <Button value={this.props.submitting && "Submitting" || "Submit"} type="submit" loading={this.props.submitting} disabled={!submitEnabled}/>
            </form>
        );
    }
}

export default Form;
