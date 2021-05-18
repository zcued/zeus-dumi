## Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失。

## 代码演示 (点击复制图标代码)

```jsx
import React, { useState } from 'react';
import { Provider, Icon } from 'zeus-ui';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default () => {
  const copySuccess = text => alert(`复制成功:'${text}'`);
  return (
    <Provider>
      <CopyToClipboard text={'<Icon glyph="grow" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="grow" />
      </CopyToClipboard>
      <Icon style={{ margin: 50 }} glyph="album-tag" />
      <CopyToClipboard text={'<Icon glyph="album-tag" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="album-tag" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="album-tag-sm" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="album-tag-sm" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="list" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="list" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="hf-pause-circle" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="hf-pause-circle" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="hf-play-circle" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="hf-play-circle" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="hf-play" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="hf-play" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="hf-pause" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="hf-pause" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="hf-check" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="hf-check" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="move-folder" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="move-folder" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="more" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="more" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="design" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="design" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="album" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="album" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="download" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="download" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="collect" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="collect" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="collected" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="collected" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="copy" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="copy" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="edit" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="edit" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="top" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="top" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="cart" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="cart" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="refresh" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="refresh" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="delete" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="delete" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="zoom-in" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="zoom-in" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="camera" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="camera" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="crop" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="crop" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="add" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="add" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="share" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="share" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="import" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="import" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="statistics" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="statistics" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="arrow-down-collapse" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="arrow-down-collapse" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="location" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="location" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="move" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="move" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="move-folder" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="move-folder" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="similar" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="similar" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="account" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="account" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-down" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-down" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-down-light" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-down-light" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-down-sm" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-down-sm" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-down-shim" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-down-shim" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-right" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-right" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-left" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-left" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="angle-right-light" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="angle-right-light" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="arrow-alt-down" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="arrow-alt-down" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="plus" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="plus" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="minus" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="minus" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="close" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="close" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="enter" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="enter" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="search" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="search" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="rmb" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="rmb" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="download-image" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="download-image" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="certificate" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="certificate" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="invoice" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="invoice" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="link" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="link" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="wechat" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="wechat" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="qq" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="qq" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="manage-plus" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="manage-plus" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="share-plus" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="share-plus" />
      </CopyToClipboard>
      <CopyToClipboard
        text={'<Icon glyph="download-plus" />'}
        onCopy={copySuccess}
      >
        <Icon style={{ margin: 50 }} glyph="download-plus" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="check" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="check" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="like" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="like" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="pause" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="pause" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="play" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="play" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="question" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="question" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="warning" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="warning" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="open-eye" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="open-eye" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="close-eye" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="close-eye" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="manage" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="manage" />
      </CopyToClipboard>
      <CopyToClipboard text={'<Icon glyph="email" />'} onCopy={copySuccess}>
        <Icon style={{ margin: 50 }} glyph="email" />
      </CopyToClipboard>
    </Provider>
  );
};
```

## API

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| glyph | 图标类型 | string | -      |
| size  | 图标大小 | number | -      |
