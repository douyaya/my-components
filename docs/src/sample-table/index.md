## 何时使用

适合表单场景。

## 示例

```tsx
import React from 'react';
import { SampleTable } from 'my-components-new';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const requestConfig = {
  api: 'https://httpizza.daily.elenet.me/ele-me-ele-arch-soa-jath/api/appUpgradePlan/detailList',
  method: 'post',
  // todo 组件还没接收
  params: ['id', 'gender'], // 不配置默认全传,一个都不想传就写[]
  extraParams: { extra: true },
};

export default () => {
  return (
    <div>
      <SampleTable dataSource={dataSource} columns={columns} />
    </div>
  );
};
```

## API

<API hideTitle src="@/components/sample-table/sample-table.tsx" />
