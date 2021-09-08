import React from 'react';
import './Login.sass';
import Button from "../simple/button/Button";
import Alert from "../simple/alert/Alert";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let alert;
        if (this.props.errorMessage) {
            alert = (
                <Alert type="error" message={this.props.errorMessage}/>
            )
        } else if (this.props.successMessage) {
            alert = (
                <Alert type="success" message={this.props.successMessage}/>
            )
        }

        return (
            <div className="LoginWrapper">
                <h2>Login</h2>
                {alert}
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
                    <Button value={this.props.submitting && "Submitting" || "Submit"} type="submit" loading={this.props.submitting} disabled={this.props.submitDisabled}/>
                </form>
            </div>
        );
    }
}

export default Login;
