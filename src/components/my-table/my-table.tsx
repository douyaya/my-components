// import * as React from 'react';
// import { createElement } from 'react';
import { ProTable } from '@ant-design/pro-components';

// import { Table } from 'antd';

import * as React from 'react';
import { createElement } from 'react';

import { requestFormat } from '../../utils/helper';
// import type { ReqMethod } from '../../utils/helper';
import './index.scss';
interface RequestConfig {
  api: string;
  // method: ReqMethod;
  method: any;
}
export interface MyTableProps {
  rowKey: 'string';
  style?: React.CSSProperties;
  columns?: any[];
  request: RequestConfig;
  dataSource?: any[];
}

const MyTable: React.FC<MyTableProps> = function MyTableFunc({
  rowKey,
  columns,
  request,
  dataSource,
  style,
}) {
  if (!request && !dataSource) {
    throw new Error('error: 必须配置request或者dataSource');
  }
  const { api, method } = request || {};

  return (
    <ProTable
      style={style}
      rowKey={rowKey}
      request={
        !request
          ? undefined
          : async (
              // 第一个参数 params 查询表单和 params 参数的结合
              // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
              params,
              sort,
              filter,
            ) => {
              const requestFunc = requestFormat(api, method);
              const reqData = Object.assign(sort, filter, params, {
                page: params.current,
                pageSize: params.pageSize,
              });
              const res = await requestFunc(reqData);
              // todo 加个数据处理方法
              return {
                data: (res?.data as any)?.dataList || [],
                success: true,
                // 不传会使用 data 的长度，如果是分页一定要传
                total: (res?.data as any)?.count,
              };
            }
      }
      {...(dataSource ? { dataSource } : {})}
      columns={columns}
    />
  );
};

export default MyTable;
