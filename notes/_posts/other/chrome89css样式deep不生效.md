---
title: chrome 89以上版本 css 样式 /deep/ 不生效
date: 2022-02-16
tags:
summary: 
comment:
  title: 
---


chrome 89以上版本 嵌套/deep/会失效，只能使用一层deep

```css
/* 下面的样式不会生效 */
/deep/ .a {
  ...
  /deep/ .b {
    ...
  }
}

/* 只有一层的deep是没问题的 */
/deep/ .a {
  ...
}
/deep/ .b {
  ...
}
```

#### 解决方案（vue中）：

1. 采用scoped的样式
   * 不用deep
   * deep嵌套最多一层，去掉多层的deep嵌套（注意样式覆盖，外层加个类名）
2. 全局的样式不需要使用/deep/
