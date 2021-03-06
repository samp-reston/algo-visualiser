# Documentation
This area of the project details the process of creation and project management entailed during the development of this project.

## Requirements
Even though the requirements are self-conflicted they are still a pivitol step in creating a product. The stakeholder requirements determine the design, architecture, and implementation of the project. I have written the requirements as the User Story template.

The starting requirements are as follows:
1. [AS A user, I WANT TO see an example of a data structure, SO THAT I can understand the data structure](https://github.com/samp-reston/algo-visualiser/issues/3)
2. [AS A user, I WANT TO choose what data structure or algorithm I can see, SO THAT I can explore the different data structures and algorithms](https://github.com/samp-reston/algo-visualiser/issues/4)
3. [AS A user, I WANT TO visualise the data structure or algorithm being manipulated or ran, SO THAT I can understand how the data structure or algorithm changes](https://github.com/samp-reston/algo-visualiser/issues/5)
4. [AS A user, I WANT TO manipulate data structures and algorithms, SO THAT I can see how the data structure or algorithm changes based on events](https://github.com/samp-reston/algo-visualiser/issues/6)
5. [AS A user, I WANT TO step through the changes made on a data structure or algorithm, SO THAT I can understand how it reacts step-by-step](https://github.com/samp-reston/algo-visualiser/issues/7)
6. [AS A user, I WANT TO import my own data, SO THAT I can apply the data structure or algorithm to my own mutated data](https://github.com/samp-reston/algo-visualiser/issues/8)
## User Interface
The user interface is the first design to be done, it is the most important as it is what governs how the users iteract with the application.

Ensuring the interface is user friendly and intuitive is difficult, however, luckily for this application there were very few requirements. With these requirements I was able to develop quick sketches which satisfied the most important to the least important.

After this I needed to design on a colour palette. Usually I got for very blue centric designs so I kept with the theme. I created the design using Figma.

![User Interface Design](./designs/interface/Home-Design.png)

## Architecture
The first part of determining the architecture of the application is a simple component tree in which we detail which components will house which sub-components.

From the design, this allows us to create a hierarchy of components in which we will build the interface. Each TypeScript React project starts with an App.tsx in which we initialise the application so this will be our 'head node'.

![Component Tree](./designs/architecture/Data%20Structure%20and%20Alogrithm%20Visualiser.png)

The dotted boxes symbolise the state sharing between components, as expected there is a lot of state management occuring within the parent Data Structure or Algorithm component.

## Continuous Integration Continuous Delivery
This project will operate with development branches. To build upon these principles further I have protected the main branch from direct commits.

![Branch Design](./designs/CI-CD/Branch%Design.png)

As shown by the following Swim Lane diagram is the CI/CD workflow for each event.

![CI/CD](./designs/CI-CD/Actions%20and%20Workflow.png)

