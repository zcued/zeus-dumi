## Button 按钮

按钮用于开始一个即时操作。

### 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 幽灵按钮：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

## 代码演示

### 基本状态

按钮类型有两种 default 和 primary

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button>Default</Button>
      </space>
      <Button type="primary">Primary</Button>
    </Provider>
  );
};
```

### 按钮尺寸

可以通过 size 属性控制按钮的大小

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button disabled={true} size="md">
          Middle
        </Button>
      </space>
      <space>
        <Button size="sm">Small</Button>
      </space>
      <space>
        <Button disabled={true} type="primary" size="md">
          Middle
        </Button>
      </space>
      <Button type="primary" size="sm">
        Small
      </Button>
    </Provider>
  );
};
```

### 按钮尺寸

可以通过 size 属性控制按钮的大小

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button disabled={true} size="md">
          Middle
        </Button>
      </space>
      <space>
        <Button size="sm">Small</Button>
      </space>
      <space>
        <Button disabled={true} type="primary" size="md">
          Middle
        </Button>
      </space>
      <Button type="primary" size="sm">
        Small
      </Button>
    </Provider>
  );
};
```

### 禁用按钮

可以通过 disabled 属性来控制按钮的可用状态

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button disabled={true} type="default">
          Default
        </Button>
      </space>
      <Button disabled={true} type="primary">
        Primary
      </Button>
    </Provider>
  );
};
```

### 图标按钮

icon 属性可以为按钮在文字前边加一个 icon

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button icon="add">添加</Button>
      </space>
      <space>
        <Button icon="copy">复制</Button>
      </space>
      <space>
        <Button icon="check">勾选</Button>
      </space>
      <space>
        <Button icon="add" iconSize="20">
          添加
        </Button>
      </space>
      <Button icon="add" iconSize="12">
        添加
      </Button>
    </Provider>
  );
};
```

### 加载状态

这种效果通常用于点击按钮之后产生发起 http 请求之类的异步操作

```jsx
import React, { useState } from 'react';
import { Provider, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Button loading={true}>Loading Default</Button>
      </space>
      <Button type="primary" loading={true}>
        Loading Disabled
      </Button>
    </Provider>
  );
};
```

# API

| 参数     | 说明                                    | 类型               | 默认值    |
| -------- | --------------------------------------- | ------------------ | --------- |
| type     | 按钮的基本类型，包括 primary 和 default | stirng             | 'default' |
| size     | 控制按钮的大小，可以是 md 或者 sm       | stirng&#124;number | 'md'      |
| disabled | 是否禁用按钮                            | boolean            | false     |
| icon     | 图标类型                                | string             | -         |
| iconSize | 图标大小                                | number             | 26        |
| onClick  | 出发用户的点击事件                      | function           | -         |
