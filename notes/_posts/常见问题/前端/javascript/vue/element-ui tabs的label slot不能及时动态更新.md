---
title: element-ui tabs的label slot不能及时动态更新
date: 2022-07-01
tags:
  - 常见问题 
  - 前端 
  - javascript/vue 
 
---

# element-ui tabs的label slot不能及时动态更新
[https://github.com/ElemeFE/element/issues/2934](https://github.com/ElemeFE/element/issues/2934)


## 问题
```jsx
var Main = {
    template: `
<el-tabs type="border-card">
 <el-tab-pane :name="index" v-for="(item, index) in tabs">
     <span slot="label">{{ item.name }}</span>
     <div>
     	{{ item.name }}
      <input type="text" v-model="item.name" name="name"/>
     </div>
  </el-tab-pane>
</el-tabs>
  `,
    data() {
        return {
            tabs: [
                {
                    name: 'tab1',
                    content: 'Content Tab1',
                },
                {
                    name: 'tab2',
                    content: 'Content Tab2',
                },
                {
                    name: 'tab3',
                    content: 'Content Tab3',
                },
            ],
        }
    },
}

new Vue({
    el: '#app',
    render: (h) => h(Main)
})

```

## 解决方法
```
<el-tabs>, like <el-tabs ref="tabs">
```

```
this.$refs.tabs.$refs.nav.$forceUpdate();
```

