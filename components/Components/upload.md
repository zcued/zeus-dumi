## Upload 上传

文件选择上传。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

## 代码演示

```jsx
import React from 'react';
import { Provider, Upload } from 'zeus-ui';

export default () => {
  return (
    <Provider>
      <Upload />
    </Provider>
  );
};
```

## API

组件内容为原生 input,type="file"
