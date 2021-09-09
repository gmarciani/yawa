import React from 'react';
import { rest } from 'msw';
import Form from "./Form";
import FormField from "./FormField";

export default {
    component: Form,
    title: 'Form',
    parameters: {
        msw: [
            rest.post('/submit', (req, res, ctx) => {
                return res(
                    ctx.json({
                        status: 200,
                        message: 'A success message from the server'
                    })
                );
            }),
        ],
    }
};

const Template = args => <Form {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
    title: 'A custom title'
};

export const Filled = Template.bind({});
Filled.args = {
    state: {
        data: {
            text: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            selectMe: new FormField('option-2'),
            checkMe: new FormField(true),
            radioMe: new FormField(true),
            rangeMe: new FormField(3)
        }
    }
};

export const FilledValidSuccess = Template.bind({});
FilledValidSuccess.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};
FilledValidSuccess.parameters = {
    msw: [
        rest.post('/submit', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 200,
                    message: 'A success message from the server'
                })
            );
        }),
    ],
}

export const FilledValidClientError = Template.bind({});
FilledValidClientError.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};
FilledValidClientError.parameters = {
    msw: [
        rest.post('/submit', (req, res, ctx) => {
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
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};
FilledValidInternalError.parameters = {
    msw: [
        rest.post('/submit', (req, res, ctx) => {
            return res(
                ctx.json({
                    status: 500,
                    message: 'An error message from the server: internal error'
                })
            );
        }),
    ],
}

export const FilledInvalidText = Template.bind({});
FilledInvalidText.args = {
    state: {
        data: {
            text: new FormField('', false, 'A message about field being invalid'),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidEmail = Template.bind({});
FilledInvalidEmail.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('', false, 'A message about field being invalid'),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidPassword = Template.bind({});
FilledInvalidPassword.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('', false, 'A message about field being invalid'),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidSelectMe = Template.bind({});
FilledInvalidSelectMe.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-1', false, 'A message about field being invalid'),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidCheckMe = Template.bind({});
FilledInvalidCheckMe.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(false, false, 'A message about field being invalid'),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidRadioMe = Template.bind({});
FilledInvalidRadioMe.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(false, false, 'A message about field being invalid'),
            rangeMe: new FormField(3, true)
        }
    }
};

export const FilledInvalidRangeMe = Template.bind({});
FilledInvalidRangeMe.args = {
    state: {
        data: {
            text: new FormField('abc', true),
            email: new FormField('abc@abc.com', true),
            password: new FormField('abc', true),
            selectMe: new FormField('option-2', true),
            checkMe: new FormField(true, true),
            radioMe: new FormField(true, true),
            rangeMe: new FormField(1, false, 'A message about field being invalid')
        }
    }
};

export const Submitting = Template.bind({});
Submitting.args = {
    state: {
        data: {
            text: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            selectMe: new FormField('option-2'),
            checkMe: new FormField(true),
            radioMe: new FormField(true),
            rangeMe: new FormField(3)
        },
        submitting: true
    }
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    state: {
        data: {
            text: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            selectMe: new FormField('option-2'),
            checkMe: new FormField(true),
            radioMe: new FormField(true),
            rangeMe: new FormField(3)
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
            text: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            selectMe: new FormField('option-2'),
            checkMe: new FormField(true),
            radioMe: new FormField(true),
            rangeMe: new FormField(3)
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
            text: new FormField('abc'),
            email: new FormField('abc@abc.com'),
            password: new FormField('abc'),
            selectMe: new FormField('option-2'),
            checkMe: new FormField(true),
            radioMe: new FormField(true),
            rangeMe: new FormField(3)
        },
        alert: {
            type: 'error',
            message: 'An error message related to this form'
        }
    }
};
