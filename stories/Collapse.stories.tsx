
import { Meta } from '@storybook/react';
import React from 'react';
import { Collapse } from '../src';

export default {
  component: Collapse,
  title: 'components/Collapse',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Basic: React.VFC = () => {
  return (
    <div>
      <Collapse title="Click me to show/hide content" />
    </div>
  );
};
