## Card 卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

## 设置背景图

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        title="一张卡片"
      />
    </Provider>
  );
};
```

## 不同形态的卡片

卡片有三种不同的形式，分别是 card, picture 和 atlas。

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space>
        <Card
          type="atlas"
          title="我是标题啊"
          subTitle="此文案"
          imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        />
      </space>
      <space>
        <Card
          type="card"
          title="我是标题啊"
          subTitle="此文案"
          imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        />
      </space>
      <Card
        type="picture"
        title="我是标题啊"
        subTitle="此文案"
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
      />
    </Provider>
  );
};
```

## 小点的卡片

设置 size 为 small 可以让标题内容缩小

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
        imgSrc="https://z3.ax1x.com/2021/05/11/gagBIU.jpg"
        title="一张可爱的卡片"
        size="small"
        tag={<div style={{ background: '#ffd100', padding: 4 }}>超级酷</div>}
      />
    </Provider>
  );
};
```

## 标题位置修改

设置修改标题的位置

```jsx
import React from 'react';
import { Provider, Card } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Card
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

| 参数     | 说明                                      | 类型     | 默认值    |
| -------- | ----------------------------------------- | -------- | --------- |
| type     | 按钮的基本类型，包括 primary 和 default   | stirng   | 'default' |
| size     | 控制按钮的大小，可以是 md 或者 sm 或者 md | number   | 'md'      |
| disabled | 是否禁用按钮                              | boolean  | false     |
| icon     | 图标类型                                  | string   | -         |
| iconSize | 图标大小                                  | number   | 16        |
| onClick  | 出发用户的点击事件                        | function | -         |
