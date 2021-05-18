## Grid 删格系统

24 栅格系统。

## 何时使用

- 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 删格布局

删格会把一行分为 24 格
通过设置 Col 的 span 属性来改变每个块所占的比例
通过设置 Row 的 gutter 属性来改变内容块直接的间距

```jsx
import React from 'react';
import { Provider, Row, Col } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Row gutter={24}>
        <Col span={12}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={12}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={8}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={8}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={8}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
      </Row>

      <Row gutter={12}>
        <Col span={6}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={6}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
      </Row>

      <Row gutter={6}>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
        <Col span={4}>
          <div style={{ background: '#aaa', height: 60 }}></div>
        </Col>
      </Row>
    </Provider>
  );
};
```

## API

### Row

| 参数   | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| gutter | 内容块的间距 | number | -      |

### Col

| 参数 | 说明         | 类型         | 默认值 |
| ---- | ------------ | ------------ | ------ |
| span | 内容块的间距 | 内容块的占比 | -      |
