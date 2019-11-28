# Project Feature Overview

This project is work in progress and not intended for use. Its function at this time is simply to assist a conversation around ways of working with React applications. The application pulls together an opinionated stack of tools along with some opinionated logic to create an example React Application.

## Install

`npm i`

## Features

- *[ESLint](https://eslint.org/)* - IDE Linting for JavaScript/ES7/React/Babel with extneded support for cypress
- *[EditorConfig](https://editorconfig.org/)* - General shared IDE config
- *[Jest](https://jestjs.io/) / [React Testing Library](https://testing-library.com/)* - Unit testing
- *[Cypress](https://www.cypress.io/)* - Developer end-to-end testing
- *[StoryBook](https://storybook.js.org/)* - Component documentation and testing
- *[Plop JS](https://plopjs.com/)* - Templates for pages and components

## Uncertain features

These are features that are currently being explored but are not yet feeling quite right.

- *[Emotion CSS in JS](https://emotion.sh/docs/introduction)* - Themeing and CSS. I am still not convinced about CSS in JS. This project has been configured to allow a parent theme to overide a child themre (The inverse of how I undersand the normal behaviour to work). In this way the component can define a look and feel that the parent theme (implementation) can overide.
- *[SASS](https://sass-lang.com/)* - I much prefer the DRY SASS syntax over SCSS.
- Sotrybook Source view - This is not working correctly at this time.

## Plop template

Micro code generator.

### Install globally

`npm i plop -g`

### Available Plop templates

- Component
- Page

## Component Structure

- Jest for unit testing
- Markdown for documentation
- StoryBook for UI exploration
- SASS for styling

### `npm start`

Start development environment on *http://localhost:3000/*

### `npm test`

Run unit tests

### `npm run build`

Production build

### `npm run storybook`

UI component library decumentation *http://localhost:55515/*

### `npm run cypress`

Developer end-to-end testing enviroment.

----

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
