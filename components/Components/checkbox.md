## Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基本使用

切换选中的状态

```jsx
import React, { useState } from 'react';
import { Provider, Checkbox } from 'zeus-ui';

export default () => {
  const [checked, setChecked] = useState(false);

  return (
    <Provider>
      <Checkbox
        label="是否选中"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </Provider>
  );
};
```

### 禁用状态

不可用

```jsx
import React, { useState } from 'react';
import { Provider, Checkbox } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Checkbox disabled={true} label="是否选中" checked={false} />
    </Provider>
  );
};
```

### 多选框

如果需要设置多选，也很容易实现

```jsx
import React, { useState } from 'react';
import { Provider, Checkbox } from 'zeus-ui';

export default () => {
  const [checked, setChecked] = useState([1, 2]);
  const checkboxes = [
    { name: '鸣人', value: 1 },
    { name: '小李', value: 2 },
    { name: '佐助', value: 3 },
    { name: '斑', value: 4 },
  ];

  const handleCheckBoxChange = e => {
    e.target.checked
      ? checked.push(Number(e.target.value))
      : checked.splice(
          checked.findIndex(item => item === Number(e.target.value)),
          1,
        );
    setChecked([...checked]);
  };

  return (
    <Provider>
      {checkboxes.map((item, index) => {
        return (
          <span key={item.value} style={{ marginRight: 16 }}>
            <Checkbox
              checked={checked.findIndex(value => item.value === value) !== -1}
              label={item.name}
              value={item.value}
              onChange={e => handleCheckBoxChange(e)}
            />
          </span>
        );
      })}
    </Provider>
  );
};
```

### 多选一

如果需要设置多选，也很容易实现

```jsx
import React, { useState } from 'react';
import { Provider, Checkbox } from 'zeus-ui';

export default () => {
  const [checked, setChecked] = useState(1);
  const checkboxes = [
    { name: '鸣人', value: 1 },
    { name: '小李', value: 2 },
    { name: '佐助', value: 3 },
    { name: '斑', value: 4 },
  ];

  const handleCheckBoxChange = e => {
    setChecked(Number(e.target.value));
  };

  return (
    <Provider>
      {checkboxes.map((item, index) => {
        return (
          <span key={item.value} style={{ marginRight: 16 }}>
            <Checkbox
              checked={checked === item.value}
              label={item.name}
              value={item.value}
              onChange={e => handleCheckBoxChange(e)}
            />
          </span>
        );
      })}
    </Provider>
  );
};
```

### 复杂的复选框

label 不是简单的字符串的时候，可以用 extra 属性去添加额外的 label 信息

```jsx
import React, { useState } from 'react';
import { Provider, Checkbox, Icon } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Checkbox
          checked={false}
          label=" "
          extra={<Icon glyph="account" size={16} />}
        />
      </space>
      <Checkbox
        checked={false}
        label=" "
        extra={<Icon glyph="plus" size={16} />}
      />
    </Provider>
  );
};
```

## API

| 参数     | 说明                       | 类型    | 默认值 |
| -------- | -------------------------- | ------- | ------ |
| checked  | 是否处于选中状态           | boolean | false  |
| disabled | 是否禁用复选框             | boolean | false  |
| label    | 复选框的文字               | string  | -      |
| extra    | 复选框的额外内容           | any     | -      |
| onChange | 切换复选框状态时的回调函数 | boolean | -      |
