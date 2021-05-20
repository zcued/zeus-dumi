## Card 卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 设置背景图

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
        className="card-wh"
        titlePosition="bottom"
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        title="一张卡片"
      />
    </Provider>
  );
};
```

### 不同形态的卡片

卡片有三种不同的形式，分别是 card, picture 和 atlas。

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Card
          className="card-wh"
          type="atlas"
          title="我是标题啊"
          subTitle="此文案"
          imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        />
      </space>
      <space>
        <Card
          className="card-wh"
          type="card"
          title="我是标题啊"
          subTitle="此文案"
          imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        />
      </space>
      <Card
        className="card-wh"
        type="picture"
        title="我是标题啊"
        subTitle="此文案"
        operator={<span>作者署名</span>}
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
      />
    </Provider>
  );
};
```

### 小点的卡片

设置 size 为 small 可以让标题内容缩小

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
        className="card-wh"
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        title="一张可爱的卡片"
        size="small"
        tag={<div style={{ background: '#ffd100', padding: 4 }}>超级酷</div>}
      />
    </Provider>
  );
};
```

### 标题位置修改

设置修改标题的位置

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
        className="card-wh"
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        title="一张可爱的卡片"
        subTitle="我是卡片的子标题"
        titlePostion="bottom"
      />
    </Provider>
  );
};
```

## API

| 参数           | 说明                                                      | 类型                                | 默认值    |
| -------------- | --------------------------------------------------------- | ----------------------------------- | --------- |
| type           | 卡片有三种不同的形式                                      | 'default'&#124;'atlas'&#124;'album' | 'default' |
| size           | 卡片的大小                                                | 'small'                             | -         |
| imgSrc         | 图片链接                                                  | string                              | -         |
| imgAlt         | 图片 alt                                                  | string                              | -         |
| imgHeight      | 图片高度                                                  | number                              | 16        |
| imgPlaceHolder | (好像没有起到作用)                                        | string                              | -         |
| titlePosition  | 标题位置                                                  | 'bottom'                            | -         |
| title          | 标题                                                      | string                              | -         |
| subTitle       | 子标题                                                    | string                              | -         |
| tag            | tag 标签                                                  | JSX.Element                         | -         |
| operator       | 右下角的署名，titlePosition 不为'bottom'有效              | JSX.Element                         | -         |
| borderStyle    | 边框 style 属性样式                                       | string                              | -         |
| customImage    | 自定义图片区域                                            | JSX.Element                         | -         |
| customContent  | 自定义主体区域                                            | JSX.Element                         | -         |
| className      | 自定义 class，该组件要修改大小只能通过 class 去自定义宽高 | string                              | -         |
