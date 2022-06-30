# TechMagic Academy - Angular Homework

### Table of Contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [How to start the project](#how-to-start-the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Resources Used](#resources-used)

### Overview

### Requirements

- [x] Should show users cards
- [x] Should be possibility to select user cards with checkboxes
- [x] Should be possibility to sort user cards
- [x] Should be possibility to delete selected user cards
- [x] Should be possibility to search user by first name or last name

##### P.2 Requirements

- [ ] Use API JsonPlaceholder - https://jsonplaceholder.typicode.com/
- [ ] Get users list
- [ ] Should have a possibility to add a user
- [ ] Should have a possibility to delete user
- [ ] Inputs must contain validation

#### How to start the project

##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### My process

- [x] Generate project using Angular CLI
- [x] Install Angular Material
- [x] Generate Users module
- [x] Add toolbar with task name (‘Angular lecture 1’)
- [x] Add toolbar with actions (select all, sorting, deleting, search input)
- [x] Add user interface (based on JSON data in the end of page)
- [x] Generate users service with mocked users data based on Users interface (4-5 items)
- [x] Show users cards using Angular Built-in structural directives
- [x] Add checkbox on users cards for selection
- [x] Add ‘Select all’ functionality
- [x] Add ‘Sorting’ functionality
- [x] Add ‘Delete’ functionality
- [x] Add ‘Search’ functionality

#### P.2

- [ ] Create API service
- [ ] Add function to get user users list which is sending a GET request to API and retrieve users
- [ ] Add form with the possibility to type first name, last name, email, phone number
- [ ] Add button to send request (use same API and POST request)
- [ ] Use response to add it to the array of users
- [ ] Add button to delete selected user (selection was added in previous homework, use DELETE request)
- [ ] Add validation for form:
  - the first name field must be longer than 2 chars
  - the last name field must be longer than 2 chars and not longer than 60 chars
  - the email field must be email type
  - the phone field must be only numeric symbols

#### Built with

- [Angular](https://angular.io/)

#### Resources

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

- [Theming Angular Material | Angular Material](https://material.angular.io/guide/theming)
- [Angular - Tour of Heroes app and tutorial](https://angular.io/tutorial)
- [Component events with EventEmitter and @Output in Angular - Ultimate Courses](https://ultimatecourses.com/blog/component-events-event-emitter-output-angular-2)
- [Event Emitter in Angular | Delft Stack](https://www.delftstack.com/howto/angular/eventemitter-in-angular/)
