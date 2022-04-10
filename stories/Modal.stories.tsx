import { Meta } from '@storybook/react';

import React from 'react';
import { Modal } from '../src';

export default {
  component: Modal,
  title: 'components/Modal',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Basic: React.VFC = () => {
  const modalId = 'modal-basic-01';
  return (
    <div>
      <label htmlFor={modalId} className="btn modal-button">
        open modal
      </label>
      <Modal id={modalId} />
    </div>
  );
};
