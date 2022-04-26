import { Meta } from '@storybook/react';

import React from 'react';
import { ColumnsModal, Modal } from '../src';
import { MockColumns } from '../src/data/mocks';

export default {
  title: 'components/ColumnsModal',
  component: ColumnsModal,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Basic: React.VFC = () => {
  const modalId = 'columns-modal-01';
  return (
    <div>
      <label htmlFor={modalId} className="btn modal-button">
        Open Columns Modal
      </label>
      <ColumnsModal
        id={modalId}
        columns={MockColumns}
        value={MockColumns.slice(0, 2)}
      />
    </div>
  );
};
