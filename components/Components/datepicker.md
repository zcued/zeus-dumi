## DatePicker 日期选择框

输入或选择日期的控件。

## 何时使用

- 当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 代码演示

### 日期选择器

```jsx
import React, { useState } from 'react';
import { Provider, DatePicker, RangePicker } from 'zeus-ui';

export default () => {
  const [value, setValue] = useState(null);

  return (
    <Provider>
      <space>
        <DatePicker
          placeholder="请选择日期"
          disabledDate="2021-5-11"
          onChange={obj => setValue(obj.value)}
        />
      </space>
      <p>选择的日期是：{value}</p>
    </Provider>
  );
};
```

### 日期段选择器

```jsx
import React, { useState } from 'react';
import { Provider, DatePicker, RangePicker } from 'zeus-ui';

export default () => {
  const [value, setValue] = useState({ form: null, to: null });

  return (
    <Provider>
      <space>
        <RangePicker
          startPlaceholder="开始时间"
          endPlaceholder="结束时间"
          defaultValue={{
            from: '2021-06-22',
            to: '2021-06-25',
          }}
          onChange={obj => setValue({ ...obj })}
        />
      </space>
      <p>
        选择的日期是：{value.from} —— {value.to}
      </p>
    </Provider>
  );
};
```

## API

### DatePicker

| 参数         | 说明                         | 类型       | 默认值 |
| ------------ | ---------------------------- | ---------- | ------ |
| defaultValue | 显示的默认值                 | dateString | -      |
| onChange     | 日期发生改变时的回调函数     | Function   | -      |
| disabledDate | 禁用的日期(该日期之前不可选) | dateString | -      |
| placeholder  | 输入框的 placeholder         | string     | -      |

### RangePicker

| 参数             | 说明                         | 类型                         | 默认值                               |
| ---------------- | ---------------------------- | ---------------------------- | ------------------------------------ |
| defaultValue     | 显示的默认值                 | { form: string, to: string } | -                                    |
| startPlaceholder | 开始日期输入框的 placeholder | string                       | -                                    |
| endPlaceholder   | 结束日期输入框的 placeholder | string                       | -                                    |
| onChange         | 日期发生改变时的回调函数     | Function                     | ({ form: string, to: string })=>void |
