---
title: "What is MVT ?"
slug: "what-is-mvt"
excerpt: "MVT is a design pattern that separates an application into 3 main logical components: Model, View and Template. Each of these components has its own role in a project. Now before deep diving into all these three components, let's first understand wha..."
tags: ["design-pattern"]
date: "2022-12-05T18:05:58.105Z"
coverImage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677777793920/4271b929-12b4-49a0-8c59-e1419973d98f.png"
---

**MVT** is a design pattern that separates an application into 3 main logical components: **Model**, **View** and **Template**. Each of these components has its own role in a project. Now before deep diving into all these three components, let's first understand what's a design pattern.

**Design Pattern** is a kind of template or solution that different software developers have tested to develop different types of software. It is among the best practices in software development. Design Patterns are very much well-proven and well-tested. As we have different kinds of software, different kinds of design patterns exist side by side. Design Patterns are object-oriented and generic in nature.

# Model

The model is used to create tables. It's used in processing data. It's mainly used to insert or update something in **Database**. It communicates with the view (one of the three components) so that data can be shared with clients as per the business logic.


![01.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1670255542398/69siOAQNR.jpeg align="left")

# View

View works as a mediator between the Template and the Model. The user can send requests by interacting with the template. The view handles these requests and sends them to the Model. After that, the model sends back the appropriate response to the user through the template. Business Logic is written inside the view component. It does an important function like filtering in a database or which or how much data should be shown for a particular request. Server-side logic is written in view components. All those GET and POST methods are processed in this component.


![02.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1670256228552/OhClEjMHM.jpeg align="left")

# Template

The template represents how data should be presented to the user. Users can read or write the data from the template. Basically, it is responsible for showing end-user content, which can also be termed UI (User Interface). It may consist of HTML, CSS, JavaScript mixed with Server Side Template Language.


![03.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1670258541128/d-MHsUzqa.jpeg align="left")

# How Does MVT work ?


![04.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1670258650550/MAbEcccgR.jpeg align="left")

First of all, a user sends a request through routing inside which URLs are written. Through routing, the request goes to the view component. The view then checks whether that request requires the need of a database. Once the necessity of the database is confirmed (through server-side logic), the view communicates with the Model and interacts with the database. Then the model will take the required data from the database and will send it to the view. The view will then process it using that business logic and then it will render the template for the representation of that particular request in the form of a response. That rendered template will be shown to the user as User Interface.

## Another representation of MVT Architecture



![06-crop.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1670260827247/-QHRtmgCz.jpeg align="left")

In this representation, there is one minor change. When the model sends back the data to the view, it then renders the template. After that template sends back the representation of that particular request back to the view in the form of a response and then the view will show the User Interface to the clients. Even though representation is different, the workflow in both approaches is the same.



> In some cases, the model isn't required. Suppose a user sends a request which doesn't need the interaction of the database, In that case, the request will be received by the view and then the view will process it and render it to the template and then the template will show the response. Model is needed when we need to interact with a database. 

Some examples of web frameworks that use the MVT architecture include Django, Flask, and Pyramid. These frameworks are popular choices for building web applications because they provide a clear separation of concerns between the data models, the user interface, and the application logic. This makes it easier for developers to build and maintain complex web applications. Additionally, the MVT architecture allows for easy integration with other components, such as databases and front-end libraries, which can further extend the functionality of the web application.
