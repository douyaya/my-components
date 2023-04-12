## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { MyTable } from 'my-components-new';

const columns: any[] = [
  {
    title: '名称',
    dataIndex: 'id',
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
    title: '内容',
    dataIndex: 'title',
    valueType: 'text',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
  },
];
const requestConfig = {
  api: 'https://proapi.azurewebsites.net/github/issues',
  method: 'get',
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
      <MyTable rowKey="id" request={requestConfig} dataSource={dataSource} columns={columns} />
    </div>
  );
};
```

## API

<API hideTitle src="@/components/my-table/my-table.tsx" />
