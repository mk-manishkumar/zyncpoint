---
title: "How CSS Positioning Works"
slug: "how-css-positioning-works"
excerpt: "Before learning about how CSS positioning works let's understand why positioning is important. As you know, by default, HTML elements appear on the webpage in the same sequence as they are in the HTML code. HTML doesn't have that high level of functi..."
date: "2022-07-23T14:48:34.571Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1658587572598/LxJ4h9st2.png"
---

Before learning about how CSS positioning works let's understand why positioning is important. As you know, by default, HTML elements appear on the webpage in the same sequence as they are in the HTML code. HTML doesn't have that high level of functionality with which it can set the position of element with precision.

To overcome this obstacle, we use a CSS property **position**. The position property specifies the type of positioning method used for an element. There are 5 values of CSS position property :

1. Static
2. Relative
3. Absolute
4. Fixed
5. Sticky

To determine the final location of positioned elements, there are 4 properties : **top, right, bottom and left**. These properties will not work unless the position property is set first. They also work differently depending on the position value. Let's go through each value of CSS Position properties.

# Static 

HTML elements are positioned static by default. Elements appear according to the normal flow. In this position value, those four properties top, right, bottom, left will not work.

# Relative

It positions the element relative to it's normal position and will leave a gap at it's normal position. In this position value top, right, bottom, left will work. To understand it more precisely let's see some code.

This is the HTML code which I am going to use for relative, absolute and fixed position.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CSS Position</title>

        <!-- CSS -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

        <div class="container">
            <div class="box" id="box1"></div>
            <div class="box" id="box2"></div>
            <div class="box" id="box3"></div>
            <div class="box" id="box4"></div>
        </div>
        
    </body>
    </html>

```

Similarly this is the CSS code which I am going to use for relative, absolute and fixed position.

```css
.container{
    height: 640px;
    background-color: #383CC1;
    margin: 30px;
}

.box{
    display: inline-block;
    border: 2px solid black;
    width: 250px;
    height: 250px;
    margin: 30px 20px;
    background-color: #F7CD2E;
}

```

This will generate the webpage shown in below picture.



![01.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658512706182/aLW0wf_6J.jpg align="left")

As you can see in the above picture there are four yellow boxes inside a blue container which itself is inside body of the webpage. Now let's target the third box by setting it's position **relative**.

```css
#box3{
    position: relative;
    top: 30px;
    left: 90px;
}

```

So I set it's position to relative and moved it from its original position by giving top value 30px and left value 90px. So the third box moved relative to it's original position as you can see in below picture.


![02.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658513895898/YKNw8DS-C.jpg align="left")

So, relative position changes the position of an element from it's original position and works relative to it.

# Absolute

It positions the element relative to the first parent. If an absolute positioned element has no positioned ancestor, it uses the document body, and moves along with the page scrolling.

Let's again target the third box by changing it's position property to absolute.

```css
#box3{
    position: absolute;
    top: 60px;
    left: 90px;
}
```
So I changed it's position to absolute and moved it 60px from top and 90px from left. It will create the following changes.



![03.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658514716827/h0XqVk9UU.jpg align="left")

Now, what's happening here is that the third box has not changed it's position from it's original place instead it changed it's position with respect to container element (blue box). It moved away from top by 60px but not from its original position but from the border of container. If that container was not there then it would have chosen the **document body** as parent element. So, that's how absolute position property works.

# Fixed

It positions the element relative to the browser window. Elements with position **fixed** always stays in the same place even if the page is scrolled. Let's understand by changing the position property of third box to fixed. But before doing that, we have to increase the height of screen to make the webpage scrollable. So let's change it's height from 640px to 1640px.


![04.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658515544697/A13SiHYRx.jpg align="left")

As you can see, scroll bar has appeared in the right side of the screen. Now, let's make the position of third box fixed.

```css
#box3{
    position: fixed;
    top: 60px;
    left: 90px;
}

```


![05.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658515887399/ndbfEJ0ot.jpg align="left")

As you can see, the moment I changed it's position to fixed, it changed it's position relative to browser window.


![06.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658516156988/eHwXiRAGn.jpg align="left")


![07.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658516169177/WVi7e1DSQ.jpg align="left")

As you can see, the third box got fixed to it's changed location relative to it's browser window. No matter how much we scroll, it won't move even by one pixel. That's how **fixed position property works**.

# Sticky

It allows the element to stick when the scroll reaches to a certain point. It keeps element stick at the top or at any desired location as per the given value. The best part is, since it acts as relative position element, we no longer need to apply margin to the stuff that comes after it.


![10.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658584581688/AYWp_Dcn7.jpg align="left")

As you can see in the above picture, navigation bar is just below that picture. Now we will change the position property of navigation to **sticky**.

```css
.nav{
    position: sticky;
    top: 0;
}

```

![11.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658584864434/5Zeo8KsTx.jpg align="left")

As you can see in the above picture, after giving the position property of nav element to sticky, the moment it touched the top of the document body it got stuck at the top. And that happened because I have set the value of `top` 0.  [Click on this link](https://youtu.be/OjI_jLLkR_Y) to see it functioning in video form.

One thing to note about sticky position is that not all browsers currently support sticky position. Only around 90% of browsers support it and that is only if you prefix it as well. In order to prefix the element you need to use these prefixes.

```css
.nav{
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticly;
    position: -o-sticky;
    top: 0;
}

```

Now, to get around the remaining 10% of browsers that don't support it at all even with the prefix, what you need to do is to add support property for your CSS.

```css
@supports (position: sticky){
    .nav{
        position: sticky;
        top: 0;
    }
}

```

After doing this, those browsers which don't support sticky elements will just get a relative element just like normal.

So, these are the five CSS position properties which come so handy for us while designing the webpage.
