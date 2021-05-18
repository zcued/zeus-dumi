## Toast 通知提醒框

全局展示通知提醒信息

## 何时使用

可提供成功、警告和错误等反馈信息。

## 代码演示

```jsx
import React from 'react';
import { Provider, Toast } from 'zeus-ui';

export default () => {
  return (
    <Toast offsetLeft={-500} offsetTop={-300}>
      this is a toast
    </Toast>
  );
};
```

## API

| 参数       | 说明   | 类型   | 默认值 |
| ---------- | ------ | ------ | ------ |
| offsetLeft | 左定位 | number | 0      |
| offsetTop  | 右定位 | number | 0      |
