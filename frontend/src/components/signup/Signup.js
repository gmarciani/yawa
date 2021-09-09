import React from 'react';
import './Signup.sass';
import Button from "../simple/button/Button";
import Alert from "../simple/alert/Alert";
import FormField from '../simple/form/FormField';
import { isBlank } from '../../common/string';
import { jsonString } from '../../common/json';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title || 'Signup';
        this.state = props.state || {
            data: {
                firstname: new FormField(''),
                lastname: new FormField(''),
                email: new FormField(''),
                password: new FormField('')
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
            this.sendData('POST', '/signup', this.state.data);
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
            <div className="SignupWrapper">
                <h2>{this.title}</h2>
                {alert}
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="input-firstname" className="form-label">Firstname</label>
                        <input id="input-firstname" type="text" name="firstname" className={"form-control " + this.getFieldValidationClassNames('firstname')} placeholder="Firstname" value={this.state.data.firstname.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.firstname.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-lastname" className="form-label">Lastname</label>
                        <input id="input-lastname" type="text" name="lastname" className={"form-control " + this.getFieldValidationClassNames('lastname')} placeholder="Lastname" value={this.state.data.lastname.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.lastname.errorMessage}
                        </div>
                    </div>
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
                    <Button value={(this.state.submitting && "Submitting") || "Submit"} type="submit" loading={this.state.submitting}/>
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
        this.validateFirstname(data.firstname, data) || errors++;
        this.validateLastname(data.lastname, data) || errors++;
        this.validateEmail(data.email, data) || errors++;
        this.validatePassword(data.password, data) || errors++;
        console.log(`State after validation: ${jsonString(this.state)}`);
        return errors === 0;
    }

    sendData(method, url, data) {
        console.log(`Sending request to ${method} ${url} with body: ${jsonString(data)}`);
        this.setState({'submitting': true});
        return fetch(url, {
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
            }).catch(error => {
                console.log(`Error from ${method} ${url}: ${error.message}`);
                let alertType = 'error';
                let alertMessage = error.message;
                this.setState({'alert': {'type': alertType, 'message': alertMessage}});
            }).finally(() => {
                this.setState({'submitting': false});
            });
    }

    validateFirstname(field, data) {
        if (isBlank(field.value)) {
            console.log(`firstname is invalid: ${field.value}`);
            field.setInvalid(`firstname must not be empty`);
            return false;
        }
        field.setValid();
        return true;
    }

    validateLastname(field, data) {
        if (isBlank(field.value)) {
            console.log(`lastname is invalid: ${field.value}`);
            field.setInvalid(`lastname must not be empty`);
            return false;
        }
        field.setValid();
        return true;
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

export default Signup;
