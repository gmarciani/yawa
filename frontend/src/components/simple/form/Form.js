import React from 'react';
import './Form.sass';
import Button from "../button/Button";
import Alert from "../alert/Alert";
import FormField from './FormField';
import { isBlank } from '../../../common/string';
import { jsonString } from '../../../common/json';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state || {
            data: {
                text: new FormField(''),
                email: new FormField(''),
                password: new FormField(''),
                selectMe: new FormField('option-1'),
                checkMe: new FormField(false),
                radioMe: new FormField(false),
                rangeMe: new FormField(0),
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
            this.sendData('POST', '/submit', this.state.data);
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
            <div className="FormWrapper">
                <h2>{this.props.title || "Form"}</h2>
                {alert}
                <form id="simple-form" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="input-text" className="form-label">Text</label>
                        <input id="input-text" type="text" name="text" className={"form-control " + this.getFieldValidationClassNames('text')}  placeholder="some text" value={this.state.data.text.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.text.errorMessage}
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
                    <div className="mb-3">
                        <label htmlFor="input-select-me" className="form-label">Select Me</label>
                        <select id="input-select-me" name="selectMe" className={"form-select " + this.getFieldValidationClassNames('selectMe')} placeholder="password" value={this.state.data.selectMe.value} disabled={this.state.submitting} onChange={this.handleChange}>
                            <option value="option-1">One</option>
                            <option value="option-2">Two</option>
                            <option value="option-3">Three</option>
                        </select>
                        <div className="invalid-feedback">
                            {this.state.data.selectMe.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3 form-check form-switch">
                        <input id="input-check-me" type="checkbox" name="checkMe" className={"form-check-input " + this.getFieldValidationClassNames('checkMe')} checked={this.state.data.checkMe.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <label htmlFor="input-check-me" className="form-check-label">Check Me</label>
                        <div className="invalid-feedback">
                            {this.state.data.checkMe.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input id="input-radio-me" type="radio" name="radioMe" className={"form-check-input " + this.getFieldValidationClassNames('radioMe')} checked={this.state.data.radioMe.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <label htmlFor="input-radio-me" className="form-check-label">Radio Me</label>
                        <div className="invalid-feedback">
                            {this.state.data.radioMe.errorMessage}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input-range-me" className="form-label">Range Me</label>
                        <input id="input-range-me" type="range" name="rangeMe" className={"form-range " + this.getFieldValidationClassNames('rangeMe')} min="0" max="5" value={this.state.data.rangeMe.value} disabled={this.state.submitting} onChange={this.handleChange}/>
                        <div className="invalid-feedback">
                            {this.state.data.rangeMe.errorMessage}
                        </div>
                    </div>
                    <Button value={this.state.submitting && "Submitting" || "Submit"} type="submit" loading={this.state.submitting}/>
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
        this.validateText(data.text, data) || errors++;
        this.validateEmail(data.email, data) || errors++;
        this.validatePassword(data.password, data) || errors++;
        this.validateSelectMe(data.selectMe, data) || errors++;
        this.validateCheckMe(data.checkMe, data) || errors++;
        this.validateRadioMe(data.radioMe, data) || errors++;
        this.validateRangeMe(data.rangeMe, data) || errors++;
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

    validateText(field, data) {
        if (isBlank(field.value)) {
            console.log(`text is invalid: ${field.value}`);
            field.setInvalid(`text must not be empty`);
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

    validateSelectMe(field, data) {
        if (field.value === 'option-1') {
            console.log(`selectMe is invalid: ${field.value}`);
            field.setInvalid('selectMe must not be option-1');
            return false;
        }
        field.setValid();
        return true;
    }

    validateCheckMe(field, data) {
        if (field.value === false) {
            console.log(`checkMe is invalid: ${field.value}`);
            field.setInvalid('checkMe must be true');
            return false;
        }
        field.setValid();
        return true;
    }

    validateRadioMe(field, data) {
        if (field.value === false) {
            console.log(`radioMe is invalid: ${field.value}`);
            field.setInvalid('radioMe must be true');
            return false;
        }
        field.setValid();
        return true;
    }

    validateRangeMe(field, data) {
        if (field.value <= 2) {
            console.log(`rangeMe is invalid: ${field.value}`);
            field.setInvalid('rangeMe must be greater than 2');
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

export default Form;
