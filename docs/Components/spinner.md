## Spinner 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

### 遮罩层

加载状态时的遮罩层

```jsx
import React from 'react';
import { Provider, Spinner } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Spinner spinning={true}>
        <div style={{ width: '100%', height: 200 }}></div>
      </Spinner>
    </Provider>
  );
};
```

### 遮罩层样式

修改遮罩层样式

```jsx
import React from 'react';
import { Provider, Spinner } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Spinner
        spinning={true}
        minHeight={200}
        opacity={0.8}
        backgroundColor={'#000'}
        size={30}
        color={'#fff'}
      >
        <div />
      </Spinner>
    </Provider>
  );
};
```

## API

| 参数            | 说明             | 类型    | 默认值 |
| --------------- | ---------------- | ------- | ------ |
| spinning        | 是否处于加载状态 | boolean | -      |
| backgroundColor | 背景色           | string  | -      |
| color           | 图标颜色         | string  | -      |
| size            | 图标大小         | number  | -      |
| opacity         | 遮罩透明度       | number  | -      |
| minHeight       | 高度             | number  | -      |
| top             | 相对定位 top 值  | number  | 0      |
| opacity         | 透明度           | number  | -      |
