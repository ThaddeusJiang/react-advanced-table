import { Meta } from '@storybook/react';
import React from 'react';
import { SearchBar } from '../src';


export default {
  component: SearchBar,
  title: 'components/SearchBar',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Basic: React.VFC = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
