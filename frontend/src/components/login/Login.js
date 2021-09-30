import React from 'react';
import './Login.sass';
import SubmitButton from "../simple/button/SubmitButton";
import Alert from "../simple/alert/Alert";
import FormField from '../simple/form/FormField';
import { isBlank } from '../../common/string';
import { jsonString } from '../../common/json';
import { setUser } from '../../common/authentication';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title || 'Login';
        this.submitUrl = this.props.submitUrl || '/api/auth/login';
        this.state = props.state || {
            data: {
                email: new FormField(''),
                password: new FormField(''),
                rememberMe: new FormField(false)
            },
            submitting: false,
            alert: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        console.debug(`Handling event: ${event.type} ${event.target.name} (${event.target.type}) = ${event.target.value} ${event.target.checked}`);
        let targetName = event.target.name;
        let targetValue = ['checkbox', 'radio'].includes(event.target.type) ? event.target.checked : event.target.value;
        this.cleanDataValidation(targetName);
        this.updateDataValue(targetName, targetValue);
        console.debug(`State is: ${jsonString(this.state)}`);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.debug(`Handling event: ${event.type} ${event.target.name}`);
        if (this.validateData(this.state.data)) {
            let body = {};
            Object.entries(this.state.data).forEach(function([k, v]) {
                body[k] = v.value;
            });
            this.sendData('POST', this.submitUrl, body).then(response => {
                setUser(response.user);
                window.location.href = '/';
            });
        } else {
            this.setState({'alert': {'type': 'warning', 'message': 'Some fields are not valid'}});
        }
    }

    render() {
        let alert;
        if (this.state.alert) {
            alert = (
                <Alert type={this.state.alert.type} message={this.state.alert.message}/>
            )
        }

        return (
            <div className="LoginWrapper">
                <h2>{this.title}</h2>
                {alert}
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="input-email" className="form-label">Email</label>
                        <input id="input-email" type="email" name="email" className={"form-control " + this.getFieldValidationClassNames('email')} placeholder="me@myself.com" value={this.state.data.email.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.email.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-password" className="form-label">Password</label>
                        <input id="input-password" type="password" name="password" className={"form-control " + this.getFieldValidationClassNames('password')} placeholder="password" value={this.state.data.password.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.password.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3 form-check form-switch">
                        <input id="input-remember-me" type="checkbox" name="rememberMe" className={"form-check-input " + this.getFieldValidationClassNames('rememberMe')} checked={this.state.data.rememberMe.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <label htmlFor="input-remember-me" className="form-check-label">Remember Me</label>
                        <div className="invalid-feedback">
                            {this.state.data.rememberMe.errorMessage}
                        </div>
                    </div>
                    <SubmitButton submitting={this.state.submitting}/>
                </form>
            </div>
        );
    }

    updateDataValue(name, value) {
        const { data } = { ...this.state };
        data[name].value = value;
        this.setState({'data': data});
    }

    validateData(data) {
        console.log(`Validating data: ${jsonString(data)}`);
        let errors = 0;
        this.validateEmail(data.email, data) || errors++;
        this.validatePassword(data.password, data) || errors++;
        this.validateRememberMe(data.rememberMe, data) || errors++;
        console.log(`State after validation: ${jsonString(this.state)}`);
        return errors === 0;
    }

    async sendData(method, url, data) {
        console.log(`Sending request to ${method} ${url} with body: ${jsonString(data)}`);
        this.setState({'submitting': true});
        return await fetch(url, {
            method: method,
            body: jsonString(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => {
                console.log(`Response from ${method} ${url}: ${jsonString(response)}`);
                let alertType = this.getAlertTypeFromResponseStatus(response.status);
                let alertMessage = response.message;
                this.setState({'alert': {'type': alertType, 'message': alertMessage}});
                return response;
            }).catch(error => {
                console.log(`Error from ${method} ${url}: ${error.message}`);
                let alertType = 'error';
                let alertMessage = error.message;
                this.setState({'alert': {'type': alertType, 'message': alertMessage}});
            }).finally(() => {
                this.setState({'submitting': false});
            });
    }

    validateEmail(field, data) {
        if (isBlank(field.value)) {
            console.log(`email is invalid: ${field.value}`);
            field.setInvalid(`email must not be empty`);
            return false;
        }
        field.setValid();
        return true;
    }

    validatePassword(field, data) {
        if (isBlank(field.value)) {
            console.log(`password is invalid: ${field.value}`);
            field.setInvalid(`password must not be empty`);
            return false;
        }
        field.setValid();
        return true;
    }

    validateRememberMe(field, data) {
        field.setValid();
        return true;
    }

    cleanDataValidation(field) {
        const { data } = { ...this.state };
        data[field].cleanValidation();
        this.setState({'data': data});
    }

    getFieldValidationClassNames(field) {
        switch(this.state.data[field].isValid) {
            case true: return 'is-valid';
            case false: return 'is-invalid';
            default: return '';
        }
    }

    getAlertTypeFromResponseStatus(status) {
        if (status >= 200 && status < 300) {
            return 'success';
        } else if (status >= 400 && status < 500) {
            return 'warning';
        } else if (status >= 500 && status < 600) {
            return 'error';
        } else {
            return 'info';
        }
    }
}

export default Login;
