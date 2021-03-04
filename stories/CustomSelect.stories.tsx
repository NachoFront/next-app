import React, { ComponentProps, Fragment } from 'react';
import { Story, Meta } from '@storybook/react';
import 'antd/dist/antd.css';
import CustomSelect from '../src/components/CustomSelect/CustomSelect';

export default {
  title: 'Nacho/CustomSelect',
  component: CustomSelect,
} as Meta;

const optionList = [
  { id: '1', name: 'Australia' },
  { id: '2', name: 'Brazil' },
  { id: '3', name: 'China' },
  { id: '4', name: 'Denmark' },
  { id: '5', name: 'Egypt' },
  { id: '6', name: 'Finland' },
  { id: '7', name: 'Ghana' },
  { id: '8', name: 'Hungary' },
  { id: '9', name: 'India' },
  { id: '10', name: 'Japan' },
];

const props = {
  optionList: optionList,
  defaultText:'Seleciona una opción',
  colorArrow:'black',
  colorBackgroundList:'white',
}

const Template: Story<ComponentProps<typeof CustomSelect>> = () => (
  <Fragment>
  <CustomSelect {...props}/>
  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid, velit recusandae repudiandae eveniet incidunt architecto ex, error ducimus cum voluptatum dignissimos, rerum harum assumenda asperiores hic? Commodi, suscipit autem?</div>
  </Fragment>
);

export const Default = Template.bind({});
Default.args = {};