## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { MyTable } from 'my-components-new';

const columns: any[] = [
  {
    title: '名称',
    dataIndex: 'appName',
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
    title: '升级类型',
    dataIndex: 'upgradeType',
    valueEnum: {
      0: { text: '升级', status: 'MALE' },
      1: { text: '单机升级', status: 'FEMALE' },
    },
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'text',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
  },
];
const requestConfig = {
  api: 'https://httpizza.daily.elenet.me/ele-me-ele-arch-soa-jath/api/appUpgradePlan/detailList',
  method: 'post',
  // todo 组件还没接收
  params: ['id', 'gender'], // 不配置默认全传,一个都不想传就写[]
  extraParams: { extra: true },
};
const dataSource = [
  {
    id: 'ssss',
    appName: 'dddddd',
    upgradeType: 0,
    updatedAt: '2023-01-13',
  },
];

export default () => {
  return (
    <div>
      <MyTable rowKey="id" dataSource={dataSource} columns={columns} />
    </div>
  );
};
```

## API

<API hideTitle src="@/components/my-table/my-table.tsx" />
