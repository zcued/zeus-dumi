## Cascader 级联选择

级联选择框。

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

```jsx
import React, { useState } from 'react';
import { Provider, Cascader } from 'zeus-ui';

export default () => {
  const area = [
    {
      value: '11',
      label: '北京市',
      children: [
        {
          value: '1101',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
          ],
        },
      ],
    },
    {
      value: '12',
      label: '天津市',
      children: [
        {
          value: '1201',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
          ],
        },
      ],
    },
  ];

  const [value, setValue] = useState([]);

  return (
    <Provider style={{ background: '#364d79', height: '160px' }}>
      <Cascader
        options={area}
        value={value}
        placeholder="请选择省 / 市 / 区"
        level={3}
        title={['省', '市', '区/县']}
        onChange={v => setValue(v)}
      />
    </Provider>
  );
};
```

## API

| 参数           | 说明                                                       | 类型                | 默认值                  |
| -------------- | ---------------------------------------------------------- | ------------------- | ----------------------- |
| options        | 可选项数据源                                               | Array&lt;Option&gt; | [{label: '',value: ''}] |
| value          | 指定选中项                                                 | Array&lt;any&gt;    | []                      |
| placeholder    | 输入框占位文本                                             | string              | -                       |
| disabled       | 禁用                                                       | boolean             | -                       |
| title          | 标题                                                       | Array&lt;string&gt; | -                       |
| level          | 层级                                                       | number              | -                       |
| listWidth      | 选择项宽度                                                 | number              | 120                     |
| listHeight     | 选择项高度                                                 | number              | 240                     |
| changeOnSelect | 点击即触发 onChange 事件,否则点击最后一级才会触发 onChange | boolean             | false                   |
| displayRender  | 自定义禁用是的 label 渲染                                  | Function            | -                       |
| onChange       | 选择完成后的回调                                           | Function            | -                       |
| onToggle       | 面板打开关闭时触发事件                                     | Function            | -                       |
