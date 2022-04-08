export const MockMembers = [
  {
    id: 1,
    name: 'John Doe',
    kana: 'ジョン・ドゥ',
    mail: 'johndoe@me.com',
    phone: '+1 (123) 456-7891',
    address: '001 Main St, Anywhere, USA',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    kana: 'ジェーン・ドゥ',
    mail: 'janedoe@me.com',
    phone: '+1 (123) 456-7892',
    address: '002 Main St, Anywhere, USA',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
];

export const MockMembersTableColumns = [
  {
    Header: 'name',
    accessor: 'name',
    width: 300,
  },
  {
    Header: 'kana',
    accessor: 'kana',
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
];
