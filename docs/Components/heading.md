## Heading 标题

段落或者内容块的标题

## 何时使用

- 展示不同级别的标题。

## 代码演示

```jsx
import React from 'react';
import { Provider, Heading } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Heading size={1}>我是超级大的标题</Heading>
      <Heading size={2}>我是比较大的标题</Heading>
      <Heading size={3}>我是有点大的标题</Heading>
      <Heading size={4}>我是有点小的标题</Heading>
      <Heading size={5}>我是比较小的标题</Heading>
      <Heading size={6}>我是超级小的标题</Heading>
    </Provider>
  );
};
```

## API

| 参数 | 说明       | 类型   | 默认值 |
| ---- | ---------- | ------ | ------ |
| size | 标题的大小 | number | 3      |
