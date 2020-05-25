# Three.js中的相机正交投影和透视投影
在Three.js中，要渲染物体到网页中，我们需要三个东西：`场景（scene）`、`相机（camera）`和渲染器`（renderer）`。有了这三样东西，才能将物体渲染到网页中去， 今天先来掰扯一下相机。

## 认识相机
在Threejs中相机的表示是THREE.Camera，它是相机的抽象基类，其子类有两种相机:

* 正投影相机 `THREE.OrthographicCamera`
* 透视投影相机 `THREE.PerspectiveCamera`

## 两种相机的区别

* 透视投影相机 ： 远处的物体比近处的物体小
* 正投影相机 ： 远近高低比例都相同

## 正投影相机

> 形成的图像都是标准的尺寸大小，不会产生偏差。一般使用在建模，工业上面。  
正交投影照相机（Orthographic Camera）设置起来较为直观，它的构造函数是：

```jsx
THREE.OrthographicCamera(left, right, top, bottom, near, far)
```

* **left**：左平面距离相机中心点的垂直距离。从图中可以看出，左平面是屏幕里面的那个平面。
* **right**：右平面距离相机中心点的垂直距离。从图中可以看出，右平面是屏幕稍微外面一点的那个平面。
* **top**：顶平面距离相机中心点的垂直距离。上图中的顶平面，是长方体头朝天的平面。
* **bottom**：底平面距离相机中心点的垂直距离。底平面是头朝地的平面。
* **near**：近平面距离相机中心点的垂直距离。近平面是左边竖着的那个平面。
* **far**：远平面距离相机中心点的垂直距离。远平面是右边竖着的那个平面。

这六个参数分别代表正交投影照相机拍摄到的空间的六个面的位置，这两个面围成一个长方体，我们称其为视景体`（Frustum）`。只有在视景体内部`（下图中的灰色部分）`的物体才可能显示在屏幕上，而视景体外的物体会在显示之前被裁减掉。

**照相机中心点**

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled)

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%201](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%201)

## 透视投影相机

> 透视投影相机更接近人眼的观看效果，有`“近大远小”`的效果。 应用比较广泛，只要不是正交的应用，基本上使用透视投影就好了。  
透视投影照相机（Perspective Camera）的构造函数是：

```jsx
THREE.PerspectiveCamera(fov, aspect, near, far)
```

* `视角fov`：这个比较难题解, 就好比眼睛睁开的角度,即, 视角的大小, 如果设置为0, 相当你闭上眼睛了, 所以什么也看不到, 如果为180, 那么可以认为你的视界很广阔,但是在180度的时候，往往物体很小，因为他在你的整个可视区域中的比例变小了， 你看到的东西越多， 显示的东西就越小
* `近平面near`：照相机到视景体最近的距离
* `远平面far`： 照相机到视景体最元的距离，通常far 比 near 大， 不允许有负数
* `纵横比aspect`：实际窗口的纵横比，即宽度除以高度。这个值越大，说明你宽度越大

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%202](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%202)

## 实列
最简单的例子学习设置透视投影照相机

下图 fov 为 50

接下来，我们来看下fov的改变对渲染效果的影响。我们将原来的50改为120，得到这样的效果：

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%203](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%203)

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%204](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%204)

**为什么正方体显得更小了呢？**

我们从下面的侧视图来看，虽然正方体的实际大小并未改变，但是将照相机的竖直张角设置得更大时，视景体变大了，因而正方体相对于整个视景体的大小就变小了，看起来正方形就显得变小了。

[Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%205](Three%20js%20f230d00dffa8449587b941ccf42fa7e6/Untitled%205)

**DEMO**

[https://codepen.io/tangxiaomi/pen/bzPBwW](https://codepen.io/tangxiaomi/pen/bzPBwW)

> [three.js透视投影照相机](https://www.cnblogs.com/Yimi/p/6007718.html)  
> [Three.js照相机的正交投影和透视投影](https://blog.csdn.net/qq_30100043/article/details/75598407)  
> [三维空间的观察](http://www.hewebgl.com/article/getarticle/59)  

#前端/JavaScript