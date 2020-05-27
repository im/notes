---
title: 标签
---

# 标签

::: tip
markdown 文件里面都可以使用
:::
## 基础用法

<br>
<tag text="标签一" />
<tag type="success" />
<tag type="info" />
<tag type="warning" />
<tag type="danger" />

`由type属性来选择tag的类型，也可以通过color属性来自定义背景色。`

```html
<tag text="标签一" />
<tag type="success" />
<tag type="info" />
<tag type="warning" />
<tag type="danger" />
```

## 不同尺寸
<br>
<tag text="标签一" />
<tag size="medium" text="标签二" />
<tag size="small" text="标签三" />
<tag size="mini" text="标签四" />

`额外的尺寸：medium、small、mini，通过设置size属性来配置它们。`

```html
<tag text="标签一" />
<tag size="medium" text="标签二" />
<tag size="small" text="标签三" />
<tag size="mini" text="标签四" />
```

## 不同主题
`Tag 组件提供了三个不同的主题：dark、light 和 plain， 通过设置effect属性来改变主题，默认为 light`
<br>

light
<tag text="标签一" />
<tag type="success" text="标签二"  />
<tag type="info" text="标签三"  />
<tag type="warning" text="标签四"  />
<tag type="danger" text="标签五"  />

dark
<tag text="标签一" effect="dark" />
<tag type="success" text="标签二" effect="dark" />
<tag type="info" text="标签三" effect="dark" />
<tag type="warning" text="标签四" effect="dark" />
<tag type="danger" text="标签五" effect="dark" />

plain
<tag text="标签一" effect="plain" />
<tag type="success" text="标签二" effect="plain" />
<tag type="info" text="标签三" effect="plain" />
<tag type="warning" text="标签四" effect="plain" />
<tag type="danger" text="标签五" effect="plain" />



```html
<!-- light -->
<tag text="标签一" />
<!-- dark -->
<tag text="标签一" effect="dark" />
<!-- plain -->
<tag text="标签一" effect="plain" />
```
