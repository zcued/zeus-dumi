## Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 代码演示

### 基本类型

展示基本的数据

```jsx
import React from 'react';
import { Provider, Table } from 'zeus-ui';
import styled from 'styled-components';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.palette.black};
`;

const SpanDisabled = styled.span`
  color: ${({ theme }) => theme.palette.stone};
`;

const TableStyled = styled(Table)`
  margin-top: 20px;
`;

export default () => {
  const columns = [
    {
      key: '1',
      title: '用途限制',
      dataIndex: 'use',
    },
    {
      key: '2',
      title: '标准授权',
      dataIndex: 'standard',
      align: 'center',
      width: 206,
      render: text => {
        return text === '不允许' ? (
          <SpanDisabled>{text}</SpanDisabled>
        ) : (
          <Span>{text}</Span>
        );
      },
    },
    {
      key: '3',
      title: '扩展授权',
      dataIndex: 'extend',
      align: 'center',
      width: 206,
      render: (text, record) => {
        return text === '不允许' ? (
          <SpanDisabled>{record.extend}</SpanDisabled>
        ) : (
          <Span>{text}</Span>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      use: '数字用途：网站、微博、微信、电邮等',
      standard: '允许',
      extend: '允许',
    },
    {
      key: 2,
      use: '线下印刷：宣传页、海报、报纸杂志、包装等',
      standard: '限量50万份',
      extend: '印刷数量无限',
    },
    {
      key: 3,
      use: '户外广告：楼宇、车身、灯箱、围挡、橱窗、户外广告等',
      standard: '不允许',
      extend: '允许',
    },
  ];

  return (
    <Provider>
      <Table columns={columns} data={data} />
    </Provider>
  );
};
```

## API

### table

| 参数          | 说明       | 类型                                                                  | 默认值 |
| ------------- | ---------- | --------------------------------------------------------------------- | ------ |
| columns       | 列数据     | Array&lt;columns&gt;                                                  | -      |
| data          | 数据信息   | Array&lt;&#123; key?: string&#124;number,[key: string]: any&#125;&gt; | -      |
| onColumnClick | 行点击事件 | (record: any) => void                                                 | -      |

### columns

| 参数      | 说明             | 类型                  | 默认值 |
| --------- | ---------------- | --------------------- | ------ |
| render    | 渲染列数据的方法 | function              | -      |
| width     | 宽度             | number&#124;string    | -      |
| align     | 对齐方式         | string                | 'left' |
| title     | 标题             | string&#124;ReactNode | -      |
| dataIndex | 数据 index       | string                | -      |
| key       | key 标识         | string                | -      |
