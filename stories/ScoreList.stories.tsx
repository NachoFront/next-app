import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import 'antd/dist/antd.css';
import ScoreList from '../src/components/ScoreList/ScoreList';

export default {
  title: 'Nacho/ScoreList',
  component: ScoreList,
} as Meta;


const Template: Story<ComponentProps<typeof ScoreList>> = (props) => (
  <ScoreList items={[]} />
);

export const SimplestScoreList = Template.bind({});
SimplestScoreList.args = {};