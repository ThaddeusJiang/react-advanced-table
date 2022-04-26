import { DataTable, MemberAvatar, SearchBar } from '../src';
import {
  MockColumns,
  MockMembers,
  MockReactTableColumns,
  MockViews,
} from '../src/data/mocks';
import React, { useMemo } from 'react';

import { Collapse } from '../src/components/Collapse';
import { Member } from '../src/data/interfaces';

export default {
  title: 'examples/AdvancedDataTable',
  component: DataTable,
};

export const FullFeaturesExample = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'name',
        width: 300,
        // eslint-disable-next-line react/display-name
        Cell: (data: {
          row: {
            original: Member;
          };
        }) => {
          const member = data.row.original;
          return <MemberAvatar member={member} />;
        },
      },
      {
        Header: 'mail',
        accessor: 'mail',
      },
      {
        Header: 'phone',
        accessor: 'phone',
      },
      {
        Header: 'address',
        accessor: 'address',
      },
    ],
    []
  );

  const view = {
    id: 'view-01',
    name: 'View 01',
    columns: MockColumns.splice(0, 2),
  };

  return (
    <section>
      <h1 className=" font-semibold text-xl px-4">
        Advanced Table - full features example
      </h1>
      <Collapse title="Advanced Search">
        <SearchBar views={MockViews} view={view} />
      </Collapse>
      {/* @ts-ignore FIXME: type */}
      <DataTable columns={columns} data={MockMembers} />
    </section>
  );
};
