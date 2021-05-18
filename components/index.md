## 介绍

一个站酷海洛 toC 项目的 UI 组件库

## 快速上手

#### 安装

```sh
npm i zeus-ui
```

```sh
yarn add zeus-ui
```

#### Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Button } from 'zeus-ui';

const App = () => (
  <Provider>
    <div>
      <h1>Hello Zeus-ui</h1>
      <Button>Click me</Button>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## 反馈

如果有什么问题或者好的注意可以在我们的 [github](https://github.com/zcued/zeus/issues) 上进行反馈

## 浏览器支持

支持所有 [React 所支持的浏览器](https://reactjs.org/docs/react-dom.html#browser-support)

## 全局设计

### 屏幕尺寸

屏幕宽度的设置值

| 参数 | 值   |
| ---- | ---- |
| xs   | 0    |
| sm   | 600  |
| md   | 960  |
| lg   | 1280 |
| xl   | 1920 |

### 主题色

基础色板共计 10 个颜色，包含主色以及辅助色。这些颜色基本可以满足系统设计中对于颜色的需求

| 参数      | 值                  | 色块                                                                                    |
| --------- | ------------------- | --------------------------------------------------------------------------------------- |
| primary   | #ea4335             | <div style="background:#ea4335;width:200px;height:50px"></div>                          |
| secondary | #ffd100             | <div style="background:#ffd100;width:200px;height:50px"></div>                          |
| white     | #ffffff             | <div style="background:#ffffff;width:200px;height:50px;border:1px solid #f5f5f5"></div> |
| black     | #1f1f1f             | <div style="background:#1f1f1f;width:200px;height:50px"></div>                          |
| spruce    | #666666             | <div style="background:#666666;width:200px;height:50px"></div>                          |
| stone     | #a3a3a3             | <div style="background:#a3a3a3;width:200px;height:50px"></div>                          |
| frost     | #dddddd             | <div style="background:#dddddd;width:200px;height:50px"></div>                          |
| daisy     | #f0f4f5             | <div style="background:#f0f4f5;width:200px;height:50px"></div>                          |
| black16   | rgba(0, 0, 0, 0.16) | <div style="background:rgba(0, 0, 0, 0.16);width:200px;height:50px"></div>              |
| black30   | rgba(0, 0, 0, 0.3)  | <div style="background:rgba(0, 0, 0, 0.3);width:200px;height:50px"></div>               |

### 间距

间距，常规规格不适用的情况下，可以通过加减「基础间距」的倍数，或者增加元素来拉开信息层次。

如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。

| 参数 | 值     |
| ---- | ------ |
| xs   | 8      |
| sm   | 8 \* 2 |
| md   | 8 \* 3 |
| lg   | 8 \* 4 |
| xl   | 8 \* 5 |

### 字体

在视觉展现上能够用尽量少的样式去实现设计目的。避免毫无意义的使用大量字阶、颜色、字重强调视觉重点或对比关系。

| 参数          | 值                                                                    |
| ------------- | --------------------------------------------------------------------- |
| family        | '-apple-system, BlinkMacSystemFont, "Helvetica", "Segoe", sans-serif' |
| weight.normal | 'normal'                                                              |
| weight.medium | 600                                                                   |
| weight.bold   | 'bold'                                                                |
| size.xs       | 12                                                                    |
| size.sm       | 14                                                                    |
| size.md       | 20                                                                    |
| size.lg       | 24                                                                    |
| size.xl       | 30                                                                    |
| lineHeight.sm | 20                                                                    |
| lineHeight.md | 28                                                                    |
| lineHeight.lg | 33                                                                    |

### 音乐播放器组件的样式

应该是音乐播放器的样式

| 参数              | 值      |
| ----------------- | ------- |
| radius            | 3       |
| animationDuration | '0.25s' |
| inputs.padding    | 10      |
| avatar.sm         | 24      |
| avatar.md         | 48      |
| avatar.lg         | 72      |
