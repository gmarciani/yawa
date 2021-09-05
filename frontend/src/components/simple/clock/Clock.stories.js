import React from 'react';
import Clock from "./Clock";

export default {
    component: Clock,
    title: 'Clock',
};

const Template = () => <Clock />;

export const Default = Template.bind({});
Default.args = {
    date: new Date()
};
