## Carousel 走马灯

一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

```jsx
/**
 * background: '#f6f7f9'
 */

import React from 'react';
import { Provider, Carousel, Button } from 'zeus-ui';

export default () => {
  let slider = null;
  return (
    <Provider style={{ background: '#364d79', height: '160px' }}>
      <Carousel ref={el => (slider = el)} autoplay={true}>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </Carousel>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button onClick={() => slider.prev()}>prev</Button>
        <Button onClick={() => slider.next()}>next</Button>
      </div>
    </Provider>
  );
};
```

## API

该组件封装自 react-slick，部分没有说明的参数和没有默认值的参数可以参考 react-slick 文档https://react-slick.neostack.com/docs/api
| 参数 | 说明 | 类型 | 默认值 |
| -------------- | ------------------- | ---------------------------------- | ------ |
| effect | --- | 'scrollx'&#124;'fade' | - |
| dots | 是否显示面板指示 | boolean | true|
| vertical | 图标大小 | boolean | - |
| autoplay | 是否自动切换 | boolean | - |
| easing | 动画效果 | string | - |
| beforeChange | 切换面板前的回调 | (from: number, to: number) => void | - |
| afterChange | 切换面板后的回调 | (current: number) => void | - |
| style | style 样式 | React.CSSProperties | - |
| prefixCls | --- | string | - |
| accessibility | --- | boolean | - |
| nextArrow | 自定义面板右箭头 | HTMLElement&#124;any | - |
| prevArrow | 自定义面板左箭头 | HTMLElement&#124;any | - |
| pauseOnHover | 悬浮时暂停切换 | boolean | - |
| className | 自定义 class 样式 | string | - |
| adaptiveHeight | 高度自适应 | boolean | - |
| arrows | 是否显示切换箭头 | boolean | - |
| autoplaySpeed | 播放速度 | number | 5000 |
| centerMode | --- | boolean | - |
| centerPadding | --- | string&#124;any | - |
| cssEase | --- | string&#124;any | - |
| dotsClass | 指示点的 class 样式 | string | - |
| draggable | --- | boolean | - |
| fade | --- | boolean | - |
| focusOnSelect | --- | boolean | - |
| infinite | --- | boolean | true |
| initialSlide | 初始面板 | number | - |
| lazyLoad | 懒加载 | boolean | - |
| rtl | --- | boolean | - |
| slide | --- | string | - |
| slidesToShow | --- | number | 1 |
| slidesToScroll | --- | number | 1 |
| speed | --- | number | 500 |
| swipe | --- | boolean | - |
| swipeToSlide | --- | boolean | - |
| touchMove | --- | boolean | - |
| touchThreshold | --- | number | - |
| variableWidth | --- | boolean | - |
| useCSS | --- | boolean | - |
| slickGoTo | --- | number | - |
