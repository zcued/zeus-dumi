## Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

```jsx
import React, { useState } from 'react';
import { Provider, Modal, Button } from 'zeus-ui';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Provider>
      <Modal
        title="Modal标题"
        footer={<span>Modal的fotter自定义</span>}
        width={508}
        height={305}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
      >
        Modal内容区域
      </Modal>
      <Button onClick={() => setOpen(true)}>点击打开</Button>
    </Provider>
  );
};
```

## API

| 参数       | 说明                 | 类型                    | 默认值 |
| ---------- | -------------------- | ----------------------- | ------ |
| showIcon   | 是否显示辅助图标     | boolean                 | true   |
| iconSize   | 图标大小             | number                  | 12     |
| title      | 警告提示内容         | string&#124;JSX.Element | -      |
| footer     | 自定义 footer        | string&#124;JSX.Element | -      |
| closeStyle | 关闭按钮的自定义样式 | CSSObject               | -      |
| width      | 自定义宽度           | number&#124;string      | 528    |
| height     | 自定义高度           | number&#124;string      | '100%' |

其余属性：支持 react-modal 支持的任何属性https://github.com/reactjs/react-modal#api-documentation
