---
title: "Git and Github Masterclas"
slug: "git-and-github-masterclas"
excerpt: "What is Git
Git is a tool that allows you to version control.
Suppose we create a file in which Javascript code is written on 20th July 2022. Then on 21st July we did some minute changes in it. And then again on 22nd July, 23rd July and 24th July we ..."
date: "2022-07-21T07:08:39.261Z"
tags: ["git"]
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1658336851733/0dflkZYbk.png"
---

# What is Git

Git is a tool that allows you to version control.

Suppose we create a file in which Javascript code is written on 20th July 2022. Then on 21st July we did some minute changes in it. And then again on 22nd July, 23rd July and 24th July we did some insignificant changes in it simultaneously. But we would only have details of 1st and the last version i.e changes we made on 20th and 24th of July. Rest all modification will get lost which is not good for version control.

We need a very smart tool to do this version control which can highlight all the changes made in each updates whether it's addition or deletion of stuffs.

Like if we want to go and check the source code we had on 23rd of July, 2022 then we must have a powerful tool which have this sorts of functionality. And **GIT** allows us to do that. **Git is** basically a version control system that allows you to version your code or files.

# How to initialize a Git


![01.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658341042170/smyc6Bj3G.jpg align="left")

As you can see in the above picture, to intialize git in a folder we need to use following command :

```
 git int
``` 

 But to do that you need to be in that particular folder in your terminal. **git int** basically initializes an empty git repository. All the tools and magics of git resides in **.git** folder which is a hidden folder. You'll not be able to see it in terminal by using **ls** command.
 
 It is created for every folder separately which means it won't effect your computer globally. It will only effect the folder where you have done git init. If you initialize the git in any folder, that folder will allow you to do git commands.

# How to see the status of git 

To see the status of a git we use the following command :

```
 git status
```

If you write git status in some other folder in which you haven't initialised git then then it will give an error with a message

> fatal: Not a git repository (or any of the parent directories): .git


![02.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658343606985/rVQdcX5QH.jpg align="left")


As you can see in the above picture, **git status** gives information about what **branch** you're in, what **commits** you have made and how many **tracked/untracked** files are there.

# What is branch


![03.webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1658343860389/u7VSU5zlk.webp align="left")


When we do a git init we create a master/main branch. It is the original version.

Suppose you create a javascript file in which you write a simple code

```
console.log("Hello World");
```

This is the original code. Now, you don't want to change the original code. You want to keep the original code. But you want to do some minor changes or want to experiment something.
For example, you want to write **Hello Universe** instead of **Hello World**. Then from the main branch you take out another branch. Since it is coming from the main branch, this branch will have copy of your main code.

# How to move into a new branch

To move into a new branch, use the following command :

```
git checkout -b dev
```

It will checkout (create and move) to a new branch. It will take all the stuffs of old branch and create a new one and name it as dev.


But if you want to move back to an existing branch/main branch then -b is not required.

```
git checkout master
```

# Staging and Committing



![05.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658345729216/5EfRwtpRs.jpeg align="left")

To stage a file, use the following command :

```
git add test.js
```

**git add** takes a modified file in your working directory and places the modified version in a staging area.


![06.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658346136865/T5ibygsC1.jpg align="left")

As you can see in the above picture, after using ***git add*** test.js file is added in a git.

```
git add .
```

It will add all files in git which is not good as it will add those files also which are not required. Hence it may create a problem. So, it's not recommended.

To commit a file, use the following command : 

```
git commit -m "message"
```

It is used to track the staged files after being added by git add.


![07.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658347570724/H8HwDPv_v.jpg align="left")


So, now test.js file is both committed and tracked.

# How to restore the staged file

To restore the staged file, use the following command :

```
git restore --staged filename
```

It will untrack/unstage the staged file. You can only able to restore the deleted file if it is committed. Just by staging the file you can't restore it.

# What is GITHUB

![08.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658348129800/TDQX0e7Fe.png align="left")

Github is the same git repository just that it is stored on cloud. It's just basically UI version of git.

## What is Git Clone

It is a command which is used to make a local copy of a remote repository. It helps us to access the repository through remote URL.

Command for git clone :

```
git clone <link>
```

## Git push and pull


![09.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658349901822/DxktYREDW.jpeg align="left")


The process of sending our changes from our local machine to remote machines is called **push**. Whatever is the current state of your git (local) it wil get published to it's origin(github).

```
git push origin main
```

Here, **origin main** is the branch name. Origin is referred to remote machine (github) and main is referred to local machine (git).

If we push again, then it will show the message "*Everything up-to-date*". It compares the local changes and github changes to see if everything is up-to-date or not.


On the other hand, the process of taking all the new changes which might have been done by other developers to our local system is called **pull**. 

```
git pull origin main
```
# Top 20 Git Commands

Let's summarize this masterclass with Top 20 Git Commands.

1. ```
   git config --global user.email
   ```
   ```
   git config --global user.name
   ```
   It sets global username and email for Git (locally)

2. ```
    git init
   ```
   It initializes an empty git repo on local

3. ```
    git clone <respository URL>
   ```
   It clones any code from Github to Local

4. ```
    git add <filename>
   ```
   
   It adds file/stage to git

5. ```
    git add .
   ```
   It adds all the files to git

6. ```
    git commit -m "<your commit message>"
   ```
   It commits all the staged files to git

7. ```
    git status
   ```
   It shows the status of your git repository

8. ```
    git branch
   ```
   It shows the branches of your git repository

9. ```
    git checkout -b <branch name>
   ```
    It's used to checkout to a new branch

10. ```
    git checkout <branch name>
    ```
    It's used to checkout to an existing branch

11. ```
    git branch -d <branch name>
    ```
    It removes a branch from Git.

12. ```
    git remote -v
    ```
    It shows remote origin URL

13. ```
    git remote add origin <your remote git URL>
    ```
    It adds remote origin URL

14. ```
    git remote remove origin
    ```
    It removes remote origin URL

15. ```
    git fetch
    ```
    It fetches all the remote branches

16. ```
    git push origin <branch name>
    ```
    It pushes your local changes to remote branch

17. ```
    git pull origin <branch name>
    ```
    It pulls your remote changes to local branch

18. ```
    git merge <branch name>
    ```
    It allows you to merge branches from Git

19. ```
    git rebase <branch name>
    ```
    It allows you to integrate changes from one branch to another

20. ```
    git log
    ```
    It checks your git commits and logs.

So, this is it. I know it's not totally covered yet. There are a few more advanced things remaining which I will cover in the next blog. Till then, Stay Tuned !
