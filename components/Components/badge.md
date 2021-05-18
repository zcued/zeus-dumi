## Badge 徽标数

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

```jsx
import React from 'react';
import { Provider, Badge } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Badge>3</Badge>
      </space>
      <space>
        <Badge pill={true}>99+</Badge>
      </space>
      <Badge pill={true} size={20}>
        302
      </Badge>
    </Provider>
  );
};
```

## API

| 参数      | 说明               | 类型    | 默认值    |
| --------- | ------------------ | ------- | --------- |
| color     | 自定义小圆点的颜色 | string  | 'primary' |
| pill      | 是否为胶囊形状     | boolean | false     |
| size      | 设置字体的大小     | number  | 14        |
| className | 自定义 class       | string  | -         |
