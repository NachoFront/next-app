import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import 'antd/dist/antd.css';
import Calendar from '../src/components/Calendar/Calendar';

export default {
  title: 'Nacho/Calendar',
  component: Calendar,
} as Meta;


const Template: Story<ComponentProps<typeof Calendar>> = (props) => (
  <Calendar  />
);

export const SimplestCalendar = Template.bind({});
SimplestCalendar.args = {};