## Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

```jsx
import React from 'react';
import { Provider, Tag } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Tag type="hot">Tag 1</Tag>
      </space>
      <Tag checked={true}>Tag 2</Tag>
    </Provider>
  );
};
```

## API

| 参数     | 说明             | 类型                 | 默认值    |
| -------- | ---------------- | -------------------- | --------- |
| checked  | 是否选中         | boolean              | false     |
| type     | 是否显示角标     | 'hot'&#124;'default' | 'default' |
| color    | tag 的颜色       | string               | -         |
| dotcolor | tag 的自定义点标 | JSX.Element          | -         |
