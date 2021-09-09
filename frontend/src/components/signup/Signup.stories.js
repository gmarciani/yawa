import React from 'react';
import { rest } from 'msw';
import Signup from "./Signup";
import FormField from "../simple/form/FormField";

export default {
    component: Signup,
    title: 'Signup',
    parameters: {
        msw: [
            rest.post('/signup', (req, res, ctx) => {
                return res(
                    ctx.json({
                        status: 200,
                        message: 'Successfully signed up',
                        token: 'aToken'
                    })
                );
            }),
        ]
    }
};

const Template = args => <Signup {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const FilledValidSuccess = Template.bind({});
FilledValidSuccess.args = {
    state: {
        data: {
            firstname: new FormField('abc', true),
            lastname: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true)
        }
    }
};
FilledValidSuccess.parameters = {
    msw: [
        rest.post('/signup', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'Successfully signed up',
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
            firstname: new FormField('abc', true),
            lastname: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true)
        }
    }
};
FilledValidClientError.parameters = {
    msw: [
        rest.post('/signup', (req, res, ctx) => {
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
            firstname: new FormField('abc', true),
            lastname: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true)
        }
    }
};
FilledValidInternalError.parameters = {
    msw: [
        rest.post('/signup', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 500,
                    message: 'An error message from the server: internal error'
                })
            );
        }),
    ],
}

export const FilledInvalidFirstname = Template.bind({});
FilledInvalidFirstname.args = {
    state: {
        data: {
            firstname: new FormField('', false, 'Firstname is not valid'),
            lastname: new FormField('abc', true),
            email: new FormField('', true),
            password: new FormField('abc', true)
        }
    }
};

export const FilledInvalidLastname = Template.bind({});
FilledInvalidLastname.args = {
    state: {
        data: {
            firstname: new FormField('abc', true),
            lastname: new FormField('', false, 'Lastname is not valid'),
            email: new FormField('', true),
            password: new FormField('abc', true)
        }
    }
};

export const FilledInvalidEmail = Template.bind({});
FilledInvalidEmail.args = {
    state: {
        data: {
            firstname: new FormField('abc', true),
            lastname: new FormField('abc', true),
            email: new FormField('', false, 'Email is not valid'),
            password: new FormField('abc', true)
        }
    }
};

export const FilledInvalidPassword = Template.bind({});
FilledInvalidPassword.args = {
    state: {
        data: {
            firstname: new FormField('abc', true),
            lastname: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('', false, 'Password is not valid')
        }
    }
};

export const Submitting = Template.bind({});
Submitting.args = {
    state: {
        data: {
            firstname: new FormField('abc'),
            lastname: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc')
        },
        submitting: true
    }
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    state: {
        data: {
            firstname: new FormField('abc'),
            lastname: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc')
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
            firstname: new FormField('abc'),
            lastname: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc')
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
            firstname: new FormField('abc'),
            lastname: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc')
        },
        alert: {
            type: 'error',
            message: 'An error message related to this form'
        }
    }
};
