# Phase 4 Project: CCManagement

# Description

CCManangement is an application that allows companies to post projects they have to the contractors on the application. This project uses a react front-end and a ruby on rails backend.

## Features and Requirements

1. This application uses a Rails API for the backend and React.js frontend
2. RESTful routing is used for the routes in the application
3. CCManagement utilizes three models: Companies, Projects, and Contractors. A project belongs to a company and contractor. A company has many projects and contractors. A contractor has many projects and companies.
4. Projects have full crud capability. Companies and contractors are able to be created and read.
5. This application utilizes the useContext hook in react to avoid prop drilling with the current user.

### Company User Experience

- Create an account
- View available projects from other companies
- Create new projects
- Update and delete projects
- View contractors that they are currently/have worked with

### Contractor User Experience

- Create and account
- View projects that are currently available
- Accept projects that are available
- View companies that they are currently/have worked with