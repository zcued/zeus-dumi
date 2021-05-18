## Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 代码演示

```jsx
import React, { useState } from 'react';
import { Provider, Pagination } from 'zeus-ui';

export default () => {
  const [current, setCurrent] = useState(1);

  return (
    <Provider>
      <space>
        <Pagination
          current={current}
          total={20}
          pageSize={10}
          onChange={e => setCurrent(e)}
        />
      </space>
      <Pagination defaultCurrent={1} total={25} pageSize={10} />
    </Provider>
  );
};
```

## API

| 参数           | 说明                 | 类型     | 默认值                  |
| -------------- | -------------------- | -------- | ----------------------- |
| defaultCurrent | 默认当前页的初始页数 | number   | -                       |
| current        | 当前页码             | number   | 1                       |
| pageSize       | 每页的条数           | number   | -                       |
| onChange       | 页码变化触发的回调   | Function | (current:number)=>void) |
| total          | 总条数               | number   | -                       |
