## Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失。

## 代码演示

```jsx
import React from 'react';
import { Provider, Alert } from 'zeus-ui';

export default () => (
  <Provider>
    <space>
      <Alert title="Error" />
    </space>
    <space>
      <Alert title="Error" iconSize={20} />
    </space>
    <Alert title="Error Tip" showIcon={false} />
  </Provider>
);
```

## API

| 参数     | 说明                                                                | 类型                                              | 默认值 |
| -------- | ------------------------------------------------------------------- | ------------------------------------------------- | ------ |
| type     | 本应该是指定警告提示的样式，但现在是为该标签设置了 data-type={type} | 'warning'&#124;'success'&#124;'info'&#124;'error' | -      |
| showIcon | 是否显示辅助图标                                                    | boolean                                           | true   |
| iconSize | 图标大小                                                            | number                                            | 12     |
| title    | 警告提示内容                                                        | string&#124;JSX.Element                           | -      |
