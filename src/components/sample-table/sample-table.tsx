import { Table } from '@alifd/next';

import * as React from 'react';
import { createElement } from 'react';

export interface SampleTableProps {
  columns?: any[];
  dataSource?: any[];
}

const SampleTable: React.FC<SampleTableProps> = function SampleTableFunc({ columns, dataSource }) {
  // if (!dataSource) {
  //   throw new Error('error: 必须配置dataSource');
  // }

  return <Table columns={columns} dataSource={dataSource} />;
};

export default SampleTable;
