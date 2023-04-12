// import * as React from 'react';
import { createElement } from 'react';
import { ProTable } from '@ant-design/pro-components';
import request from 'umi-request';
import * as React from 'react';

import { requestFormat } from '../../utils/helper';
import type { ReqMethod } from '../../utils/helper';
interface RequestConfig {
  api: string;
  method: ReqMethod;
}
export interface MyTableProps {
  rowKey: 'string';
  style?: React.CSSProperties;
  columns?: any[];
  request: RequestConfig;
  dataSource?: any[];
}
// const DEFAULT_COLUMN = [
//   {
//     title: '名称',
//     dataIndex: 'id',
//     tip: '名称是唯一的 key',
//     formItemProps: {
//       rules: [
//         {
//           required: true,
//           message: '名称为必填项',
//         },
//       ],
//     },
//   },
//   {
//     title: '内容',
//     dataIndex: 'title',
//     valueType: 'text',
//   },
//   {
//     title: '操作',
//     dataIndex: 'option',
//     valueType: 'option',
//   },
// ];

const MyTable: React.FC<MyTableProps> = function MyTableFunc({
  rowKey,
  columns,
  request: requestConfig,
  dataSource,
  style,
}) {
  const { api, method } = requestConfig || {};
  const isRequest = !!api;
  return (
    <ProTable
      style={style}
      rowKey={rowKey}
      request={
        !request
          ? undefined
          : async (params, sort, filter) => {
              const requestFunc = requestFormat(api, method);
              const reqData = Object.assign(sort, filter, params, {
                page: params.current,
                pageSize: params.pageSize,
              });
              const res = await requestFunc(reqData);
              // todo 加个数据处理方法
              return {
                data: (res?.data as any) || [],
                success: true,
                total: (res?.data as any)?.total,
              };
            }
      }
      {...(isRequest ? {} : { dataSource })}
      columns={columns}
    />
  );
};

export default MyTable;
