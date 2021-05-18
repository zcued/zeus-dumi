## Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

## 代码演示

### 不同位置提示框

可以通过 placement 改变提示语的位置，共支持 12 种，分别是 top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end

```jsx
import React, { useState, useEffect } from 'react';
import { Provider, Tooltip, Row, Col } from 'zeus-ui';
import styled from 'styled-components';

export default () => {
  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col span={6}>
          <Tooltip title="温馨提示：你真乖" placement="top">
            鼠标移动到这里
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="温馨提示：你真乖" placement="right-start">
            鼠标移动到这里
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="温馨提示：你真乖" placement="left-end">
            鼠标移动到这里
          </Tooltip>
        </Col>
        <Col span={6}>
          <Tooltip title="温馨提示：你真乖" placement="bottom">
            鼠标移动到这里
          </Tooltip>
        </Col>
      </Row>
    </React.Fragment>
  );
};
```

## API

| 参数             | 说明                                                         | 类型                    | 默认值 |
| ---------------- | ------------------------------------------------------------ | ----------------------- | ------ |
| title            | 提示文本                                                     | string&#124;JSX.Element | -      |
| placement        | tooltip 的定位                                               | string                  | 'top'  |
| mouseEnterDelay  | hover 移动上去显示的延迟事件                                 | number                  | 0      |
| defaultHovering  | 是否默认显示                                                 | boolean                 | false  |
| overlayClassName | tooltip 的自定义 class                                       | string                  | 'top'  |
| overlayStyle     | tooltip 的 style                                             | CSSObject               | 'top'  |
| overlayReset     | poper 的自定义修饰符https://popper.js.org/docs/v2/modifiers/ | boolean                 | false  |
