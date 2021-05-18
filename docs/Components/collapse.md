## Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。

## 代码演示

### 折叠面板

折叠面板通常用于大量数据在同一个页面时，隐藏不必要的数据。

```jsx
import React, { useState } from 'react';
import { Provider, Collapse, CollapseItem } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Collapse value={['0']} accordion={true}>
        <CollapseItem title={<span>是否可以获取小图样</span>}>
          您购买的套餐有效期为1年
        </CollapseItem>
        <CollapseItem title="是否可以申请发票">
          您购买的套餐有效期为1年
        </CollapseItem>
        <CollapseItem title="你们的图片可以做logo吗？">
          您购买的套餐有效期为1年
          <img
            src="http://seopic.699pic.com/photo/50052/7491.jpg_wh1200.jpg"
            alt=""
          />
        </CollapseItem>
      </Collapse>
    </Provider>
  );
};
```

## API

### Collapse

| 参数      | 说明                   | 类型                | 默认值 |
| --------- | ---------------------- | ------------------- | ------ |
| value     | 当前展开的面板的 index | Array&lt;string&gt; | -      |
| onChange  | 展开收缩时的回调函数   | Function            | -      |
| accordion | 手风琴模式，只展开一个 | boolean             | false  |

### CollapseItem

| 参数     | 说明         | 类型                | 默认值 |
| -------- | ------------ | ------------------- | ------ |
| title    | 面板标题     | string&#124;element | -      |
| children | 面板里的内容 | string&#124;element | -      |
