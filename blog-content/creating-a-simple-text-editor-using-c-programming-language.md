---
title: "Creating a Simple Text Editor Using the C Programming Language"
slug: "creating-a-simple-text-editor-using-c-programming-language"
excerpt: "As someone interested in programming and exploring different programming languages, I decided to create a simple text editor using the C programming language. This project allowed me to gain a deeper understanding of the language while also allowing ..."
tags: "C, Text Editors, File handling, eof-handling, cli"
tagSlugs: "c, text-editors, file-handling, eof-handling, cli"
date: "2026-02-13T04:11:14.675Z"
publishedAt: "2023-03-07T17:56:43.670Z"
updatedAt: "2026-02-13T04:11:14.675Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1770955850578/1132feaa-4f4f-44c5-9780-bca22b037daf.png"
url: "https://manishmk.hashnode.dev/creating-a-simple-text-editor-using-c-programming-language"
author: "Manish Kumar"
authorUsername: "ManishMK"
authorProfilePicture: "https://cdn.hashnode.com/res/hashnode/image/upload/v1754728990444/f59c3826-4a73-4075-9e55-7585e2283f0f.jpeg"
readTimeInMinutes: 4
reactionCount: 0
responseCount: 0
views: 107
seoTitle: "How to Build a Simple Text Editor Using C Programming Language"
seoDescription: "In this step-by-step guide, learn how to build a simple text editor using the C programming language."
hashnodeId: "64077adb7b4e9e7a3a7a961e"
---

As someone interested in programming and exploring different programming languages, I decided to create a simple text editor using the C programming language. This project allowed me to gain a deeper understanding of the language while also allowing me to create a useful tool.

## **Getting Started**

To use the text editor, you will need to clone or download the repository to your local machine. You will also need to have a C compiler installed to compile and run the program.

Once you have the source code, navigate to the project directory and compile the program using the following command:

```bash
gcc text_editor.c -o text_editor
```

To run the program, enter the following command:

```bash
./text_editor
```

## **Usage**

Upon launching the text editor, you will be presented with a simple command-line interface. The first step is to enter the name of the file you wish to read, write or update along with its extension. Once you have entered the file name, press Enter.

Next, you will be presented with three options:

1. Read an existing file
    
2. Create a new file
    
3. Update an existing file
    

To select an option, enter the corresponding letter and press Enter.

### **Read a File**

To read an existing file, press **"r"** and enter the name of the file you wish to read. The contents of the file will be displayed in the console.

### **Create a New File**

To create a new file, press **"w"** and enter the name of the file you wish to create. You will then be prompted to enter the contents of the file. Once you have entered the desired content, press **Ctrl+D** (for Linux and Mac) or **Ctrl+Z** (for Windows) to save the file.

### **Update an Existing File**

To update an existing file, press **"a"** and enter the name of the file you wish to update. You will then be prompted to enter the new contents of the file. Once you have entered the desired content, press **Ctrl+D** (for Linux and Mac) or **Ctrl+Z** (for Windows) to save the file.

## **Limitations**

It's worth noting that this is a simple text editor, and it has some limitations. For example, it does not support advanced features like syntax highlighting or text formatting. Additionally, it may not be suitable for editing very large files.

## Learnings

While creating this project, I learned the following things:

### **File Handling**

In this text editor project, I gained a better understanding of how to perform basic file I/O operations like opening, reading, writing, and closing files using the C programming language. In this project, I used the `fopen` function to open a file in different modes, like read mode (`"r"`), write mode (`"w"`), and append mode (`"a"`). I used the `fclose` function to close the file after performing the necessary operations.

### **strcspn**

In this text editor project, I used `strcspn` a function to find the length of the file name entered by the user. For example, when the user enters a file name, we need to extract the file name from the input string and remove any leading or trailing whitespaces. I used the `strcspn` function to find the index of the first occurrence of the whitespace character, which gives us the length of the file name.

### **eof**

In this text editor project, I used `eof` to determine whether we have reached the end of the input stream (stdin) while reading input from the user. I used a while loop that reads the input character by character until `eof` is encountered. This loop terminates when the user enters the end-of-file marker (Ctrl+D for Linux/Mac or Ctrl+Z for Windows) to indicate that the input is complete.

## **Conclusion**

Creating a simple **CLI-based text editor** using the C programming language was a great learning experience. It allowed me to gain a deeper understanding of the language and create a useful tool. If you are interested in programming and exploring different programming languages, I highly recommend giving this project a try.

Also, this project is open source, and contributions are always welcome! If you're interested in improving the text editor, feel free to fork the repository and submit a pull request with your changes. Whether it's adding new features or improving existing ones, your contributions can help make this text editor even better. Let's collaborate and make this project even more helpful for everyone!
