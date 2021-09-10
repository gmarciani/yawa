import React from 'react';
import { rest } from 'msw';
import Login from "./Login";
import FormField from "../simple/form/FormField";

export default {
    component: Login,
    title: 'Login',
    parameters: {
        msw: [
            rest.post('/api/auth/login', (req, res, ctx) => {
                return res(
                    ctx.json({
                        status: 200,
                        message: 'Successfully logged in',
                        token: 'aToken'
                    })
                );
            }),
        ]
    }
};

const Template = args => <Login {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const FilledRememberMe = Template.bind({});
FilledRememberMe.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(true)
        }
    }
};

export const FilledNotRememberMe = Template.bind({});
FilledNotRememberMe.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(false)
        }
    }
};

export const FilledValidSuccess = Template.bind({});
FilledValidSuccess.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            rememberMe: new FormField(true, true)
        }
    }
};
FilledValidSuccess.parameters = {
    msw: [
        rest.post('/api/auth/login', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'Successfully logged in',
                    token: 'aToken'
                })
            );
        }),
    ]
}

export const FilledValidClientError = Template.bind({});
FilledValidClientError.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            rememberMe: new FormField(true, true)
        }
    }
};
FilledValidClientError.parameters = {
    msw: [
        rest.post('/api/auth/login', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 400,
                    message: 'A warning message from the server: client error'
                })
            );
        }),
    ],
}

export const FilledValidInternalError = Template.bind({});
FilledValidInternalError.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            rememberMe: new FormField(true, true)
        }
    }
};
FilledValidInternalError.parameters = {
    msw: [
        rest.post('/api/auth/login', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 500,
                    message: 'An error message from the server: internal error'
                })
            );
        }),
    ],
}

export const FilledInvalidEmail = Template.bind({});
FilledInvalidEmail.args = {
    state: {
        data: {
            email: new FormField('', false, 'Email is not valid'),
            password: new FormField('abc', true),
            rememberMe: new FormField(true, true)
        }
    }
};

export const FilledInvalidPassword = Template.bind({});
FilledInvalidPassword.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com', true),
            password: new FormField('', false, 'Password is not valid'),
            rememberMe: new FormField(true, true)
        }
    }
};

export const Submitting = Template.bind({});
Submitting.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(true)
        },
        submitting: true
    }
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(true)
        },
        alert: {
            type: 'success',
            message: 'A success message related to this form'
        }
    }
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(true)
        },
        alert: {
            type: 'warning',
            message: 'A warning message related to this form'
        }
    }
};

export const AlertError = Template.bind({});
AlertError.args = {
    state: {
        data: {
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            rememberMe: new FormField(true)
        },
        alert: {
            type: 'error',
            message: 'An error message related to this form'
        }
    }
};
