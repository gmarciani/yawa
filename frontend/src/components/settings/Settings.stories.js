import React from 'react';
import Settings from "./Settings";

export default {
    component: Settings,
    title: 'Settings',
};

const Template = args => <Settings {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
