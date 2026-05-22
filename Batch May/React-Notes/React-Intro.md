## React

_React or ReactJS is a JavaScript frontend library which is used to build interactive, dynamic and performance optimized Single Page Applications. It follows Component Based Architecture which allows react to divide the UI into smaller chunks of reusable codes._

_It was introduced by Jordan Walke in 2013 who was working in Facebook company._

## Library

_Library is a collection of multiple modules or packages. It is reusable in nature and it provides separation of codes means for a specific functionality will have pre written codes._

## Modules

_This term is also known as packages and here will have multiple reusable codes or functionalities which helps development of an application smoothly._

## Frameworks

_This is a collection of multiple libraries. We have multiple frameworks such as Angular, Next, Laravel etc._

## Component Based Architecture

_This is a feature of react which allows react to divide the UI (User Interface) into smaller chunks of reusable codes. . Instead of building a whole page as one large file, you build separate pieces like buttons, forms, and headers, and then combine them to create complex applications._

## Web Application

_Web Application is a way to represent the data globally using internet. Here we have multiple web pages. It can be of single web page also. There are two types of Web Applications._

1. **Single Page Applications:** This is a kind of web application where the contents will get updated dynamically without reloading the entire page. It consits of only one HTML document. It is faster than Multiple page Web Application. We can use multiple tools to develop Single Page Web application such as `Angular`, `React`, `NextJS` etc.

2. **Multiple Page Web Application:** This is a kind of web Application where each and every actions of user will create a reload. The content will get updated after reloading the webpage.

## Difference between SPA and MPA

| Single Page Application                                 | Multiple Page Application                            |
| ------------------------------------------------------- | ---------------------------------------------------- |
| It consits of only one HTML Document                    | Here we have multiple HTML document.                 |
| High Performance                                        | Bit low performance compared to SPA                  |
| Takes more time to load the webpage for the first time. | Takes less time for the first reload compared to SPA |
| Single Page Application is less SEO optimized.          | Good SEO optimization in MPA.                        |
| Low Security                                            | High Security                                        |
| Compatible with Offlline Services                       | Not Compatible with Offline Services.                |
| Easy Maintenance and Development                        | Complex maintenance and Development                  |
| Not Scalable                                            | More Scalable                                        |
| Faster loading Time                                     | Slower Loading time                                  |
| Debugging is more difficult                             | Debugging supported by debugging tools.              |

## How React works?? (Reconciliation Process)

![Reconciliation Proscess](https://media.geeksforgeeks.org/wp-content/uploads/20250802111335673553/how_doest_react_js_work.webp)

<p align="center"><strong>Reconciliation Process</strong></p>

_React follows reconciliation process where the content is fetting updated dynamically. It consists of Real DOM, virtual DOM, new Virtual DOM. The virtual DOM is connected to Real DOM and the new virtual DOM is created whenever we try to change the content in the UI. Both virtual DOM and new virtual DOM will be compared using Diffing algorithm which compares nodes between these both DOMs. In latest React version to compare the nodes React uses Fibre. As soon as the nodes are compared it will be updating the virtual DOM and the virtual DOM will update Real DOM and the content on the UI will get updated dynamically._

## React Installation

1. Install Node JS using the link (https://www.nodejs.org)
2. First command to run in your shell or terminal `npm create vite@latest`
3. It will ask project name, Specify the project name in small case.
4. It will ask you to select framework, select React using arrow key.
5. It will ask you to select variant, Here we need to select JavaScript.
6. It will ask you to change the project directory. using command `cd projectfoldername`
7. it will ask you to install, run the command as `npm install`
8. After getting the installation done you can run the project using command `npm run dev`
9. To stop the server or running project you can use the shortcut key `ctrl` + `c`

## JSX

_JSX stands for JavaScript and XML and it is an extension which allows us to write JavaScript and HTML like content in the same file. It is super fast._

## How to write JSX

_To write JSX first we need to create a file having extension as `.jsx`. It follows certain rules as mentioned below._

1. Inside JSX file if we want to declare javascript variable it must and should have been decalred before return keyword.
2. HTML like contents must and should be written inside return statement.
3. To access JavaScript variable in JSX we need to use JSX expression `{}`.
4. Each and every self closing tag must and should be closed.
5. It follows synthetic Event. (task)
6. Name of the components must and should start with capital letter.
7. Attributes should be written in camelcase.
8. HTML class attribute will be used as `className` inside JSX.
9. HTML for attribute will be considered as `htmlFor` inside JSX.
10. Loops like for, while, do while are not possible inside JSX.
11. Conditional statements like switch, if, if else are not possible inside JSX.
12. Advanced array method such as map filter forEach and reduce are possible inside JSX.
13. Ternary Operator is applicable inside JSX.

## Components in React

_Components are building block of react applications. It is the smallest part of UI having own state and props. It is reusable in nature. It helps to update the UI efficiently or make any changes to the UI._

_We can create components in two ways in React JS_

1. **Class Based Component (CBC):** In react class based component refers to a component created using class keyword. Here we are extending component as React.Component. It is stateful in nature and follows lifecycle methods like render, mounting, unmounting etc.
   _It is deprecated means not in use now_
2. **Functional Components:** These kind of components are simple JavaScript function which returns JSX elements which will be visible to the UI. It is stateless in nature. Here we are having something called as hooks which makes it as stateful and allows to add different behaviours.
   _As per now we are using React 19.2 version here we are using Hooks._

## Difference between class based component and functional component

| Class Based Component                                                                      | Functional Component                                                                             |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Class Based component are stateful.                                                        | Functional Based component are stateless.                                                        |
| In class based component there is render method to display the React element inside the UI | In Functional based component there is no render method inside the component. Here we have props |
| Class Based component does not support hooks                                               | Functional component based on hooks itself.                                                      |
| We can extend the component in Class based using React.Component or React.PureComponent    | In Functional Component Simple JavaScript function will be considered as a component.            |
| Class based component supports life cycle methods of the webpage                           | There is no direct lifecycle methods inside functional component.                                |
| Class based componets are bit complex as compared to Functional component                  | It is easy to write and read.                                                                    |
