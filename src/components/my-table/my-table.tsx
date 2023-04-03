// import * as React from 'react';
// import { createElement } from 'react';
import { ProTable } from '@ant-design/pro-components';
// import { Table } from 'antd';

import * as React from 'react';
import { createElement } from 'react';
// import { Input } from '@alifd/next';
// import { bizCssPrefix } from '../../variables';
import './index.scss';

// export interface MyTableProps {
//   color?: 'string';
//   style?: 'object';
// }

const columns: any[] = [
  {
    title: '名称',
    dataIndex: 'name',
    tip: '名称是唯一的 key',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '名称为必填项',
        },
      ],
    },
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    valueType: 'text',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    hideInForm: true,
    valueEnum: {
      0: { text: '男', status: 'MALE' },
      1: { text: '女', status: 'FEMALE' },
    },
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
  },
];

const dataSource = [{ id: 'ddddd', name: 'ddd', nickName: 'dddd', gender: 0 }];

export interface MyTableProps {
  color?: 'string';
  style?: 'object';
}

const MyTable: React.FC<MyTableProps> = function ColorfulInput({
  color,
  style = {},
  ...otherProps
}) {
  // return <Table dataSource={dataSource} columns={columns} />;
  return <ProTable rowKey="id" dataSource={dataSource} columns={columns} />;
};

export default MyTable;
