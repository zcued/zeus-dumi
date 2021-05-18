## FormControl 表单

表单项样式组件

## 何时使用

- 用于创建一个实体或收集信息。

## 代码演示

### 表单样式

常见的表单是由多个部分组成，包括文字提示，错误提示，标签，以及用来接受用户信息的元素包括输入框，选项卡，复选框

```jsx
import React, { useState } from 'react';
import { Provider, Form, FormControl, Input, Button } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Form>
        <FormControl require label="姓名" message="请填写正确的姓名">
          <Input />
        </FormControl>
        <FormControl
          error
          label="年龄"
          message="请填写正常人的年龄"
          helper="请输入真实年龄"
        >
          <Input type="number" />
        </FormControl>
        <FormControl>
          <Button style={{ marginLeft: 156 }} type="primary">
            提交
          </Button>
          <Button style={{ marginLeft: 16 }}>取消</Button>
        </FormControl>
      </Form>
    </Provider>
  );
};
```

## API

### From

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| width | 表单宽度 | number | -      |

### FormControl

| 参数       | 说明           | 类型    | 默认值 |
| ---------- | -------------- | ------- | ------ |
| error      | 是否填写有误   | boolean | false  |
| disabled   | 禁用表单 label | boolean | false  |
| label      | 表单项名称     | string  | -      |
| labelWidth | 标签宽度       | number  | -      |
| require    | 必须标志       | boolean | false  |
| helper     | 提示语         | string  | -      |
