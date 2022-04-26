import {
  SortableItem,
  SortableItemProps,
  SortableList,
} from '@thaddeusjiang/react-sortable-list';
import React, { FC, useState } from 'react';
import { TableColumn } from '../data/interfaces';

type Props = {
  id: string;
  columns?: TableColumn[];
  value: TableColumn[];
};

export const ColumnsModal: FC<Props> = ({
  id,
  // columns: originalColumns,
  value,
}) => {
  const [columns, setColumns] = useState(value);

  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle"></input>
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Columns</h3>
          <div className="py-4">
            {/* @ts-ignore */}
            <SortableList items={columns} setItems={setColumns}>
              {({ items }: { items: SortableItemProps[] }) => (
                <>
                  {items.map((item: SortableItemProps) => (
                    <SortableItem key={item.id} id={item.id}>
                      <div
                        key={item.id}
                        className="flex items-center py-2 px-4 bg-gray-100 rounded-lg mb-1 hover:bg-gray-200"
                      >
                        {item.name}
                      </div>
                    </SortableItem>
                  ))}
                </>
              )}
            </SortableList>
          </div>
          <div className="modal-action">
            <label htmlFor={id} className="btn btn-outline">
              Cancel
            </label>

            <label htmlFor={id} className="btn btn-outline">
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
