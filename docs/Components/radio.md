## Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

```jsx
import React, { useState } from 'react';
import { Provider, Radio } from 'zeus-ui';

export default () => {
  const [selected, setSelected] = useState(null);
  const checkboxes = ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5'];

  const changeRadioes = (e, checked) => {
    if (checked) {
      setSelected(Number(e.target.value));
    }
  };

  return (
    <Provider>
      <space>
        {checkboxes.map((item, index) => {
          return (
            <Radio
              checked={index === selected}
              key={index}
              label={item}
              value={index}
              name="radio"
              onChange={changeRadioes}
            />
          );
        })}
      </space>
      <space>
        {checkboxes.map((item, index) => {
          return (
            <Radio
              checked={true}
              key={index}
              label={item}
              value={index}
              name="radio"
              disabled={true}
              extra="extra"
              onChange={changeRadioes}
            />
          );
        })}
      </space>
    </Provider>
  );
};
```

## API

| 参数     | 说明                   | 类型                    | 默认值                           |
| -------- | ---------------------- | ----------------------- | -------------------------------- |
| checked  | 是否选中               | boolean                 | true                             |
| disabled | 是否禁用               | boolean                 | false                            |
| label    | radio 的显示的文本     | string&#124;JSX.Element | -                                |
| onChange | radio 发生变化时的回调 | Function                | (event, checked:boolean) => void |
| name     | radio 的名称           | string                  | -                                |
| value    | radio 的值             | string&#124;number      | -                                |
| extra    | 右侧的自定义操作区域   | string&#124;JSX.Element | -                                |
