import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Table',
  component: Table
} as Meta;

export const Default: Story = () => {
  return <Table />;
};
