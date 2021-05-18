## Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

- 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

### 菜单栏

用于导航

```jsx
import React, { useState } from 'react';
import { Provider, Menu, MenuItem, SubMenu } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Menu value="1" align="center">
        <MenuItem>menu 1</MenuItem>
        <MenuItem>menu 2</MenuItem>
        <MenuItem>menu 3</MenuItem>
      </Menu>
    </Provider>
  );
};
```

### 带指示箭头的菜单栏

可以用一个小箭头更加明确的指出当前处于 active 状态的菜单栏

```jsx
import React, { useState } from 'react';
import { Provider, Menu, MenuItem, SubMenu } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Menu hasActiveArrow value="1">
        <MenuItem>menu 1</MenuItem>
        <MenuItem>menu 2</MenuItem>
        <MenuItem>menu 3</MenuItem>
      </Menu>
    </Provider>
  );
};
```

### 二级菜单

```jsx
import React, { useState } from 'react';
import { Provider, Menu, MenuItem, SubMenu } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Menu hasActiveArrow={true} value="1">
        <MenuItem>menu 1</MenuItem>
        <MenuItem>menu 2</MenuItem>
        <SubMenu title="Sub Menu">
          <MenuItem>option 1</MenuItem>
          <MenuItem>option 2</MenuItem>
        </SubMenu>
        <MenuItem>menu 3</MenuItem>
      </Menu>
    </Provider>
  );
};
```

## API

### Menu

| 参数                | 说明                               | 类型     | 默认值 |
| ------------------- | ---------------------------------- | -------- | ------ |
| hasActiveArrow      | 菜单栏是否有导航的箭头             | boolean  | false  |
| activeArrowPosition | 导航的箭头距离菜单栏的距离         | number   | 40     |
| value               | 用于锁定当前处于 active 状态的菜单 | string   | -      |
| align               | (实际没有起到对齐作用)             | 'center' | 'left' | - |
| onChange            | 切换菜单时的回调函数               | function | -      |
| onOpenChange        | 菜单展开时的回调函数               | function | -      |

### SubMenu

| 属性  | 说明         | 类型   | 默认值 |
| ----- | ------------ | ------ | ------ |
| title | 子菜单的标题 | string | -      |
| value | 子菜单的值   | string | -      |

### MenuItem

| 属性  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 菜单的值 | string | -      |
