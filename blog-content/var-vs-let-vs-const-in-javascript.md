---
title: "Var vs Let vs Const in JavaScript"
slug: "var-vs-let-vs-const-in-javascript"
excerpt: "var, let and const are just three keywords which are used to declare variables in JavaScript. Now, before deep diving into these 3 keywords, let's understand what a variable is. Variables are the kind of containers where values get stored. It acts li..."
tags: "JavaScript, var let const, var let const in javascript, javascript variables"
tagSlugs: "javascript, var-let-const, var-let-const-in-javascript, javascript-variables"
date: "2026-02-13T06:54:28.799Z"
publishedAt: "2022-09-21T13:43:27.199Z"
updatedAt: "2026-02-13T06:54:28.799Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770965650619/b0a9d20f-e0c5-4fbf-a326-920218941579.png"
url: "https://manishmk.hashnode.dev/var-vs-let-vs-const-in-javascript"
author: "Manish Kumar"
authorUsername: "ManishMK"
authorProfilePicture: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754728990444/f59c3826-4a73-4075-9e55-7585e2283f0f.jpeg"
readTimeInMinutes: 5
reactionCount: 1
responseCount: 0
views: 58
hashnodeId: "632b14ff29f9bcdf820d4da7"
---

var, let and const are just three **keywords** which are used to declare variables in JavaScript. Now, before deep diving into these 3 keywords, let's understand what a **variable** is. Variables are the kind of containers where values get stored. It acts like a box which occupies some space when it's declared, and then the value gets stored in it.

![01.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663749435032/Xd4pUFrTB.jpg align="left")

# Scope in JS

Now, before knowing which keyword is used in which scenarios, let's first understand what scope is. **Scope** basically means a definite range within which a variable is accessible. Primarily, in JavaScript, there are two scopes - **Global Scope** and **Local Scope**. Global Scope comprises the whole document, inside which all variables, objects, functions, etc., are declared. Variables declared inside the global scope can be accessed throughout the program. **Local Scope** generally means the range which is created while defining the function. And variables declared inside a function have access only inside that particular function. If you try to use it outside the function, it will give a **Reference Error**.

## Function Scope and Block Scope

Now, the local scope is also divided into two scopes - **Function Scope** and **Block Scope**. If a variable is declared inside a **function scope,** then it can be accessed throughout that particular function. Meanwhile, block scope has its demarcation. When variables are declared inside an *if condition* or inside a *loop,* and they have their access within that particular block only, then the variable is considered as **block scoped**. So if a variable has its accessibility inside the curly braces only, then that variable is termed as block scoped.

# var, let and const

But here is a catch. Variables don't get automatically termed as function scoped or block scoped. It depends solely on its keyword. And that keyword would be one among **var, let and const**.

![02.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663759261524/ef7iDrYhF.jpg align="left")

So, when a variable is declared using the keyword **var,** it's accessible within that particular function only. When it is used outside that particular function, it will show a reference error. That's why variables declared with the help of var are considered as function scoped.

![03.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663760234980/c5Mbgljck.jpg align="left")

As you can see in the above picture, I have declared the variable (num) using **var**. And it's completely accessible within the function (printNum). And it will generate the following output.

![04.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663760302960/u46fNOrwk.jpg align="left")

But if we try to access the value of variable num outside the function printNum.

![05.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663760469517/i3_k_hU27.jpg align="left")

It will give a reference error, as you can see in the picture.

![06.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663760738254/UEusDTSlk.jpg align="left")

But when the variable is declared using either **const** or **let,** then it's accessible only within a particular block, which can be either if conditions, loops or just a simple pair of curly braces.

![07.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663761427459/BRkucoiKu.jpg align="left")

![08.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663762508116/-KBZTF8T7.jpg align="left")

As you can see in the above program, I have declared two variables, oddNum (using let) and evenNum (using const). Now, when I tried to access their value outside the if condition, it showed a reference error in both cases (let and const).

![09.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663764858150/MqiRRK0Jm.jpg align="left")

![10.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663764867686/2BCMibBHQ.jpg align="left")

This shows that when a variable is declared with either const or let, it will be only accessible within that particular block. That's why variables declared with let and const are considered to be **block scoped**.

# Difference between let and const

When we declare a variable using **let**, we can change its value further in the program.

![11.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663765525135/KstwIX_j9.jpg align="left")

As you can see, I have declared a variable (a) using let and initialised it with 5. But after a few lines, I have changed its value to 7. Now, when I run this program, it will give the following output.

![12.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663765658143/58-bBIgsZ.jpg align="left")

As you can see in the output, first it printed the value 5, while the second time it printed the value 7.

But, in the case of **const,** once we initialise the variable with a particular value, we can't change it further throughout the program. **const** makes that variable **constant,** which means it can't be changed in the future. Let's understand it with an example.

![13.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663765825476/VzGVvLscj.jpg align="left")

As you can see, I have declared the variable (a) using const and initialised it with 5. But again, after a few lines, I have changed its value to 7. Now, when I run this program, it will give the following output.

![14.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1663765954386/jqXiNrUB_.jpg align="left")

As you can see, the value of a is printed at first without any hindrance, which is 5. But as I change its value to 7, it gives an error with the following statement :

> TypeError: Assignment to constant variable.

So, once you declare a variable using the keyword **const**, you can't change its value anywhere in the program.

# Conclusion

So basically, what we concluded is that **var, let and const** are 3 keywords which we use to declare a variable. When we declare a variable using var, it's considered as function scope, which means it's accessible within that particular function only. And, when we declare a variable with either let or const, it's considered as block scope, which means it's accessible within a particular block only, which can be either if conditions, loops, or a pair of curly braces. And the only difference between **let and const** is that we can change the value of a variable if we declare it with let. Otherwise, if we declare it using const, then changing the value of a variable is impossible. It makes it a **constant**.
