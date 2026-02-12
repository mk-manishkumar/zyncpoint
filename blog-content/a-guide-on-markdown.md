---
title: "A Guide on Markdown"
slug: "a-guide-on-markdown"
excerpt: "Markdown is a lightweight markup language with a plain text formatting syntax. So, like HTML, it's a markup language, but we don't use tags or anything like that here. It's a very readable syntax, and it can be converted into HTML/XHTML as well as ot..."
tag: "Markdown"
date: "2026-02-12T03:37:28.375Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770867403088/51b4779e-a6f7-4e4e-93be-74b2a86771be.png"
---

Markdown is a lightweight markup language with a plain text formatting syntax. So, like HTML, it's a **markup language,** but we don't use tags or anything like that here. It's a very readable syntax, and it can be converted into HTML/XHTML as well as other formats. Its main purpose is readability. The creators of markdown basically wanted documents to look like plain text documents without any HTML tags or anything like that.

It's widely used for Readme files (GitHub) and documentation. It's also used for forums, blogpost, static site generators, etc. Markdown uses `.md` as its extension.

# Cheatsheet for Markdown

## Headings

To give the headings, we just need to add `#` and a space just before the heading. Similar to HTML headings, Markdown also has 6 levels of headings. In markdown, as we decrease the size ofthe heading, we need to add more `#` before it.

```c
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
```

It will give the following output :

![01.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658601670651/t8mCUtTMF.jpg align="left")

## Italics

To make the text *italics* we have two options. Either we need to use one **asterisk (\*)** symbol on both sides of the text or one **underscore(\_)** symbol on both sides of the text.

```c
    *text*
```

OR

```c
    _text_
```

Both of them will give the following output :

![02.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658602070365/y6jIKdxmm.jpg align="left")

## Strong or Bold

To make the text **bold,** we have two options. Either we need to use two **asterisks (\*)** symbol both sides of the text or two **underscores (\_)** symbol both sides of the text.

```c
    *Bold text*
```

OR

```c
    _Bold text_
```

Both of them will give the following output :

![03.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658602326843/RC4T_8x9B.jpg align="left")

## Strikethrough

To make the text <s>strikethrough,</s> we need to use a double **tilde(~)** on both sides of the text.

```c
    ~~text~~
```

This will give the following output:

![04.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658602638863/ShhCPKleC.jpg align="left")

## Horizontal Rule (Line)

To give horizontal lines, we have two options. Either we use three **hyphen(-)** symbol or three **underscore (\_)** symbol. It will generate a horizontal line just like this

![05.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658602881237/GOVk0E-Fr.jpg align="left")

It's equivalent to `<hr>` tag of HTML.

## Block Quote

To write blockquotes, we use **the greater-than (&gt;)** symbol just before the text.

```c
    >There is no substitute of hard work.
```

OUTPUT :

![06.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658603654566/L_8YDqirP.jpg align="left")

## Link

To display the link, we need to use **brackets \[ \]** in which the text part will be written and just after that **parenthesis ( )** will be used in which the link will be written.

```c
    [Google](https://www.google.co.in/)
```

OUTPUT :

![07.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658604110590/6iUGp3QF-.jpg align="left")

We can add a **hover** feature on the text so that when we hover over the text, it displays the title of that website. For that, we just need to write the title of the website just after the link inside double quotes inside the parentheses. There should be a space between the link and the title of the website.

```c
    [Google](https://www.google.co.in "Google")
```

OUTPUT :

![08.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658604829033/0RLhTNMxNt.jpg align="left")

As you can see, I have hovered the cursor over the text, and it's showing the title of the website, which in this case is Google.

## Image

To insert an image, the syntax is similar to the link. We just need to add the **exclamation (!)** symbol before the text bracket.

```c
    ![Google](https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
```

OUTPUT :

![09.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658605192020/1vI6CSb2a.jpg align="left")

> NOTE : Text inside the bracket is the alternate text which will only be visible if image won't be visible by any chance.

## Ordered List

To write an ordered list, we just need to use numbers.

```c
    1. Item 1
    2. Item 2
    3. Item 3
        1. Nested Item1
        2. Nested Item2
    4. Item 4
    5. Item 5
```

OUTPUT :

![10.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658606045293/_huuhr2FI.jpg align="left")

## Unordered List

To write an ordered list, we need to use **astreisk (\*)** or a **hyphen (-)** symbol.

```c
    - item A
    - item B
    - item C
        * nested item1
        * nested item2
    - item D
    - item E
```

OUTPUT :

![11.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658606541177/7sLwiWIHT.jpg align="left")

## Inline Codeblock

We use the **backtick (\`)** symbol to write single-line code or some specific tags.

```c
    `<p> All is Well ! </p>`
```

OUTPUT :

![12.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658606847245/YjbnilKWA.jpg align="left")

## Code Snippets

We use the **backtick (\`)** symbol 3 times to write multi-line code snippets.

`console.log("Hello World");`

OUTPUT :

![13.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658607087721/UuViHSK4L.jpg align="left")

We can insert the name of that language whose code snippets have been written to give it a nice effect.

Example :

`Javascript function myFunction(p1, p2) { return p1 * p2; }`

OR

`Python def my_function(): print("Hello from a function")`

It will give the following output :

![15.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658636690842/V8LsctRCW.jpg align="left")

So, adding the language name above makes it look cooler and more colourful.

## Task Lists

To create task lists, we need to use the **hyphen (-)** symbol, then **bracket \[\]** inside which, if our task is incomplete, then put `x` it there, or if it's complete, then we need to just leave it empty. And after the bracket, we need to just put the name of the task,

```c
    - [x] Task 1
    - [x] Task 2
    - [ ] Task 3
```

OUTPUT :

![16.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658637280783/M2SebL7jm.jpg align="left")

> NOTE : There should be a space between **hyphen** and **bracket**.

## Tables

For tables, the syntax is kind of tough. That's the reason it's not recommended. But yeah, it definitely gives a nice outlook.

```c
    | Syntax      | Description | Test Text     |
    | :---        |    :----:   |          ---: |
    | Header      | Title       | Here's this   |
    | Paragraph   | Text        | And more      |
```

OUTPUT :

![17.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658637697047/tsH35JnFI.jpg align="left")

So, that's it as of now. I know there are more features available for markdown, but this much would be more than enough to work on markdown files.
