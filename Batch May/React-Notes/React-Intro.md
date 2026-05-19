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
