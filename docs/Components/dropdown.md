## Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

- 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## 代码演示

### 下拉菜单

可以通过 tigger 属性去设置触发方式，触发方式有两种 hover 和 click，默认为 hover

```jsx
import React, { useState } from 'react';
import { Provider, Dropdown } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Dropdown text="鼠标移动到这里">
          <div style={{ padding: 8 }}>哒哒哒</div>
        </Dropdown>
      </space>
      <Dropdown text="点击这里" trigger="click">
        <div style={{ padding: 8 }}>哒哒哒</div>
      </Dropdown>
    </Provider>
  );
};
```

### 可控下拉菜单

也可以去手动控制组件的值，用过 isOpen 和 onToggle 来控制状态的改变

```jsx
import React, { useState } from 'react';
import { Provider, Dropdown } from 'zeus-ui';

export default () => {
  const [isOpenClick, setIsOpenClick] = useState(false);
  const [isOpenHover, setIsOpenHover] = useState(false);

  return (
    <Provider>
      <space>
        <Dropdown
          icon="manage-plus"
          text="点击这里"
          isOpen={isOpenClick}
          onToggle={() => setIsOpenClick(!isOpenClick)}
          trigger="click"
          onOutSideClick={() => setIsOpenClick(false)}
        >
          <div style={{ padding: 8 }}>哒哒哒</div>
          <div style={{ padding: 8 }}>哒哒哒</div>
        </Dropdown>
      </space>
      <Dropdown
        text="鼠标移动到这里"
        isOpen={isOpenHover}
        onToggle={() => setIsOpenHover(!isOpenHover)}
      >
        <div style={{ padding: 8 }}>哒哒哒</div>
        <div style={{ padding: 8 }}>哒哒哒</div>
      </Dropdown>
    </Provider>
  );
};
```

## API

| 参数            | 说明                               | 类型                 | 默认值  |
| --------------- | ---------------------------------- | -------------------- | ------- |
| text            | 下拉菜单的标题文字                 | string               | -       |
| triggler        | 触发方式                           | 'hover'&#124;'click' | 'hover' |
| onToggle        | 触发下拉或者收起时的回调函数       | Function             | -       |
| isOpen          | 下拉菜单状态                       | boolean              | false   |
| icon            | 下拉菜单 icon                      | string               | -       |
| iconSize        | 下拉菜单 icon 大小                 | number               | -       |
| mouseLeaveDelay | 鼠标移动到下拉菜单显示的延迟，毫秒 | number               | 300     |
