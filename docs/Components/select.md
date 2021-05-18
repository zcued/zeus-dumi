## Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 选项

在多个选项中，选择一个确切的值作为选项的值，以接受用户的输入信息

```jsx
import React from 'react';
import { Provider, Select } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <space style={{ padding: '20px', width: '300px' }}>
        <Select
          options={[
            { label: '佐助', value: 1 },
            { label: '鸣人', value: 2 },
            { label: '卡卡西', value: 3 },
          ]}
          value={2}
        />
      </space>
    </Provider>
  );
};
```

### 及联选项

在多个选项中，选择一个确切的值作为选项的值，以接受用户的输入信息

```jsx
import React, { useState, useEffect } from 'react';
import { Provider, Select } from 'zeus-ui';

export default () => {
  const [privince, setPrivince] = useState('北京');
  const [city, c] = useState('北京');

  const opts = [
    {
      label: '陕西',
      value: '陕西',
      cities: [
        { label: '西安', value: '西安' },
        { label: '榆林', value: '榆林' },
      ],
    },
    {
      label: '北京',
      value: '北京',
      cities: [{ label: '北京', value: '北京' }],
    },
    {
      label: '河南',
      value: '河南',
      cities: [
        { label: '洛阳', value: '洛阳' },
        { label: '郑州', value: '郑州' },
      ],
    },
  ];

  const cityOpts = opts.find(item => item.value === privince);

  const changePrivince = opt => {
    setPrivince(opt.value);
  };

  const changeCity = opt => {
    setPrivince(opt.value);
  };

  return (
    <Provider>
      <space style={{ padding: '20px', width: '300px' }}>
        <Select options={opts} value={privince} onChange={changePrivince} />
      </space>
      <space style={{ padding: '20px', width: '300px' }}>
        <Select
          options={cityOpts ? cityOpts.cities : []}
          value={city}
          onChange={changeCity}
        />
      </space>
    </Provider>
  );
};
```

## API

| 参数         | 说明                                                   | 类型     | 默认值 |
| ------------ | ------------------------------------------------------ | -------- | ------ |
| options      | 选项，必须要有 label 和 value 两个属性的对象组成的数组 | array    | -      |
| value        | 当前的选择的选项                                       | string   | -      |
| defaultValue | 默认选中的选项                                         | string   | -      |
| onChange     | 选项发生改变时                                         | Function | -      |
