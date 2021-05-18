## Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

## 代码演示

```jsx
import React from 'react';
import { Provider, Tabs, Tab } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Tabs>
          <Tab selected={true}>Tab</Tab>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
        </Tabs>
      </space>
      <Tabs align="center">
        <Tab selected={true}>Tab2</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab2</Tab>
        <Tab>Tab2</Tab>
      </Tabs>
    </Provider>
  );
};
```

## API

### Tabs

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| align | 对齐方式 | string | 'left' |

### Tab

| 参数     | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| selected | 是否选中状态 | boolean | false  |
