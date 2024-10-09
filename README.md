# Cognyte Front End  Test
  
Application designed to manage events, allowing the user to create, edit and delete events.


## Overview
The application is basically a CRUD, where it consumes data from the API.

### Technical decisions

The application is very simple so I chose not to use other more complex libraries, as there would be no need.

For styling, I used some pre-made components that I made myself and just adapted to use in the application.

The design is not the best, my priority was to display the information in a clear and intuitive way, I know there is room for improvement, in case this is evaluated negatively, I have left in the links section some examples of apps in which I developed with much better and more worked interfaces and user experience.

## How to Run

### Prerequisites

#### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```npm install```

In order to run the application Type the following command

```npm run dev```

The Application Runs on **localhost:5173**


## Application

### Third-Party Libraries
  - React-Hook-Form: A library for make forms performant, flexible and extensible forms with easy-to-use validation.<p>
  - axios: A library for making HTTP requests to our backend API.<p>
  - Sass: Css  pre-processor  with allows make more complex stylesheets and adds new features to Css.<p>
  - React-Icons: Library with most popular icons to use with reactjs.
  
#### Unique Components

1. **EventCard**:  This Component displays information about the event and options to edit or delete the event.
2. **NewEventModal**:  This Component open a modal  with a form to create a new event.
3. **EditEventModal**: This Component open a modal  with all event data and allows the user to update event.


## Links

[Clube do Embaixador](https://play.google.com/store/apps/details?id=app.clubedoembaixador&hl=pt_BR)<p>
[Sara Church+](https://play.google.com/store/apps/details?id=br.com.saranossaterra.sntsapp&hl=en)<p>
[Tokio Marine SuperApp](https://play.google.com/store/apps/details?id=br.com.tokiomarine.seguradora.mobile.superapp&hl=pt_BR)
